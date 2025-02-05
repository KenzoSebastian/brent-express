const Navbar = () => {
  return (
    <div className="fixed right-0 left-0 top-0 h-32 bg-navbar z-50">
      <div className="wrap h-full flex items-center justify-between gap-5">
        <img
          src="./img/logo.png"
          alt="logo"
          className="w-30 mobile:w-35 tablet:w-44 desktop:w-47"
        />
        <ul className="hidden desktop:flex gap-9 justify-end text-xl text-white flex-1">
          <li>Beranda</li>
          <li>Tentang Kami</li>
          <li>Daftar Harga</li>
          <li>Mengapa Kami</li>
          <li>Kontak Kami</li>
        </ul>
        <img
          src="./icon/hamburger.png"
          alt="logo"
          className="w-10 mobile:w-12 tablet:w-13 desktop:hidden cursor-pointer hover:scale-105 transition-all"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Navbar