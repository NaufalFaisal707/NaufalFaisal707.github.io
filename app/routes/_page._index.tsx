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
      <div className="mx-auto max-w-5xl h-full flex items-center relative min-h-fit">
        {children}
      </div>
    );
  };

  return (
    <>
      <section className="h-svh mx-4">
        <ContainerXl>
          <div className="flex flex-col w-fit max-w-[30rem] gap-y-2">
            <motion.span
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="md:text-2xl text-lg"
            >
              Saya
            </motion.span>

            <motion.h1
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.06 }}
              className="md:text-6xl text-5xl font-semibold font-serif"
            >
              Naufal Faisal
            </motion.h1>

            <motion.p
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.08,
                type: "spring",
                bounce: 0.5,
              }}
              className="md:text-base text-sm"
            >
              Saya menggunakan framework React untuk membuat aplikasi berbasis
              web, karena fleksibilitas dan popularitasnya yang cukup baik.
            </motion.p>

            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                type: "spring",
                bounce: 0.5,
              }}
              className="my-4"
            >
              <Button variant="outline">
                Tentang saya <ArrowRight />
              </Button>
            </motion.div>

            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.12,
                type: "spring",
                bounce: 0.5,
              }}
              className="flex gap-4"
            >
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
            </motion.div>
          </div>

          <div className="absolute right-0 md:z-auto -z-10 md:opacity-100 opacity-5 md:blur-none blur-sm">
            <div className="relative *:absolute size-96 *:top-[50%] *:left-[50%] select-none">
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
                src="/app_react.svg"
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
                src="/app_remix.svg"
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
                src="/app_shadcn.svg"
                alt="shadcn/ui"
                className="z-10"
              />

              <img
                src="/app_bgbakat.svg"
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
