import { Outlet } from "@remix-run/react";
import Container from "~/components/container";
import NavbarDesktop from "~/components/navbar-desktop";
import NavbarMobile from "~/components/navbar-mobile";

export default function Page() {
  return (
    <Container>
      <NavbarDesktop />
      <div className="grow mx-4 overflow-auto flex flex-col *:grow">
        <Outlet />
      </div>
      <NavbarMobile />
    </Container>
  );
}
