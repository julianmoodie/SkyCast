import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <span className="divider">|</span>
      <Link href="/forecast">7 Day Forecast</Link>
      <span className="divider">|</span>
      <Link href="/contact">About This App</Link>
    </nav>
  );
}
