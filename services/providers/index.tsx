import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React, { ReactNode } from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "@/state/redux/store";

interface ProviderProps {
  children: ReactNode;
}
const AppProviders = ({ children }: ProviderProps) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </ThemeProvider>
  );
};

export default AppProviders;
