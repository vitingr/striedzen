"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { checkIsPublicRoute } from "@/utils/check-route";
import Loader from "@/components/Loader";

const UserContext = createContext<any>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  const router = useRouter();

  const isPublic = checkIsPublicRoute(path);

  const [cookiesData, setCookiesData] = useState<any>([]);
  const [userData, setUserData] = useState([]);

  const getSessionInfo = async () => {
    try {
      const requisition = await fetch("/api/getUserInfo");
      const response = await requisition.json();
      setCookiesData(response);
    } catch (error) {
      throw new Error("Não foi possível obter os dados da sessão do usuário!");
    }
  };

  const getUserInfo = async () => {
    try {
      console.log("Função a ser feita aqui");
    } catch (error) {
      throw new Error("Não foi possível encontrar esse usuário");
    }
  };

  const getSession = async () => {
    await getSessionInfo();
  };

  useEffect(() => {
    getSession();
  }, []);

  useEffect(() => {
    if (cookiesData.id !== undefined && cookiesData) {
      getUserInfo();
    }
  }, [cookiesData]);

  return isPublic || cookiesData.id ? (
    <UserContext.Provider
      value={{ cookiesData, userData, getSessionInfo, getUserInfo }}
    >
      {children}
    </UserContext.Provider>
  ) : (
    <Loader />
  );
};

export const getUser = () => useContext(UserContext)
