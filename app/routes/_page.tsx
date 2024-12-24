import { Outlet, useLocation } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";

export default function Index() {
  const location = useLocation();

  return (
    <>
      {/* <NavbarDesktop className="sticky top-0 backdrop-blur bg-opacity-80 bg-white" /> */}

      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>

      {/* <NavbarMobile className="sticky bottom-0 backdrop-blur bg-opacity-80 bg-white" /> */}
    </>
  );
}
