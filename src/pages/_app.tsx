import FooterLayout from "@components/Layouts/FooterLayout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <FooterLayout>
        <Component {...pageProps} />
      </FooterLayout>
    </RecoilRoot>
  );
}
