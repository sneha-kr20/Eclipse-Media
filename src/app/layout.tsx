// src/app/layout.tsx
import "../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Eclipse Media",
  description: "Creative Event & Media Management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white">
        <Header />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
