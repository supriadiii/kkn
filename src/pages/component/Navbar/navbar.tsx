import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ fixed = true, scrolled }: any) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navbarClasses = `w-full py-10 px-10 gap-20 bg-white flex items-center shadow-md absolute top-0 left-0 right-0 sm:px-10 justify-${
    fixed ? "sticky" : ""
  } ${scrolled ? "bg-white" : ""}`;

  const menuClasses = `flex flex-col sm:flex-row ${showMenu ? "" : "hidden"}`;

  return (
    <div className={navbarClasses}>
      <div className="flex justify-between w-full ">
        <div className="flex items-center  gap-16">
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
            href="/kontak"
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
        <div className="flex justify-center">
          <Link
            href="/kontak"
            className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 justify-center "
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                fill="#000000"
              />
            </svg>
          </Link>
          <Link
            href="/kontak"
            className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 justify-center "
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                fill="#000000"
              />
            </svg>
          </Link>
          <Link
            href="/kontak"
            className="text-gray-600 hover:border-b-2 hover:border-black hidden sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 justify-center "
              width="8px"
              height="8px"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
