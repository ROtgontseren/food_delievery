"use client"
import {PropsWithChildren, createContext,useState, useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

interface IUser {
        name : string;
        email: string;
        address: string;
        password?: string;
        rePassword?: string;
}
interface IUserContext {
    userForm: IUser;
    login: (email: string, password: string | undefined) => void;
}


export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({children}:PropsWithChildren ) => {
  const router = useRouter(); 
  const [userForm,setUserForm] = useState<IUser>({
      name : "",
      email: "",
      address: "",
      password: "",
    });
   

    const handleNext = () => {
      router.replace("/");
    };
    

    const login = async (email: string, password: string | undefined) => {
      try {
        const {
          data: { token, user },
        } = await axios.post("http://localhost:8080/auth/login", {
          userEmail: email,
          userPassword: password,
        });
        console.log("newterlee", token, user);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Амжилттай нэвтэрлээ",
          showConfirmButton: false,
          timer: 1500,
        });
        handleNext();
      } catch (error) {
        toast.error("Нэвтэрхэд алдаа гарлаа");
      } finally {
      }
    };
    const [user, setUser] = useState<object | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (error) {
          console.error("Failed to parse user data:", error);
        }
      }
      if (storedToken) {
        const isValidJSON = /^[\],:{}\s]*$/.test(
          storedToken
            .replace(/\\["\\\/bfnrtu]/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
        );
        if (isValidJSON) {
          try {
            const parsedToken = JSON.parse(storedToken);
            setToken(parsedToken);
          } catch (error) {
            console.error("Failed to parse token :", error);
          }
        } else {
          // console.error("Invalid token data:", storedToken);
        }
      }
    }, []);

    return (
    <UserContext.Provider value={{userForm,login}}>
         {children}   
    </UserContext.Provider>
    )
    }
