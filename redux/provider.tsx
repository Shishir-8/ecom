"use client";

import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";


interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate  loading={null} persistor={persistor}>

      {children}
      </PersistGate>
    </ReduxProvider>
  );
}