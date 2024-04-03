import { createContext, useState, ReactNode } from 'react';
import { useToast } from '@chakra-ui/react';

interface User {
  id: number;
  email:string;
  name:string;
  dateOfBirth:any;
  password:string;
}

interface AuthContextType {
  user: User | null;
  signup: (userData: any) => Promise<void>;
  login: (credentials: any) => Promise<void>; // Keep the return type as Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signup: async () => {},
  login: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
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
        setUser(data);
        
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(data));
  
        // If you want to store the token as well, assuming it's provided in the response
        // localStorage.setItem('token', data.token);
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // const signup = async (userData: any) => {
  //   try {
  //     const response = await fetch('https://toppers-academy.onrender.com/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data);
  //     } else {
  //       throw new Error('Signup failed');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

 
  const login = async (credentials: { email: string; password: string }): Promise<void> => {
  try {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      throw new Error('No user found');
    }
    const userData: User = JSON.parse(storedUser);

    // Check if the provided email matches the stored email
    if (credentials.email !== userData.email) {
      throw new Error('Incorrect email');
    }

    // Check if the provided password matches the stored password
    if (credentials.password !== userData.password) {
      throw new Error('Incorrect password');
    }

    // If email and password match, set the user in state
    setUser(userData);

    // Display a success toast
    toast({
      title: 'Logged in successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  } catch (error) {
    // Explicitly specify the error type as Error
    const errorMessage = (error as Error).message || 'Please check your credentials and try again.';
    // Display an error toast for invalid credentials
    toast({
      title: 'Login failed',
      description: errorMessage,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
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
    <AuthContext.Provider value={{ user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};