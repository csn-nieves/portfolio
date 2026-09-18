import CavaniState from "@/src/Context";
import CavaniHead from "@/src/layout/CavaniHead";
import "@/styles/globals.css";
import "@/styles/portfolio.css";

export default function App({ Component, pageProps }) {
  return (
    <CavaniState>
      {!Component.usePortfolioHead && <CavaniHead />}
      <Component {...pageProps} />
    </CavaniState>
  );
}
