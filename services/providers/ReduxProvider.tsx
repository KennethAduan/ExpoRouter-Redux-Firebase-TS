import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ProviderInterface } from "../../types/index";

import store, { persistor } from "@/state/redux/store";
const ReduxProvider = ({ children }: ProviderInterface) => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};

export default ReduxProvider;
