import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "Dashboard",
      path: "/dashboard",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className=" p-5 items-center md:flex sm:flex-none justify-center gap-10">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose /> : <RiMenu2Fill />}
      </div>
      <ul className={`md:flex sm:flex-none absolute md:static gap-10 justify-center duration-700 ${open ? "-top-100" : "top-100 bg-slate-300 text-black p-5"}`}>
        {routes.map((route) => (
          <li className="list-none" key={route.id}>
            <a className="hover:text-red-50 duration-200" href={route.path}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="btn btn-outline btn-primary">Login</button>
    </nav>
  );
};

export default Header;
