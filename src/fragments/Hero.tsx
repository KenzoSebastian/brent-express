import { Button } from "@/components/ui/button";
import LinkWa from "@/components/ui/LinkWa";

type heroProps = {
  encode: string;
  telp: string;
};

const Hero = (props: heroProps) => {
  return (
    <div className="spacing-top wrap relative h-full">
      <img
        src="./img/car-hero.png"
        alt="car Hero"
        className="object-cover w-3/5 absolute hidden desktop:block"
      />
      <div className="desktop:w-[42%] desktop:absolute right-15 text-center desktop:text-end flex flex-col items-center desktop:items-end">
        <h2 className="text-2xl tablet:text-3xl desktop:text-4xl font-semibold mt-10">Selamat Datang di</h2>
        <h1 className="text-4xl tablet:text-5xl desktop:text6xl- font-extrabold font-montserrat text-core mt-7 desktop:mt-3">
          B'rent Express
        </h1>
        <img
          src="./img/car-hero.png"
          alt="car Hero"
          className="object-cover w-full tablet:w-3/4 mt-5 desktop:hidden"
        />
        <p className="text-sm tablet:text-base desktop:text-lg mt-10 font-medium inline-block w-3/4 mobile:w-3/5 tablet:w-1/2 desktop:w-4/5">
          Kami menawarkan berbagai tipe mobil yang dapat disesuaikan dengan
          kebutuhan Anda. Kepuasan pelanggan selalu menjadi prioritas kami.
        </p>
        <LinkWa encode={props.encode} telp={props.telp}>
          <Button className="mt-10 px-7 bg-core h-fit w-fit text-white text-xl tablet:text-2xl desktop:text-3xl gap-7 rounded-2xl flex items-center shrink-1 hover:scale-105 transition-all">
            <img src="./icon/wa.png" alt="wa" className="w-12 tablet:w-14 desktop:w-17" />
            <div className="flex flex-col">
              <span>Pesan</span>
              <span>Sekarang</span>
            </div>
          </Button>
        </LinkWa>
      </div>
    </div>
  );
};

export default Hero;
