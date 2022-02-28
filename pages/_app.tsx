import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 px-5 lg:px-48">
      <div className="col-span-12 p-4 text-center lg:col-span-3 rounded-2xl bg-white">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-9 rounded-2xl bg-white">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
