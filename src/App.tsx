import { Button } from "./components/ui/button";
import Navbar from "./fragments/Navbar";

const App = () => {
  return (
    <div className="h-[5000px] relative">
      <div className="h-screen relative">
        <img
          src="./img/bg-hero.png"
          alt="background"
          className="w-full h-full absolute -z-50 object-cover"
        />
        <Navbar />
      </div>
      <Button className="fixed bottom-5 left-5 flex items-center gap-2 text-white bg-whatsapps hover:scale-105 transition-all rounded-full">
        <img src="./icon/wa.png" alt="wa" className="w-7" />
        Chat Admin
      </Button>
    </div>
  );
};

export default App;
