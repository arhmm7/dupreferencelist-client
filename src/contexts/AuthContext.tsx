import { createContext } from "react";

type AuthContextType = {
  userData: any;
  setUserData: (data: any) => void;
};

export const AuthContext = createContext<AuthContextType>({
  userData: null,
  setUserData: () => {},
});