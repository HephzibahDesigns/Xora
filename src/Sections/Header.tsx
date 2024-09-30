import Logo from "../assets/images/xora.svg";
import Magic from "../assets/images/magic.svg";
import Close from "../assets/images/close.svg";
import { Link } from "react-scroll";
import { useState } from "react";
import { clsx } from "clsx";

import Outlines from "../assets/images/bg-outlines.svg";
import OutlineFills from "../assets/images/bg-outlines-fill.png";

interface NavLinkProps {
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title }) => (
  <Link
    to={title}
    smooth={true}
    duration={500}
    className=" base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
  >
    {title}
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 top-0 left-0 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src={Logo} width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <Link
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500"
                    )}
                  >
                    <img src={Logo} width={160} height={55} alt="logo" />
                  </Link>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src={Outlines}
                alt="outlines"
                width={960}
                height={388}
                className="relative z-2"
              />

              <img
                src={OutlineFills}
                alt="outlines"
                width={960}
                height={388}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? (
            <img src={Close} alt="close" className="size-1/2 object-contain" />
          ) : (
            <img src={Magic} alt="magic" className="size-1/2 object-contain" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
