import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "../componenet/Footer/Footer";
// import { Provider} from "react-redux";
// import store from "@/Redux/store";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Page ",
  description: "Website For Show Movies",
  keywords:['movies', "watching","strong","action"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      // <Provider store={store}>
    <html lang="en">
      <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <section >
            {children}
          </section>
          <Footer/>
      </body>
    </html>
        // </Provider>
  );
}
