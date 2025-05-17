import { Metadata } from "next";








export const metadata: Metadata = {
  title: "Movies Page ",
  description: "Website For Show Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <section className="">
    {children}
    </section>

  );
}
