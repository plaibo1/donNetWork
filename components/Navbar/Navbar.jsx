/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import style from "./navbar.module.scss";

const navData = [
  { title: "Главная", indexLink: "#hero", link: "/" },
  {
    title: " Куда проводим",
    indexLink: "#whatConnection",
    link: "/#whatConnection",
  },
  { title: "Новости", indexLink: "#news", link: "/#news" },
  { title: "ЧаВо", indexLink: "#faq", link: "/#faq" },
  { title: "Контакты", indexLink: "#contacts", link: "/#contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();

  return (
    <>
      <nav
        className={`${style.navBg} nav-bg z-mid fixed w-full top-0 px-4 py-1 md:p-4`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </a>
                </Link>
              </div>

              <div className="hidden md:block">
                <NavContent />
              </div>
            </div>

            {/* show/hide mobile menu btn */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white shadow-md inline-flex items-center justify-center p-2 rounded-md transition active:bg-baseColor active:scale-75"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -100 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -100, scale: 0 }}
            >
              <NavContent asPath={asPath} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const NavContent = ({ asPath }) => {
  return (
    <div className="pb-6 flex flex-col items-center md:flex-row md:items-baseline md:ml-10 md:pb-0 md:space-x-4">
      {navData.map((item) => {
        return (
          <Link
            key={item.link}
            href={asPath === "/" ? item.indexLink : item.link}
          >
            <a className="hover:bg-slate-100 hover:text-baseColor text-gray-800  px-3 py-2 rounded-md text-sm font-medium">
              {item.title}
            </a>
          </Link>
        );
      })}

      {/* <a
        href="#whatConnection"
        className="hover:bg-slate-100 text-gray-800 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        Куда проводим
      </a>

      <a
        href="#news"
        className="hover:bg-slate-100 text-gray-800 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        Новости
      </a> */}

      {/* <a
        href="#telephonization"
        className="hover:bg-slate-100 text-gray-800 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        Телефонизация
      </a> */}

      {/* <a
        href="#advantages"
        className="hover:bg-slate-100 text-gray-800 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        Преимущества
      </a> */}

      {/* <a
        href="#faq"
        className="hover:bg-slate-100 text-gray-800 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        ЧаВо
      </a> */}
    </div>
  );
};

export default Navbar;
