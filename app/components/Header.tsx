import { Link, useLocation } from "@remix-run/react";

export default function Header() {
  const pathname: string = useLocation().pathname;

  return (
    <div className="bg-base-100 navbar">
      <div className="flex-1">
        <Link to="/">
          <h1 className="text-lg btn btn-ghost">E-Advent Calendars</h1>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="md:flex gap-2 hidden px-1 menu menu-horizontal">
          <NavLink path="/" name="About" location={pathname} />
          <NavLink path="/pricing" name="Pricing" location={pathname} />
          <NavLink path="/build" name="Build A Calendar" location={pathname} />
        </ul>

        <ul className="md:hidden px-1 menu menu-horizontal">
          <li>
            <details>
              <summary></summary>
              <ul className="bg-base-100 p-2 rounded-t-none">
                <NavLink path="/" name="About" location={pathname} />
                <NavLink path="/pricing" name="Pricing" location={pathname} />
                <NavLink
                  path="/build"
                  name="Build A Calendar"
                  location={pathname}
                />
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
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
