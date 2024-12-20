import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const clientLoader = () => {
  return [
    { title: "HTML", src: "/html5-brands-solid.svg" },
    { title: "CSS", src: "/css3-alt-brands-solid.svg" },
    { title: "JavaScript", src: "/js-brands-solid.svg" },
    { title: "NodeJS", src: "" },
    { title: "ExpressJS", src: "" },
    { title: "Socket.io", src: "" },
    { title: "React", src: "/react.svg" },
    { title: "TypeScript", src: "/ts-logo-128.svg" },
    { title: "Remix", src: "/remix-letter-light.svg" },
    { title: "Prisma", src: "" },
    { title: "MongoDB", src: "" },
    { title: "PostgreSQL", src: "" },
    {
      title: "Bootstrap",
      src: "/bootstrap-brands-solid.svg",
    },
    { title: "TailwindCSS", src: "/tailwindcss-mark.svg" },
    { title: "Shadcn/UI", src: "/shadcn-ui-seeklogo.svg" },
  ];
};

export default function KeahlianPage() {
  const loaderData = useLoaderData<typeof clientLoader>();

  return <h1>on Maintenance!</h1>;

  // return (
  //   <div className="h-full flex flex-col items-center justify-center">
  //     <div className="grid grid-cols-2">
  //       <div className="grid place-content-center space-y-4">
  //         <h1 className="text-6xl font-semibold font-serif">Keahlian Saya</h1>
  //         <span className="text-2xl">
  //           Berikut adalah beberapa framework dan bahasa pemograman yang sering
  //           saya gunakan dalam pengembangan aplikasi berbasis web
  //         </span>
  //       </div>

  //       <div className="grid place-content-center">
  //         <div className="grid grid-cols-4 w-fit h-fit gap-4">
  //           {loaderData.map(({ src, title }, key) => {
  //             return (
  //               <Button
  //                 key={key}
  //                 variant="outline"
  //                 className="flex flex-col items-center gap-2 min-h-fit select-none min-w-fit"
  //               >
  //                 <img
  //                   src={src}
  //                   alt={title}
  //                   className="size-12"
  //                   loading="lazy"
  //                 />
  //                 <span>{title}</span>
  //               </Button>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
