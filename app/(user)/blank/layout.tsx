import Navbar from "@/componenet/NavbarBlank/Navbar";






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <section className="antialiased">
        <Navbar/>
        <section className="pt-5">
          {children}
        </section>
      </section>
);
}
