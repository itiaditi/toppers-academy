import { createContext, useState, ReactNode } from 'react';
// import { useToast } from '@chakra-ui/react';

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
  isAuth: boolean; 
  setIsAuth:(isAuth:boolean)=>void;
  signup: (userData: any) => Promise<void>;
  login: (credentials: any) => Promise<void>;
  setClassData: ( courseClasses: CourseClass[] ) => void;
  ClassData:CourseClass[];
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuth: true,
  setIsAuth:()=>{},
  signup: async () => {},
  login: async () => {},
  setClassData: () => {}, 
  ClassData:[],
});

interface AuthProviderProps {
  children: ReactNode;
}
interface CourseClass {
  [x: string]: any;
  grade: number;
  titles: string[];
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [ClassData,setClassData]=useState<CourseClass[]>([]);
  // const toast = useToast();
  

  const signup = async (userData: User) => {
    try {
      const response = await fetch('https://toppers-academy.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData,
          password: userData.password, 
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("signup", data);
        setUser(data);
  
        localStorage.setItem('user', JSON.stringify(data.user));
  
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
        console.log(learningProfileResponse);
        
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
            if (parsedUser.email === credentials.email) {
                setUser(parsedUser);
                setIsAuth(true); 
                console.log(isAuth);
                return;
            } else {
                throw new Error('Wrong email');
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


  

  
  return (
    <AuthContext.Provider value={{ user, isAuth,setIsAuth,signup, login, setClassData,ClassData}}>
      {children}
    </AuthContext.Provider>
  );
};