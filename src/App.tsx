import { Button } from "./components/ui/button";
import LinkWa from "./components/ui/LinkWa";
import HargaSection from "./fragments/HargaSection";
import Hero from "./fragments/HeroSection";
import MengapaSection from "./fragments/MengapaSection";
import Navbar from "./fragments/Navbar";
import TentangSection from "./fragments/TentangSection";

const App = () => {
  const pesan = "halo admin, saya ingin bertanya";
  const telp = "6281511755980";
  const encode = encodeURIComponent(pesan);
  return (
    <div className="h-[5000px] relative">
      <LinkWa encode={encode} telp={telp}>
        <Button className="fixed bottom-5 left-5 text-white flex items-center gap-2 bg-whatsapps hover:scale-105 transition-all rounded-full z-50">
          <img src="./icon/wa.png" alt="wa" className="w-7" />
          Chat Admin
        </Button>
      </LinkWa>
      <Navbar />
      <div className="h-screen relative ">
        <img
          src="./img/bg-hero.png"
          alt="background"
          className="w-full h-[calc(100%+100px)] absolute -z-50 object-cover"
        />
        <Hero encode={encode} telp={telp} />
        <div className="h-[100px] absolute -bottom-[100px] right-0 left-0 bg-gradient-to-b from-transparent to-white" />
      </div>
      <TentangSection />
      <HargaSection telp={telp} />
      <MengapaSection />
    </div>
  );
};

export default App;
