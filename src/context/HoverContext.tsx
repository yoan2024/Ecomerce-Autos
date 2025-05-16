// src/context/HoverContext.tsx
import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

type HoverContextType = {
  hover: string[];
  setHover: React.Dispatch<React.SetStateAction<string[]>>;
};

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export const HoverProvider = ({ children }: { children: React.ReactNode }) => {
  const [hover, setHover] = useState<string[]>([]);
  return (
    <HoverContext.Provider value={{ hover, setHover }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) throw new Error("useHover must be used inside HoverProvider");
  return context;
};
