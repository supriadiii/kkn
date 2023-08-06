import backgroundImage from "../../public/asset/background.jpg";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar/navbar";
import Visi from "./visimisi";

export default function Home() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const [scrolled, setScrolled] = useState(false);

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
      <div className="h-screen bg-cover bg-no-repeat bg-center bg-[url(/asset/background.jpg)] flex flex-col">
        <div className="h-full justify-center items-center">
          <div className="w-full text-end px-48 h-full flex flex-col justify-center items-end">
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
      <div className="mt-10">
        <Visi />
      </div>
    </>
  );
}
