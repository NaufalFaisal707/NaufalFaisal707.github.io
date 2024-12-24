import { House, Sparkles, Pickaxe, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

const navigation = [
  { link: "/", name: "Beranda", icons: <House /> },
  { link: "/keahlian", name: "Keahlian", icons: <Sparkles /> },
  { link: "/proyek", name: "Proyek", icons: <Pickaxe /> },
];

export default function NavbarLink({
  setTarget,
}: {
  setTarget: (e: EventTarget) => void;
}) {
  return (
    <>
      {navigation.map(({ link, name, icons }, key) => {
        return (
          <Button
            onClick={({ target }) => setTarget(target)}
            variant="link"
            key={key}
            asChild
            className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
          >
            <Link to={link}>
              {icons} {name}
            </Link>
          </Button>
        );
      })}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="grid md:flex place-items-center min-h-fit md:text-base text-[12px]"
          >
            <Mail /> Kontak
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hubungi Saya</DialogTitle>
            <DialogDescription>
              Anda dapat menghubungi saya melalui:
            </DialogDescription>
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open("mailto:naufalfaisal707@gmail.com")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open("https://t.me/naufal_faisal")}
              >
                <Send />
                Telegram
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
