const Footer = () => {
  const menu = [
    {
      child: "Beranda",
      href: "#",
    },
    {
      child: "Tentang Kami",
      href: "#tentang",
    },
    {
      child: "Daftar Harga",
      href: "#harga",
    },
    {
      child: "Mengapa Kami",
      href: "#mengapa",
    },
    {
      child: "Kontak Kami",
      href: "#kontak",
    },
  ];

  const medsos = [
    {
      id: "1",
      icon: "wa",
      content: "0815-1175-5980",
      href: "https://wa.me/6281511755980",
    },
    {
      id: "2",
      icon: "email",
      content: "benzrentexpress@gmail.com",
      href: "mailto:benzrentexpress@gmail.com",
    },
    {
      id: "3",
      icon: "facebook",
      content: "Benz RentExpress",
      href: "https://www.facebook.com/BenzRentExpress",
    },
    {
      id: "4",
      icon: "instagram",
      content: "@b.rentexpress",
      href: "https://www.instagram.com/b.rentexpress",
    },
  ];
  return (
    <footer className="spacing-top spacing-bottom bg-navbar text-white">
      <div className="wrap flex flex-col items-center justify-between gap-15 relative">
        <ul className="flex flex-row gap-8 justify-center desktop:justify-between w-full text-lg tablet:text-xl flex-wrap">
          {menu.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.child}</a>
            </li>
          ))}
        </ul>
        <hr className="w-full" />
        <div className="flex flex-col items-stretch tablet:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-xl tablet:text-2xl font-semibold">
              B'rent Express
            </h2>
            <p className="text-base tablet:text-lg mt-3">
              Jasa sewa mobil profesional yang siap memenuhi semua kebutuhan
              transportasi Anda. Dengan pengalaman yang luas di industri rental
              mobil, kami berkomitmen untuk memberikan layanan terbaik dengan
              profesionalisme dan kenyamanan sebagai prioritas utama.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl tablet:text-2xl font-semibold">
              Hubungi Kami
            </h2>
            {medsos.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <img
                    src={`./icon/${item.icon}.png`}
                    alt={item.icon}
                    className="w-11 hover:scale-105 transition-all"
                  />
                </a>
                <p className="text-base tablet:text-lg">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col mb-15">
            <h2 className="text-xl tablet:text-2xl font-semibold">
              Alamat Kami
            </h2>
            <p className="text-base tablet:text-lg mt-3">
              Jl. Lap. Tembak No.21, RT.8/RW.1, Cibubur, Kec. Ciracas, Kota
              Jakarta Timur, Daerah Khusus Ibukota Jakarta 13720.
            </p>
          </div>
        </div>
        <p className="absolute bottom-0 right-1/2 translate-x-1/2 tablet:translate-x-0 tablet:right-5 desktop:right-10 text-secondary text-sm tablet:text-base mt-3">
          Copyright © 2025 B'rent Express
        </p>
      </div>
    </footer>
  );
};

export default Footer;
