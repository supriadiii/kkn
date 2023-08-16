import Image from "next/image";
import Navbar from "../component/Navbar/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function DetailBerita() {
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
  return (
    <>
      <Navbar fixed={scrolled} scrolled={scrolled} />

      <div className="w-full h-full  bg-slate-100">
        <div className="flex justify-center text-center mt-20 py-32  px-48 bg-black  text-white">
          <div>
            <p className="text-4xl font-bold">
              Berita Terkini Dari Desa Tebing Tinggi
            </p>
            <p className="text-2xl font-bold">Date Now</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center h-96">
            <div className="flex h-full justify-center items-center">
              <Image
                src="/asset/background.jpg"
                alt="Image Description"
                width={500}
                height={250}
                className="rounded-[50px] object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center items-center h-96">
            <div className="flex h-full justify-center items-center">
              <Image
                src="/asset/background.jpg"
                alt="Image Description"
                width={500}
                height={250}
                className="rounded-[50px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-20">
          <p>
            {" "}
            Digital Artisans is a Bali based digital agency started in early
            2016. Digital Artisans provides broad range of services, including
            web design, web development, Android and iOS app development,
            graphic design, and many more. We always provide the best solution
            possible for your business through our expertise. So wait no more.
            Drop us a call and let’s begin your business story with us!. Digital
            Artisans is a Bali based digital agency started in early 2016.
            Digital Artisans provides broad range of services, including web
            design, web development, Android and iOS app development, graphic
            design, and many more. We always provide the best solution possible
            for your business through our expertise. So wait no more. Drop us a
            call and let’s begin your business story with us!. Digital Artisans
            is a Bali based digital agency started in early 2016. Digital
            Artisans provides broad range of services, including web design, web
            development, Android and iOS app development, graphic design, and
            many more. We always provide the best solution possible for your
            business through our expertise. So wait no more. Drop us a call and
            let’s begin your business story with us!
          </p>
        </div>
        <div className="h-20 mt-20"></div>
      </div>
    </>
  );
}
