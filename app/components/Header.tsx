import { Link, useLocation } from "@remix-run/react";

export default function Header() {
  const pathname: string = useLocation().pathname;

  return (
    <header className="flex justify-between bg-white px-4 navbar">
      {/* <Link to="/" className="w-1/4"> */}
      <Link to="/">
        <h1 className="text-lg btn btn-ghost">E-Advent Calendars</h1>
      </Link>

      {/* <nav className="flex-1 justify-center"> */}
      <nav className="flex-none">
        <ul className="md:flex gap-2 hidden menu menu-horizontal">
          <NavLink path="/" name="About" location={pathname} />
          <NavLink path="/pricing" name="Pricing" location={pathname} />
          <NavLink path="/build" name="Build A Calendar" location={pathname} />
        </ul>
        <div className="md:hidden">LINKS</div>
      </nav>
      {/* <span className="w-1/4"></span> */}
    </header>
  );
}

const NavLink = ({
  path,
  name,
  location,
}: {
  path: string;
  name: string;
  location: string;
}) => {
  return (
    <li className={path === location ? " underline" : ""}>
      <Link to={path}>{name}</Link>
    </li>
  );
};
