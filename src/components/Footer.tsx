import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Eclipse Media.  
        <Link href="/webteam" className="footer ">
          Webteam.
        </Link>
      </p>
    </footer>
  );
}
