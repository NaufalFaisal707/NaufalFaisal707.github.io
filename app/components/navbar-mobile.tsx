import { useState, useEffect } from "react";
import NavbarLink from "./navbar-link";
import { cn } from "~/lib/utils";

export default function NavbarMobile({ className }: { className?: string }) {
  const [targetNav, setTargetNav] = useState<EventTarget | null>(null);

  useEffect(() => {
    const navFocusIndicator = document.getElementById("nav-focus-mobile");

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
        "h-20 overflow-x-auto md:hidden flex flex-col justify-center min-h-fit place-items-center border-t"
      )}
    >
      <div className="flex gap-4 select-none relative w-full justify-evenly">
        <NavbarLink setTarget={setTargetNav} />
        <span
          id="nav-focus-mobile"
          className="absolute h-full bg-neutral-100 -z-10 rounded-md duration-150 ease-in-out"
        />
      </div>
    </nav>
  );
}
