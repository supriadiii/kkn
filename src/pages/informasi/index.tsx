import Image from "next/image";
import Navbar from "../component/Navbar/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Informasi() {
  const [scrolled, setScrolled] = useState(false);
  const beritaData = [
    {
      judulBerita:
        "Polisi: Kerugian Penipuan Modus Arisan Lelang di Bogor Capai Rp 2 M ",
      tanggalTerbit: "02 januari 2023, 14:00",
      imageUrl: "/asset/pp.png",
    },
    {
      judulBerita:
        "Tarif Diusulkan Jadi Rp 5.000 Saat Jam Sibuk, Pelanggan TransJ Setuju? ",
      tanggalTerbit: "02 januari 2023, 14:00",
      imageUrl: "/asset/pp.png",
    },
    {
      judulBerita:
        "Hari Libur Agustus 2023: Nikmati Momen Bersejarah di Indonesia",
      tanggalTerbit: "02 januari 2023, 14:00",
      imageUrl: "/asset/pp.png",
    },
    {
      judulBerita:
        "Kabupaten Tangerang Wakili Provinsi Ikut Lomba Proklim Lestari - Berita Kabupaten Tangerang",
      tanggalTerbit: "02 januari 2023, 14:00",
      imageUrl: "/asset/pp.png",
    },
    {
      judulBerita:
        "Bareskrim Selidiki Dugaan Rocky Gerung Sebarkan Berita Bohong, Bukan Penghinaan Presiden Jokowi - Kompas.com",
      tanggalTerbit: "02 januari 2023, 14:00",
      imageUrl: "/asset/pp.png",
    },
    {
      judulBerita:
        "JELASKAN CARA PEMBUATAN BERITA ONLINE – Pemerintah Kota Palangka Raya",
      tanggalTerbit: "02 januari 2023, 14:00",
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

      <div className="w-full h-full bg-slate-100">
        <div className="flex pt-60 pb-20 px-48">
          <div>
            <p className="text-4xl font-bold">
              Berita Terkini Dari Desa Tebing Tinggi
            </p>
            <p className="text-2xl font-bold">Date Now</p>
          </div>
        </div>
        <div className="px-48">
          {beritaData.map((member: any, index: number) => (
            <Link
              href={{
                pathname: "/detailBerita",
                query: { data: JSON.stringify(member) },
              }}
              key={index}
              className="hover:text-red-500"
            >
              <div className="flex px-16 py-10 gap-10 mb-16 items-center bg-white rounded-2xl">
                <Image
                  src="/asset/pp.png"
                  alt="Image Description"
                  width={302}
                  height={302}
                  className="rounded-[50px]  my-2"
                />
                <div>
                  <p className="text-4xl font-[800] mb-4">
                    {member.judulBerita}
                  </p>
                  <p>{member.tanggalTerbit}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="h-20 mt-20"></div>
      </div>
    </>
  );
}
