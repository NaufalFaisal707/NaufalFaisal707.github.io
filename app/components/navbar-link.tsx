import { House, Sparkles, Pickaxe, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

const navigation = [
  { name: "Beranda", icons: <House /> },
  { name: "Keahlian", icons: <Sparkles /> },
  { name: "Proyek", icons: <Pickaxe /> },
  { name: "Kontak", icons: <Mail /> },
];

export default function NavbarLink({
  setTarget,
}: {
  setTarget: (e: EventTarget) => void;
}) {
  return navigation.map(({ name, icons }, key) => {
    return (
      <Button
        onClick={({ target }) => setTarget(target)}
        variant="link"
        key={key}
        asChild
        className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
      >
        <Link to={"#" + name.toLowerCase()}>
          {icons} {name}
        </Link>
      </Button>
    );
  });
}
