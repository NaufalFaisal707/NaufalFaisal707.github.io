import NavbarLink from "./navbar-link";

export default function NavbarMobile() {
  return (
    <nav className="p-2 md:hidden block overflow-x-auto min-h-fit sticky bottom-0 bg-white backdrop-blur bg-opacity-50">
      <div className="flex justify-around items-center min-w-fit">
        <NavbarLink />
      </div>
    </nav>
  );
}
