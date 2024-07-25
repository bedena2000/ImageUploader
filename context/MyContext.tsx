'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "Dark" | "Light";

interface State {
  theme: Theme;
}

interface ContextProps {
  state: State;
  setTheme: (theme: Theme) => void;
}

const initialState: State = {
  theme: "Light",
};

const MyContext = createContext<ContextProps | undefined>(undefined);

// Provider
export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>(initialState);

  const setTheme = (theme: Theme) => {
    setState({
      theme: theme,
    });
  };

  return (
    <MyContext.Provider value={{ state, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};

// Hook for using the context

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
