import Image from "next/image";
import Navbar from "../component/Navbar/navbar";
import { useEffect, useState } from "react";

export default function Visi() {
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

      <div className="w-full h-full">
        <div className="px-56 py-80 flex">
          <Image
            src="/asset/visi.png"
            alt="Image Description"
            width={534}
            height={275}
          />
          <div className="text-end justify-center items-center">
            <p className="text-4xl font-[800]">Visi</p>
            <p>
              Digital Artisans is a Bali based digital agency started in early
              2016. Digital Artisans provides broad range of services, including
              web design, web development, Android and iOS app development,
              graphic design, and many more. We always provide the best solution
              possible for your business through our expertise. So wait no more.
              Drop us a call and let’s begin your business story with us!.
              Digital Artisans is a Bali based digital agency started in early
              2016. Digital Artisans provides broad range of services, including
              web design, web development, Android and iOS app development,
              graphic design, and many more. We always provide the best solution
              possible for your business through our expertise. So wait no more.
              Drop us a call and let’s begin your business story with us!.
              Digital Artisans is a Bali based digital agency started in early
              2016. Digital Artisans provides broad range of services, including
              web design, web development, Android and iOS app development,
              graphic design, and many more. We always provide the best solution
              possible for your business through our expertise. So wait no more.
              Drop us a call and let’s begin your business story with us!
            </p>
          </div>
        </div>
        <div className="px-56  flex">
          <div className="text-start justify-center items-center">
            <p className="text-4xl font-[800]">Visi</p>
            <p>
              Digital Artisans is a Bali based digital agency started in early
              2016. Digital Artisans provides broad range of services, including
              web design, web development, Android and iOS app development,
              graphic design, and many more. We always provide the best solution
              possible for your business through our expertise. So wait no more.
              Drop us a call and let’s begin your business story with us!.
              Digital Artisans is a Bali based digital agency started in early
              2016. Digital Artisans provides broad range of services, including
              web design, web development, Android and iOS app development,
              graphic design, and many more. We always provide the best solution
              possible for your business through our expertise. So wait no more.
              Drop us a call and let’s begin your business story with us!.
              Digital Artisans is a Bali based digital agency started in early
              2016. Digital Artisans provides broad range of services, including
              web design, web development, Android and iOS app development,
              graphic design, and many more. We always provide the best solution
              possible for your business through our expertise. So wait no more.
              Drop us a call and let’s begin your business story with us!
            </p>
          </div>
          <Image
            src="/asset/visi.png"
            alt="Image Description"
            width={534}
            height={275}
          />
        </div>
      </div>
    </>
  );
}
