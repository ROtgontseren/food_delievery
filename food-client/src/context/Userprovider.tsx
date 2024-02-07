"use client"
import {PropsWithChildren, createContext,useState} from "react";
import axios from "axios";
import {redirect} from "next/navigation";
interface IUser {
        name : string;
        email: string;
        address: string;
        password?: string;
        rePassword?: string;
}
interface IUserContext {
    user: IUser;
    login: ()=> void;  
}


export const UserContext = createContext<IUserContext>({
    user: {
      name : "",
      email: "",
      address: "",
      password: "",
    },
    login: () => void{}
});

export const UserProvider = ({children}:PropsWithChildren ) => {
    const [user,setUser] = useState<IUser>({
      name : "",
      email: "",
      address: "",
      password: "",
    });
    const [loginData,setLoginData] = useState({
      email: "",
      password: "",
    });
    

    const login = async () => {
      try {
        const data = axios.post("http://localhost:8080/auth/login", {
          email: loginData.email,
          password: loginData.password,
        });
        console.log("LOGIN SUCCESS!!!");
        redirect("/");
      } catch (error) {
        console.log("ERROR IN LOGIN FUNCTION");
      }
    };

    return (
    <UserContext.Provider value={{user,login}}>
         {children}   
    </UserContext.Provider>
    )
    }
