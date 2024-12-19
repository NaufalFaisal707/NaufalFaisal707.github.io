import { Outlet } from "@remix-run/react";
import Container from "~/components/container";

export default function Page() {
  return (
    <Container>
      <h1 className="text-xl p-4 font-bold">
        selamat datang di web port folio saya.
      </h1>
      <Outlet />
    </Container>
  );
}
