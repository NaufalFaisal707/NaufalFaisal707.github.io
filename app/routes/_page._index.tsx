import { ArrowRight, Github, Instagram, Mail } from "lucide-react";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export const clientLoader = () => {
  return [
    { title: "Github", url: "", icon: <Github /> },
    { title: "Instagram", url: "", icon: <Instagram /> },
    { title: "Email", url: "", icon: <Mail /> },
  ];
};

export default function BerandaComponent() {
  const loaderData = useLoaderData<typeof clientLoader>();

  const ContainerXl = ({ children }: { children: ReactNode }) => {
    return (
      <div className="mx-auto max-w-5xl h-full flex items-center relative">
        {children}
      </div>
    );
  };

  return (
    <>
      <section className="h-svh">
        <ContainerXl>
          <div className="flex flex-col w-fit max-w-[30rem] gap-y-2">
            <span className="md:text-2xl text-lg capitalize">saya</span>

            <h1 className="md:text-6xl text-4xl font-semibold font-serif">
              Naufal Faisal
            </h1>

            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt lobortis dui, et pulvinar lorem molestie eget.
            </p>

            <div className="flex gap-2 my-4">
              <Button variant="outline">
                Tentang saya <ArrowRight />
              </Button>
            </div>

            <div className="flex gap-4">
              {loaderData.map(({ title, icon, url }, key) => {
                return (
                  <a
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    key={key}
                    title={title}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="absolute right-24">
            <div className="relative *:absolute size-80  *:top-[50%] *:left-[50%]">
              <motion.img
                initial={{
                  scale: 0,
                  translateX: "-100%",
                  translateY: "-140%",
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                whileHover={{ rotate: -10, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                src="/react-app.svg"
                alt="react"
                className="z-10"
              />

              <motion.img
                initial={{
                  scale: 0,
                  translateX: "40%",
                  translateY: "-20%",
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
                }}
                whileHover={{ rotate: -10, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                src="/remix-app.svg"
                alt="remix"
                className="z-10"
              />

              <motion.img
                initial={{
                  scale: 0,
                  translateX: "-140%",
                  translateY: "50%",
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                  scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                }}
                whileHover={{ rotate: -10, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                src="/shadcn-app.svg"
                alt="shadcn/ui"
                className="z-10"
              />

              <img
                src="/atlas.svg"
                alt="atlas"
                className="z-0 -translate-x-[50%] -translate-y-[50%]"
              />
            </div>
          </div>
        </ContainerXl>
      </section>
    </>
  );
}
