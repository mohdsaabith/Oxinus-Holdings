import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuOpenContextProps {
  menuOpen: any;
  setMenuOpen: React.Dispatch<React.SetStateAction<any>>;
}

const MenuOpenContext = createContext<MenuOpenContextProps | undefined>(
  undefined
);

export function MenuOpenProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuOpenContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuOpenContext.Provider>
  );
}

export function useMenuOpen() {
  const context = useContext(MenuOpenContext);
  if (!context) {
    throw new Error("useMenuOpen must be used within a MenuOpenProvider");
  }
  return context;
}
