import { Button } from "@/components/ui/button";
import Wrapper from "@/components/ui/Wrapper";

type kontakSectionProps = {
  telp: string;
};

const KontakSection = (props: kontakSectionProps) => {
  const dataKontak = [
    {
      id: "1",
      title: "Lokasi",
      icon: "location",
      content:
        "Jl. Lap. Tembak No.21, RT.8/RW.1, Cibubur, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720",
      withButton: false,
    },
    {
      id: "2",
      title: "Email",
      icon: "email",
      content: "benzrentexpress@gmail.com",
      withButton: true,
    },
    {
      id: "3",
      title: "Whatsapp",
      icon: "wa",
      content: "0815-1175-5980",
      withButton: true,
    },
  ];
  return (
    <Wrapper id="kontak" divider="divider2" bgColor="bg-secondary">
      <h1 className="heading text-center">Kontak Kami</h1>
      <div className="flex gap-10 items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3537309557837!2d106.87409737475161!3d-6.348223393641625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ece553b05921%3A0x922201bc9d4e25df!2sKomplek%20Hubad%20Cibubur!5e0!3m2!1sid!2sid!4v1739190821532!5m2!1sid!2sid"
          className="h-[600px] w-full hidden desktop:block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex gap-10 flex-col w-full">
          {dataKontak.map((data) => (
            <div
              key={data.id}
              className="flex flex-col gap-10 w-full items-center desktop:items-start"
            >
              <div className="flex gap-3 tablet:gap-5 items-start bg-white p-4 tablet:p-7 rounded-2xl w-[90%] mobile:w-[80%] tablet:w-[70%] desktop:w-[95%] desktop:max-w-[570px] shadow-lg">
                <img
                  src={`./icon/${data.icon}.png`}
                  alt={data.icon}
                  className="w-[50px] mobile:w-[60px] tablet:w-[75px]"
                />
                <div className="w-full">
                  <h3 className="font-bold text-xl tablet:text-2xl">
                    {data.title}
                  </h3>
                  <p className="text-sm tablet:text-base">{data.content}</p>
                  <div className="flex justify-end mt-3">
                    {data.withButton && (
                      <a
                        href={
                          data.title === "Email"
                            ? `mailto:${data.content}`
                            : `https://wa.me/${props.telp}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit"
                      >
                        <Button
                          className={`${
                            data.title === "Email"
                              ? "bg-[#2196F3] hover:bg-[#2586D4]"
                              : "bg-whatsapps hover:bg-[#228A15]"
                          } text-white flex gap-2 text-base tablet:text-lg tablet:py-6`}
                        >
                          Hubungi Kami{" "}
                          <img
                            src="./icon/arrow.png"
                            alt="arrow"
                            className="w-5 tablet:w-6"
                          />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {data.title === "Lokasi" && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3537309557837!2d106.87409737475161!3d-6.348223393641625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ece553b05921%3A0x922201bc9d4e25df!2sKomplek%20Hubad%20Cibubur!5e0!3m2!1sid!2sid!4v1739190821532!5m2!1sid!2sid"
                  className="h-[600px] w-full desktop:hidden"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default KontakSection;
