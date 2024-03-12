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
  const [userData, setUserData] = useState<any>([]);

  const getSessionInfo = async () => {
    try {
      const requisition = await fetch("/api/getCookies");
      const response = await requisition.json();
      setCookiesData(response);
    } catch (error) {
      throw new Error("Não foi possível obter os dados da sessão do usuário!");
    }
  };

  const getUserInfo = async () => {
    try {
      await fetch("/api/user/getUserInfo").then(async (requisition) => {
        const response = await requisition.json()
        setUserData(response)
      }).catch(async (error) => {
         await createUser()
      })
    } catch (error) {
      throw new Error("Não foi possível encontrar esse usuário");
    }
  };

  const createUser = async () => {
    try {
      const response = await fetch("/api/user/createUser", {
        method: "POST",
        body: JSON.stringify({
          name: `${cookiesData.firstName} ${cookiesData.lastName}`,
          image: cookiesData.imageUrl,
          email: cookiesData.emailAddresses[0].emailAddress,
          uuid: cookiesData.id
        })
      })

      if (response.ok) {
        setUserData(response)
      } else {
        throw new Error("Não foi possível cadastrar esse usuário");
      }
    } catch (error) {
      throw new Error("Não foi possível criar um novo usuário")
    }
  }

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
