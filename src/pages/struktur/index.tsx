import Image from "next/image";
import Navbar from "../component/Navbar/navbar";
import { useEffect, useState } from "react";

export default function Visi() {
  const [scrolled, setScrolled] = useState(false);
  const teamMembers = [
    {
      name: "Supriadi",
      role: "Kepala Desa",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Nama Anggota 1",
      role: "Jabatan 1",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Nama Anggota 2",
      role: "Jabatan 2",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Supriadi",
      role: "Kepala Desa",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Nama Anggota 1",
      role: "Jabatan 1",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Nama Anggota 2",
      role: "Jabatan 2",
      imageUrl: "/asset/pp.png",
    },
    // ... tambahkan data anggota tim lainnya
  ];
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar fixed={scrolled} scrolled={scrolled} />

      <div className="w-full h-full">
        <div className="flex justify-center  pt-60 pb-20 border-b-4 ">
          <div className="text-center">
            <p className="text-4xl font-bold">STRUKTUR ORGANISASI</p>
            <p className="text-2xl font-bold">DESA TEBING TINGGI</p>
          </div>
        </div>
        <div className=" sm:grid gap-4 grid-cols-3 py-28 gap-y-12  justify-center ">
          {teamMembers.map((member, index) => (
            <div
              className=" inline-block justify-center items-center text-center rounded-2xl w-80 py-2 gap-y-4 my-4 mx-auto"
              key={index}
            >
              <Image
                src="/asset/pp.png"
                alt="Image Description"
                width={302}
                height={302}
                className="rounded-[50px] mx-auto my-2"
              />
              <p className="text-2xl font-[800]">{member.name}</p>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
