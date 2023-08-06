import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ fixed = true, scrolled }: any) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navbarClasses = `w-full py-10 px-10 gap-20 flex items-center shadow-md absolute top-0 left-0 right-0 sm:px-10 justify-${
    fixed ? "sticky" : ""
  } ${scrolled ? "bg-white" : ""}`;

  const menuClasses = `flex flex-col sm:flex-row ${showMenu ? "" : "hidden"}`;

  return (
    <div className={navbarClasses}>
      <Image
        src="/asset/logo.png"
        alt="Image Description"
        width={175}
        height={20}
      />

      <Link
        href="/"
        className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
      >
        Beranda
      </Link>
      <Link
        href="/visimisi"
        className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
      >
        Visi Dan Misi
      </Link>
      <Link
        href="/struktur"
        className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
      >
        Struktur Organisasi
      </Link>
      <Link
        href="/informasi"
        className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
      >
        Informasi
      </Link>
      <Link
        href="/informasi"
        className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
      >
        Kontak
      </Link>

      <button
        className="text-gray-600 hover:border-b-2 hover:border-black sm:hidden"
        onClick={toggleMenu}
      >
        Informasi
      </button>
    </div>
  );
}
