import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import {
  AlertNotificationRoot,
  ALERT_TYPE,
  Toast,
} from "react-native-alert-notification";

import ReactQueryProvider from "./ReactQueryProvider";
import ReduxProvider from "./ReduxProvider";
import { ProviderInterface } from "../../types/index";

import { NetworkInfo } from "@/hooks";
const AppProviders = ({ children }: ProviderInterface) => {
  const colorScheme = useColorScheme();
  const isNetworkUnavailable = NetworkInfo();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ReactQueryProvider>
        <ReduxProvider>
          <AlertNotificationRoot>
            <>
              {isNetworkUnavailable &&
                Toast.show({
                  type: ALERT_TYPE.DANGER,
                  title: "No Internet Connection",
                  autoClose: false,
                  textBody:
                    "Please check your internet connection and try again.",
                })}
              {children}
            </>
          </AlertNotificationRoot>
        </ReduxProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
