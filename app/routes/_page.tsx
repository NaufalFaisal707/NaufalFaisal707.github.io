import { Outlet } from "@remix-run/react";

export default function Page() {
  return (
    <>
      <p>alo ini root nya!</p>
      <Outlet />
    </>
  );
}
