import { Button } from "./components/ui/button";
import Hero from "./fragments/Hero";
import Navbar from "./fragments/Navbar";

const App = () => {
  const pesan = "halo admin, saya ingin bertanya";
  const encode = encodeURIComponent(pesan);
  return (
    <div className="h-[5000px] relative">
      <div className="h-screen relative">
        <img
          src="./img/bg-hero.png"
          alt="background"
          className="w-full h-full absolute -z-50 object-cover"
        />
        <Navbar />
        <Hero />
      </div>
      <a
        href={`https://wa.me/6281511755980?text=${encode}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="fixed bottom-5 left-5 text-white flex items-center gap-2 bg-whatsapps hover:scale-105 transition-all rounded-full">
          <img src="./icon/wa.png" alt="wa" className="w-7" />
          Chat Admin
        </Button>
      </a>
      <div id="tentang">tentang</div>
    </div>
  );
};

export default App;
