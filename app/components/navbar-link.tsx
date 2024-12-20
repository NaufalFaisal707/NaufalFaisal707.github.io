import { NavLink } from "@remix-run/react";
import { House, Sparkles, Pickaxe, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function NavbarLink() {
  return (
    <>
      <NavLink
        prefetch="intent"
        to="/"
        className={({ isActive }) =>
          isActive ? "rounded-md bg-neutral-100" : ""
        }
      >
        <Button
          variant="ghost"
          className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
        >
          <House />
          Beranda
        </Button>
      </NavLink>
      <NavLink
        prefetch="intent"
        to="/keahlian"
        className={({ isActive }) =>
          isActive ? "rounded-md bg-neutral-100" : ""
        }
      >
        <Button
          variant="ghost"
          className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
        >
          <Sparkles />
          Keahlian
        </Button>
      </NavLink>
      <NavLink
        prefetch="intent"
        to="/proyek"
        className={({ isActive }) =>
          isActive ? "rounded-md bg-neutral-100" : ""
        }
      >
        <Button
          variant="ghost"
          className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
        >
          <Pickaxe />
          Proyek
        </Button>
      </NavLink>
      <NavLink
        prefetch="intent"
        to="/kontak"
        className={({ isActive }) =>
          isActive ? "rounded-md bg-neutral-100" : ""
        }
      >
        <Button
          variant="ghost"
          className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
        >
          <Mail />
          Kontak
        </Button>
      </NavLink>
    </>
  );
}
