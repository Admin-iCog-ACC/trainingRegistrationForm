import { QueryClient, QueryClientProvider } from 'react-query';
import { useRef } from 'react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <RecoilRoot>

      <Component {...pageProps} />;
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
