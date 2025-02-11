import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
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
  return (
    <div className="fixed right-0 left-0 top-0 h-26 mobile:h-28 tablet:h-30 desktop:h-32 bg-navbar z-50">
      <div className="wrap h-full flex items-center justify-between gap-5">
        <img
          src="./img/logo.png"
          alt="logo"
          className="w-30 mobile:w-35 tablet:w-44 desktop:w-47"
        />
        <ul className="hidden desktop:flex gap-8 justify-end text-[19px] text-white flex-1">
          {menu.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.child}</a>
            </li>
          ))}
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src="./icon/hamburger.png"
              alt="logo"
              className="w-7 mobile:w-9 tablet:w-11 desktop:hidden cursor-pointer hover:scale-105 transition-all"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white p-0 desktop:hidden">
            {menu.map((item) => (
              <DropdownMenuItem
                key={item.href}
                className="w-45 tablet:w-50 p-2 tablet:p-3 transition-all hover:bg-secondary"
              >
                <a className="text-base tablet:text-lg" href={item.href}>
                  {item.child}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
