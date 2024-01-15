import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import ReactQueryProvider from "./ReactQueryProvider";
import ReduxProvider from "./ReduxProvider";
import { ProviderInterface } from "../../types/index";

const AppProviders = ({ children }: ProviderInterface) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ReactQueryProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
