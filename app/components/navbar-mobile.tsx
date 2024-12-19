import { NavLink } from "@remix-run/react";
import { Button } from "./ui/button";
import { House, Mail, Pickaxe, Sparkles } from "lucide-react";

export default function NavbarMobile() {
  return (
    <nav className="p-2 backdrop-blur bg-white bg-opacity-70 md:hidden block overflow-auto">
      <div className="flex justify-around items-center min-w-fit">
        <NavLink prefetch="intent" to="/">
          <Button
            variant="ghost"
            className="grid place-items-center min-h-fit text-[12px]"
          >
            <House />
            Beranda
          </Button>
        </NavLink>
        <NavLink prefetch="intent" to="/keahlian">
          <Button
            variant="ghost"
            className="grid place-items-center min-h-fit text-[12px]"
          >
            <Sparkles />
            Keahlian
          </Button>
        </NavLink>
        <NavLink prefetch="intent" to="/proyek">
          <Button
            variant="ghost"
            className="grid place-items-center min-h-fit text-[12px]"
          >
            <Pickaxe />
            Proyek
          </Button>
        </NavLink>
        <NavLink prefetch="intent" to="/kontak">
          <Button
            variant="ghost"
            className="grid place-items-center min-h-fit text-[12px]"
          >
            <Mail />
            Kontak Saya
          </Button>
        </NavLink>
      </div>
    </nav>
  );
}
