"use client"
import {PropsWithChildren, createContext,useState} from "react";

interface IUser {
        name : string;
        email: string;
        address: string;
        password?: string;
        rePassword?: string;
}
interface IUserContext {
    user: IUser;
    login: () => void;    
}


export const UserContext = createContext<IUserContext>({
    user: {
      name : "",
      email: "",
      address: "",
      password: "",
    },
    login: function ():void{},
});

export const UserProvider = ({children}:PropsWithChildren ) => {
    const [user,setUser] = useState<IUser>({
      name : "",
      email: "",
      address: "",
      password: "",
    });
    return (
    <UserContext.Provider value={{user ,login: () => {}}}>
         {children}   
    </UserContext.Provider>
    )
}