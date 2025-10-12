import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Eclipse Media. Crafted with ❤️ for creativity.  
        <Link href="/contact" className="ml-1 underline">
          Contact Us
        </Link>
      </p>
    </footer>
  );
}
