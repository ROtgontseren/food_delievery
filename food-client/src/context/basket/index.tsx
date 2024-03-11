"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "../user";

import axios from "axios";
import { toast } from "react-toastify";

interface IBasket {
  food: {
    name: string;
    _id: string;
    description: string;
    price: number;
  };
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasket[];
  addBasket: (food: any) => Promise<void>;
  deleteBasket: (food: any) => Promise<void>;
};

const createReq = async (url: string, food: any) => {
  const { data } = (await axios.post(url, food, {
    // headers: { Authorization: `Bearer ${token}` },
  })) as {
    data: any;
  };
  return { basket: data.basket, message: data.message };
};

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [baskets, setBaskets] = useState([]);
  const [basketFoods, setBasketFoods] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getBaskets = async () => {
    console.log("TOKENBASKET", token);
    try {
      if (token) {
        const {
          data: { basket },
        } = await axios.get("http://localhost:8080/basket", {
          // headers: { Authorization: `Bearer ${token}` },
        });
        console.log("B", basket.foods);
        setBaskets(basket.foods);

        setRefresh(true);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  console.log("getallbaskets", baskets);

  const addBasket = async (food: any) => {
    console.log("Foods", food);
    try {
      const { basket, message } = await createReq(
        "http://localhost:8080/basket",
        food
      );
      console.log("RES", basket);
      setBaskets({ ...baskets });
      toast.success(message);
    } catch (error: any) {
      console.log("Error",error.message);
    }
  };

  const deleteBasket = async (food: any) => {
    try {
      setLoading(true);
      if (user) {
        const {
          data: { basket },
        } = await axios.delete("http://localhost:8080/basket", {
          userId: user._id,
          foodId: food._id,
        } as {});
        setLoading(false);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  useEffect(() => {
    getBaskets();
  }, [refresh, token]);

  return (
    <BasketContext.Provider
      value={{ loading, baskets, addBasket, deleteBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
