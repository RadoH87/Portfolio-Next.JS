import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 my-28 px-14 md:mb-16 sm:px-20 md:px-32 lg:px-5 2xl:px-36 ">
        <div className="h-full col-span-12 p-4 text-center bg-white shadow-lg dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-black ">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-gray-400 shadow-lg lg:col-span-9 dark:bg-dark-500 rounded-2xl shadow-black">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
