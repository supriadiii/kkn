import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavbarCopy({ fixed = true, scrolled }: any) {
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
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-10 h-10 justify-center items-center p-1 "
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                fill-rule="evenodd"
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
              className="w-10 h-10 justify-center items-center "
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
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-10 h-10 justify-center items-center p-1 "
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                fill="#000000"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                fill="#000000"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
