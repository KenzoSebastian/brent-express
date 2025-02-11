import Wrapper from "@/components/ui/Wrapper";


const TentangSection = () => {
  const paragraf = [
    {
      id: 1,
      content:
        "Selamat datang di B'rent Express, jasa sewa mobil profesional yang siap memenuhi semua kebutuhan transportasi Anda. Dengan pengalaman yang luas di industri rental mobil, kami berkomitmen untuk memberikan layanan terbaik dengan profesionalisme dan kenyamanan sebagai prioritas utama.",
    },
    {
      id: 2,
      content:
        "Di B'rent Express, kami memahami bahwa setiap perjalanan memiliki kebutuhan yang berbeda. Oleh karena itu, kami menawarkan berbagai pilihan armada berkualitas, mulai dari mobil keluarga hingga kendaraan mewah, seperti Alphard, Mobilio, HRV, Innova, Avanza, Expander, Hiace, dan banyak lagi. Anda dapat memilih paket sewa yang sesuai dengan kebutuhan Anda, baik harian, full day (24 jam), mingguan, maupun bulanan.",
    },
    {
      id: 3,
      content:
        "Apa yang membedakan B'rent Express dari penyedia jasa lainnya adalah dedikasi kami terhadap kepuasan pelanggan. Kami berusaha keras untuk memberikan pengalaman sewa mobil yang tak terlupakan, dengan menjamin keandalan, kebersihan, dan kenyamanan setiap kendaraan yang kami tawarkan. Tim kami yang profesional dan ramah siap membantu Anda dalam setiap langkah perjalanan.",
    },
    {
      id: 4,
      content:
        "Percayakan kebutuhan transportasi Anda kepada B'rent Express, dan nikmati perjalanan yang nyaman dan aman. Kami siap menjadi mitra perjalanan Anda!",
    },
  ];
  return (
    <Wrapper id="tentang" divider="divider1">
      <div className="text-center">
        <h1 className="heading">Tentang Kami</h1>
        {paragraf.map((item) => (
          <p
            key={item.id}
            className="text-sm tablet:text-base desktop:text-lg font-medium inline-block w-[95%] tablet:w-[90%] desktop:w-4/5 mb-7"
          >
            {item.content}
          </p>
        ))}
      </div>
    </Wrapper>
  );
};

export default TentangSection;
