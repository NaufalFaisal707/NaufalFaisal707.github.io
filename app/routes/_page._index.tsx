import { Link } from "@remix-run/react";
import { MoveRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function IndexPage() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="place-self-center md:self-center self-start text-center md:text-start space-y-2 md:space-y-4 order-1 md:order-none">
        <span className="md:text-2xl text-lg">Perkenalkan saya</span>
        <h1 className="md:text-6xl text-4xl font-semibold font-serif">
          Naufal Faisal
        </h1>
        <h1 className="md:text-4xl text-2xl font-serif">
          Full Stack React Developer.
        </h1>
        <div>
          <Button variant="outline" asChild>
            <Link to="/proyek">
              Proyek Saya <MoveRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="place-self-center md:self-center self-end">
        <img
          src="/Life_Management.png"
          alt="gambar"
          className="md:w-full w-80"
        />
      </div>
    </div>
  );
}
