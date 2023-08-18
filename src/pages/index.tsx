import backgroundImage from "../../public/asset/background.jpg";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar/navbar";
import Visi from "./visimisi";
import Layout from "./component/layout";
import Image from "next/image";

export default function Home() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <Layout>
      <div className="h-screen bg-cover bg-no-repeat bg-center bg-[url(/asset/background.jpg)] flex">
        <div className="h-full justify-center items-center">
          <div className="w-full text-end px-12 md:px-48 h-full flex flex-col justify-center items-end">
            <p className="text-white text-6xl font-bold">Desa Tebing Tinggi</p>
            <p className="text-white mt-4 text-xl font-bold">
              Kecamatan Tanjung Beringin
            </p>
            <p className="text-white mt-2 text-2xl font-bold">
              Kabupaten Serdang Berdagai
            </p>
          </div>
        </div>
      </div>
      <div className="h-full mx-8 md:mx-24 ">
        <div className="py-24 md:py-56 md:flex">
          <Image
            src="/asset/visi.png"
            alt="Image Description"
            width={534}
            height={275}
          />
          <div className="text-end py-8 md:py-0">
            <p className="text-4xl font-black">Visi</p>
            <p>
              Terwujudnya masyarakat desa tebing tinggi yang sehat, cerdas dan
              sejahtera.
            </p>
            <p>
              menggambarkan pandangan masa depan yang diinginkan untuk
              masyarakat di Desa Tebing Tinggi. Visi ini mencerminkan cita-cita
              dan tujuan utama dalam pembangunan dan pengembangan desa tersebut.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between">
          <div className="text-start py-8 md:py-0 w-full ">
            <p className="text-4xl font-black">Misi</p>
            <ul className="">
              <li>
                <strong>1. Kesehatan dan Edukasi:</strong>
                <p className="ml-4">
                  • Mengedukasi masyarakat tentang pola hidup sehat dan
                  pencegahan penyakit.
                </p>
                <p className="ml-4">
                  • Memastikan akses mudah ke layanan kesehatan berkualitas.
                </p>
              </li>
              <li>
                <strong>2. Pendidikan Merata dan Berkualitas:</strong>
                <p className="ml-4">
                  • Memberi beasiswa kepada siswa berprestasi.
                </p>
                <p className="ml-4">
                  • Membangun kurikulum pendidikan yang mendukung kreativitas
                  dan keterampilan.
                </p>
              </li>
              <li>
                <strong>3. Pemberdayaan Ekonomi:</strong>
                <p className="ml-4">
                  • Menyediakan pelatihan wirausaha dan manajemen usaha.
                </p>
                <p className="ml-4">• Mendorong koperasi dan produk lokal.</p>
              </li>
              <li>
                <strong>4. Infrastruktur dan Lingkungan:</strong>
                <p className="ml-4">
                  • Meningkatkan akses ke air bersih dan sanitasi.
                </p>
                <p className="ml-4">
                  • Membangun infrastruktur transportasi dan pengelolaan sampah.
                </p>
              </li>
            </ul>
          </div>
          <Image
            src="/asset/visi.png"
            alt="Image Description"
            width={534}
            height={275}
          />
        </div>
        <div className="mb-20"></div>
      </div>
    </Layout>
  );
}
