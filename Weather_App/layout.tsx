import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./footer";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  )
}