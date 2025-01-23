import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Sidebar from "./(components)/sidebar";
import Header from "./(components)/header";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Awwwards",
};

export const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-screen">
          <div className="h-full lg:w-2/12 w-0 p-0 overflow-hidden shadow-md lg:p-2">
            <Sidebar />
          </div>
          <div className="h-full lg:w-10/12 w-full">
            <div className="h-14 w-full shadow-md">
              <Header />
            </div>
            <main className="p-5">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
