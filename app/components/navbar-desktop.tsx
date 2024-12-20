import NavbarLink from "./navbar-link";

export default function NavbarDesktop() {
  return (
    <nav className="p-4 overflow-x-auto hidden md:inline sticky top-0 bg-white bg-opacity-50 backdrop-blur min-h-fit">
      <div className="flex justify-between items-center min-w-fit">
        <h1 className="font-serif tracking-widest text-2xl select-none">
          NFXII
        </h1>
        <div className="flex gap-4 select-none">
          <NavbarLink />
        </div>
      </div>
    </nav>
  );
}
