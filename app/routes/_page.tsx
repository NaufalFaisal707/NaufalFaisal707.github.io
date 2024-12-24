import { Outlet, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Index() {
  const location = useLocation();

  return (
    <>
      {/* <NavbarDesktop className="sticky top-0 backdrop-blur bg-opacity-80 bg-white" /> */}

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.div>

      {/* <NavbarMobile className="sticky bottom-0 backdrop-blur bg-opacity-80 bg-white" /> */}
    </>
  );
}
