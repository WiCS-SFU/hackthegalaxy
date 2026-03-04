import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCounter from "@/components/FooterCounter";
import AOSProvider from "@/components/aos-interactions/AOSProvider";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSProvider />
      <Navbar />
      {children}
      <FooterCounter />
      <Footer />
    </>
  );
}