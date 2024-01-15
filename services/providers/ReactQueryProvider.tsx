import { QueryClient, QueryClientProvider } from "react-query";

import { ProviderInterface } from "../../types/index";
const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: ProviderInterface) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
