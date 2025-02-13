import Wrapper from "@/components/ui/Wrapper";
import { motion } from "motion/react";

const MengapaSection = () => {
  const reasons = [
    {
      id: "1",
      icon: "cs.png",
      heading: "CS Ramah & Responsif",
      paraf:
        "Tim CS kami terlatih untuk melayani dengan ramah dan siap membantu setiap pertanyaan Anda dengan respons cepat.",
    },
    {
      id: "2",
      icon: "supir.png",
      heading: "Supir Berpengalaman",
      paraf:
        "Supir profesional kami memiliki izin resmi, terlatih dengan baik, dan siap memberikan perjalanan yang aman serta nyaman.",
    },
    {
      id: "3",
      icon: "mobil.png",
      heading: "Mobil Berkualitas",
      paraf:
        "Kami rutin merawat kendaraan agar selalu dalam kondisi prima, memastikan keamanan dan kenyamanan Anda.",
    },
    {
      id: "4",
      icon: "harga.png",
      heading: "Harga Terjangkau",
      paraf:
        "Dapatkan mobil berkualitas dengan tarif kompetitif tanpa mengorbankan layanan. Sewa mobil dengan harga sesuai anggaran!",
    },
    {
      id: "5",
      icon: "asuransi.png",
      heading: "Asuransi Lengkap",
      paraf:
        "Setiap mobil dilindungi asuransi, memberi Anda ketenangan saat berkendara tanpa khawatir hal tak terduga.",
    },
    {
      id: "6",
      icon: "pilihan.png",
      heading: "Pilihan Mobil Beragam",
      paraf:
        "Tersedia berbagai jenis mobil, mulai dari city car (Brio, Agya, Sigra), MPV (Avanza, Livina, Calya), hingga mobil premium (Xpander, Alphard). Kami juga menyediakan mobil pengantin untuk acara spesial Anda.",
    },
  ];
  return (
    <Wrapper id="mengapa" divider="divider1">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="heading"
        >
          Mengapa Memilih B'rent Express?
        </motion.h1>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-10 place-items-center">
          {reasons.map((reason) => (
            <motion.div
              initial={{ opacity: 0, scale: .75 }}
              transition={{ type: "tween" }}
              whileInView={{ opacity: 1, scale: 1 }}
              key={reason.id}
              className="flex items-start gap-4 max-w-90"
            >
              <img src={`./icon/${reason.icon}`} alt={`icon ${reason.id}`} />
              <div className="text-start">
                <h3 className="font-semibold text-xl">{reason.heading}</h3>
                <p>{reason.paraf}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MengapaSection;
