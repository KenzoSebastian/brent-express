import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LinkWa from "@/components/ui/LinkWa";
import Wrapper from "@/components/ui/Wrapper";
import { motion } from "motion/react";

type HargaSectionProps = {
  telp: string;
};

const HargaSection = (props: HargaSectionProps) => {
  const cars = [
    {
      id: 1,
      title: "Avanza AllNew",
      img: "avanza.png",
      harga: "400k/hari",
    },
    {
      id: 2,
      title: "Innova Reborn",
      img: "innova.png",
      harga: "700k/hari",
    },
    {
      id: 3,
      title: "Toyota Hiace",
      img: "hiace.png",
      harga: "1.300k/hari",
    },
    {
      id: 4,
      title: "Alphard Gen 3",
      img: "alphard.png",
      harga: "2.700k/hari",
    },
    {
      id: 5,
      title: "All New Ertiga Hybrid",
      img: "ertiga.png",
      harga: "250k/hari",
    },
    {
      id: 6,
      title: "Honda Mobilio",
      img: "mobilio.png",
      harga: "250k/hari",
    },
  ];
  return (
    <Wrapper id="harga" divider="divider2" bgColor="bg-secondary">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="heading"
        >
          Daftar Harga
        </motion.h1>
        <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-10 place-items-center text-start">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0 }}
              transition={{ type: "tween" }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <LinkWa
                telp={props.telp}
                encode={encodeURIComponent(
                  `Halo Admin, Saya ingin memesan mobil ${car.title}, apa masih ada?`
                )}
              >
                <Card className="bg-white shadow-lg transition-all hover:scale-105 hover:bg-slate-200">
                  <CardHeader>
                    <img
                      src={`./cars/${car.img}`}
                      alt="car"
                      className="object-cover"
                    />
                    <CardTitle className="text-2xl text-start">
                      {car.title}
                    </CardTitle>
                    <hr />
                  </CardHeader>
                  <CardContent className="flex gap-4 items-center">
                    <p>Harga mulai dari</p>
                    <span className="bg-whatsapps px-5 py-3 text-white font-semibold rounded-full">
                      {car.harga}
                    </span>
                  </CardContent>
                  <CardFooter className="flex gap-2 items-center text-core">
                    <img src="./icon/warning.png" alt="warning" />
                    Syarat dan ketentuan berlaku
                  </CardFooter>
                </Card>
              </LinkWa>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default HargaSection;
