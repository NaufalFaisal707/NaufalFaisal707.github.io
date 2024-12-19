import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-2xl mx-auto h-svh flex flex-col">
      {children}
    </div>
  );
}
