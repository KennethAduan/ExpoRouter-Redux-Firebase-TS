import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import ReduxProvider from "./ReduxProvider";
import { ProviderInterface } from "../../types/index";
const AppProviders = ({ children }: ProviderInterface) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
