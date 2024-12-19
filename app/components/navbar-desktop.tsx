import { NavLink } from "@remix-run/react";
import { Button } from "./ui/button";
import { House, Mail, Pickaxe, Sparkles } from "lucide-react";

export default function NavbarDesktop() {
  return (
    <nav className="p-4 overflow-auto sticky backdrop-blur bg-white bg-opacity-70 top-0 hidden md:block">
      <div className="flex justify-between items-center min-w-fit">
        <h1>NF</h1>
        <div className="flex gap-4">
          <NavLink prefetch="intent" to="/">
            <Button variant="ghost">
              <House />
              Beranda
            </Button>
          </NavLink>
          <NavLink prefetch="intent" to="/keahlian">
            <Button variant="ghost">
              <Sparkles />
              Keahlian
            </Button>
          </NavLink>
          <NavLink prefetch="intent" to="/proyek">
            <Button variant="ghost">
              <Pickaxe />
              Proyek
            </Button>
          </NavLink>
          <NavLink prefetch="intent" to="#">
            <Button variant="ghost">
              <Mail />
              Kontak Saya
            </Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
