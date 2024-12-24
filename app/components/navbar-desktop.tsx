import { useEffect, useState } from "react";
import NavbarLink from "./navbar-link";
import { cn } from "~/lib/utils";

export default function NavbarDesktop({ className }: { className?: string }) {
  const [targetNav, setTargetNav] = useState<EventTarget | null>(null);

  useEffect(() => {
    const navFocusIndicator = document.getElementById("nav-focus-desktop");

    if (targetNav && navFocusIndicator) {
      const focusElement = targetNav as HTMLElement;
      const focusPosition = focusElement.getBoundingClientRect();

      const parentRect = focusElement.parentElement?.getBoundingClientRect();
      const leftPosition = focusPosition.left - (parentRect?.left || 0);

      navFocusIndicator.style.width = `${focusPosition.width}px`;
      navFocusIndicator.style.left = `${leftPosition}px`;
    }
  }, [targetNav]);

  return (
    <nav
      className={cn(
        className,
        "h-16 overflow-x-auto hidden md:flex min-h-fit justify-center place-items-center"
      )}
    >
      <div className="max-w-screen-2xl flex justify-between w-full items-center mx-4">
        <h1 className="font-serif tracking-widest text-2xl select-none">
          NFXII
        </h1>
        <div className="flex gap-4 select-none relative">
          <NavbarLink setTarget={setTargetNav} />
          <span
            id="nav-focus-desktop"
            className="absolute h-full bg-neutral-100 -z-10 rounded-md duration-150 ease-in-out"
          />
        </div>
      </div>
    </nav>
  );
}
