import { Nullable } from "@/types";
import { Session } from "next-auth";
import { createContext, useContext } from "react";

export const UserContext = createContext<Nullable<Session>>(null)

export const useUser = () => useContext(UserContext)