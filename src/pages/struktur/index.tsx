import Image from "next/image";
import Navbar from "../component/Navbar/navbar";
import { useEffect, useState } from "react";
import Layout from "../component/layout";

export default function Visi() {
  const [scrolled, setScrolled] = useState(false);
  const teamMembers = [
    {
      name: "M. Nasir",
      role: "Kepala Desa",
    },
    {
      name: "Fahreza",
      role: "Sekdes",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Safri Purba",
      role: "Kaur Umum",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Ramadani",
      role: "Kaur Keuangan ",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Rolas Sirait",
      role: "Kasi Kesejartaan & Pelayanan",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Taufik",
      role: "Kasi Pemerintahan",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Zulpan Efendi Sinaga",
      role: "Kadus dusun 1",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Feri Nova Ginting",
      role: "Kadus dusun 2",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Indra Manotar Pakpahan",
      role: "Kadus dusun 3",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Kennedi Sihombing",
      role: "Kadus dusun 4",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Halasson Sitorus",
      role: "Kadus dusun 5",
      imageUrl: "/asset/pp.png",
    },
    {
      name: "Togam Nainggolan",
      role: "Kadus dusun 6",
      imageUrl: "/asset/pp.png",
    },
    // ... tambahkan data anggota tim lainnya
  ];

  return (
    <Layout>
      <div className="">
        <div className="flex justify-center py-20 mx-4 border-b-4 ">
          <div className="text-center">
            <p className="text-4xl font-black">STRUKTUR ORGANISASI</p>
            <p className="text-2xl font-medium">DESA TEBING TINGGI</p>
          </div>
        </div>
        <div className=" grid gap-4 grid-cols-3 py-28  md:gap-12  justify-center mx-8">
          {teamMembers.map((member, index) => (
            <div
              className=" justify-center items-center text-center rounded-2xl  py-2 gap-y-4 my-4 bg-slate-400 md:mx-20"
              key={index}
            >
              <p className="text-base md:text-2xl font-bold">{member.name}</p>
              <p className="md:text-base text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
