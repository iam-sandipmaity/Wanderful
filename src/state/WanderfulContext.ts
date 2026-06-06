import { createContext, useContext } from "react";

export const WanderfulContext = createContext<any>(null);

export function useWanderful() {
  const context = useContext(WanderfulContext);

  if (!context) {
    throw new Error("useWanderful must be used inside WanderfulContext.Provider");
  }

  return context;
}
