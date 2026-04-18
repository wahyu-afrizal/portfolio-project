import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site-frame">
      <div aria-hidden="true" className="site-frame__glow" />
      <Navbar />
      <div className="site-frame__content">{children}</div>
      <SiteFooter />
    </div>
  );
}
