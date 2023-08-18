import Image from "next/image";
import Link from "next/link";

export default function Informasi() {
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

  return (
    <div className="bg-slate-100">
      <div className="flex  mx-8 sm:mx-20  ">
        {/* <div>
          <p className="text-4xl font-bold">
            Berita Terkini Dari Desa Tebing Tinggi
          </p>
          <p className="text-2xl font-bold">Date Now</p>
        </div> */}
      </div>
      <div className="bg-slate-100 min-h-screen flex items-center justify-center">
        <p className="text-7xl font-black text-center">Coming Soon</p>
      </div>
      {/* {beritaData.map((member: any, index: number) => (
        <Link
          href={{
            pathname: "/detailBerita",
            query: { data: JSON.stringify(member) },
          }}
          key={index}
          className="hover:text-red-500"
        >
          <div className="md:flex my-12 p-4 mx-4 gap-12 items-center bg-white rounded-2xl">
            <Image
              src="/asset/pp.png"
              alt="Image Description"
              width={302}
              height={302}
              className="rounded-2xl mx-auto md:mx-8"
            />
            <div>
              <p className="text-xl md:text-4xl font-black mb-4">
                {member.judulBerita}
              </p>
              <p>{member.tanggalTerbit}</p>
            </div>
          </div>
        </Link>
      ))} */}
    </div>
  );
}
