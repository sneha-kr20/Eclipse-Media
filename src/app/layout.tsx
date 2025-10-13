import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <body
  className="relative bg-no-repeat bg-cover bg-center min-h-screen"
  style={{ backgroundImage: "url(/images/background.jpg)" }}
>

        <Header />
        <main className="relative z-10 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
