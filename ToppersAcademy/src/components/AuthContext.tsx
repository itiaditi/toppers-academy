import { createContext, useState, ReactNode } from 'react';
import { useToast } from '@chakra-ui/react';

interface User {
  id: number;
  email:string;
  name:string;
  dateOfBirth:any;
  password:string;
  userName: string;
}
interface LearningProfile{
  userId:Number;
  userName:String;
  courses:[];
}

interface AuthContextType {
  user: User | null;
  isAuth: boolean; // Added isAuth property
  signup: (userData: any) => Promise<void>;
  login: (credentials: any) => Promise<void>; // Keep the return type as Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuth: false, // Default value for isAuth
  signup: async () => {},
  login: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const toast = useToast();
  

  const signup = async (userData: User) => {
    try {
      const response = await fetch('https://toppers-academy.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData,
          password: userData.password, // Send the password as a plain string
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("signup", data);
        setUser(data);
  
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(data));
  
        // Create learning profile object
        const learningProfile: LearningProfile = {
          userId: data.user.id,
          userName: data.user.userName,
          courses: []
        };
        console.log(learningProfile);
        // Save learning profile to the server
        const learningProfileResponse = await fetch('https://toppers-academy.onrender.com/learningProfiles', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(learningProfile),
        });
  
        // If you want to store the token as well, assuming it's provided in the response
        // localStorage.setItem('token', data.token);
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  
  const login = async (credentials: { email: string; password: string }): Promise<void> => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        if (parsedUser.email === credentials.email && parsedUser.password === credentials.password) {
          setUser(parsedUser);
          setIsAuth(true); // Update isAuth to true upon successful login
          console.log(isAuth);
          return;
        } else {
          throw new Error('Wrong credentials');
          console.log(isAuth);
        }
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  

  
  // const login = async (credentials: { email: string; password: string }): Promise<void> => {
  //   try {
  //     const response = await fetch('https://api.example.com/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(credentials),
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data);
  //     } else {
  //       throw new Error('Login failed');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  
  return (
    <AuthContext.Provider value={{ user, isAuth,signup, login, }}>
      {children}
    </AuthContext.Provider>
  );
};