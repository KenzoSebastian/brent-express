import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LinkWa from "@/components/ui/LinkWa";
import Wrapper from "@/components/ui/Wrapper";

type HargaSectionProps = {
  telp: string;
};

const HargaSection = (props: HargaSectionProps) => {
  const cars = [
    {
      id: 1,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 2,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 3,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 4,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 5,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 6,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 7,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 8,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
    {
      id: 9,
      title: "Toyota Innova Zenix AT",
      img: "car-hero.png",
      harga: "450k/hari",
    },
  ];
  return (
    <Wrapper id="harga" divider="divider2" bgColor="bg-secondary">
      <div className="text-center">
        <h1 className="heading">Daftar Harga</h1>
        <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
          {cars.map((car) => (
            <LinkWa
              key={car.id}
              telp={props.telp}
              encode={encodeURIComponent(
                `Halo Admin, Saya ingin memesan mobil ${car.title}, apa masih ada?`
              )}
            >
              <Card className="bg-white shadow-lg transition-all hover:scale-105 hover:bg-slate-200">
                <CardHeader>
                  <img
                    src={`./img/${car.img}`}
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
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default HargaSection;
