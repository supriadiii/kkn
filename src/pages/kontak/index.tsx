import Image from "next/image";
import Navbar from "../component/Navbar/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DetailBerita from "../detailBerita/index";
import { storage } from "../../config/firebase";
export default function Kontak() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const data = router.query.data;

  // Parse the data back to an object
  const beritaData =
    typeof data === "string"
      ? JSON.parse(data)
      : { judulBerita: "", tanggalTerbit: "", imageUrl: "" };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  console.log("ini beritaData", beritaData);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [file, setFile] = useState<any>(null);

  const handleFileChange = (e: any) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      fileRef.put(file).then(() => {
        console.log("File uploaded successfully");
      });
    }
  };

  return (
    <>
      <Navbar fixed={scrolled} scrolled={scrolled} />

      <div className="w-full h-full  bg-slate-100">
        <div className="flex justify-center text-center mt-20 py-40  px-48 bg-black  text-white">
          <div>
            <p className="text-4xl font-bold">Kontak Kami</p>
          </div>
        </div>

        <div className="flex justify-center gap-10 px-32 my-20 mx-auto ">
          <div className="justify-center w-[38rem] bg-white item-center text-center py-20 px-40  rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-28 h-28 justify-center mx-auto mb-8"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>

            <p className=" text-xl">+62808xxxxxxxxx</p>
          </div>
          <div className="justify-center w-[38rem] bg-white item-center text-center py-20 px-40  rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-28 h-28 justify-center mx-auto mb-8"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <p className=" text-xl">ANAONIMUS@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center gap-10 px-32 my-20 mx-auto h-96 ">
          <div className="justify-center w-[38rem] bg-white item-center text-center py-20 px-40  rounded-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-28 h-28 justify-center mx-auto mb-8"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>

            <p className=" text-xl">
              Tebing Tinggi, Tanjung Beringin, Serdang Bedagai Regency, North
              Sumatra 20996
            </p>
          </div>
        </div>
        <Image
          src="/asset/maps.png"
          alt="Image Description"
          width={1000}
          height={800}
          className="rounded-[40px] mx-auto my-2"
        />
        <div className="h-20   mt-20"></div>
      </div>
    </>
  );
}
