import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="spacing-top wrap relative h-full">
      <img
        src="./img/car-hero.png"
        alt="car Hero"
        className="absolute object-cover"
      />
      <div className="h-100 w-135 absolute right-15 text-end flex flex-col items-end">
        <h2 className="text-4xl font-semibold mt-10">Selamat Datang di</h2>
        <h1 className="text-6xl font-extrabold font-montserrat text-core mt-3">
          B'rent Express
        </h1>
        <p className="text-lg mt-10 font-medium inline-block w-4/5">
          Kami menawarkan berbagai tipe mobil yang dapat disesuaikan dengan
          kebutuhan Anda. Kepuasan pelanggan selalu menjadi prioritas kami.
        </p>
        <Button className="mt-10 bg-core h-fit w-fit text-white text-3xl gap-7 rounded-2xl flex items-center shrink-1">
          <img src="./icon/wa.png" alt="wa" className="w-17" />
          <div className="flex flex-col">
            <span>Pesan</span>
            <span>Sekarang</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
