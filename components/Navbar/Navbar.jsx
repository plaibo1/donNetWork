import { Transition } from '@headlessui/react'
import { Popover } from '@headlessui/react'

import { Fragment, useState } from 'react'

import style from './navbar.module.scss'

import Link from 'next/link'

import { motion, AnimatePresence  } from "framer-motion"

import { HiChevronDown } from 'react-icons/hi'
import { HiOutlineWifi } from 'react-icons/hi'
import { HiOutlinePhoneIncoming } from 'react-icons/hi'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>

      <nav className={`${style.navBg} nav-bg z-mid fixed w-full top-0 px-4 py-1 md:p-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">

              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
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
        {
          isOpen && (
            <motion.div initial={{opacity: 0, height: 0, y: -100}} animate={{opacity: 1, height: 'auto', y:0}} exit={{opacity: 0, height: 0, y:-100, scale: 0}}>
              <NavContent />
            </motion.div>
          )
        }
        </AnimatePresence>

      </nav>

    </>

  )
}

const NavContent = () => {

  const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
      icon: HiChevronDown,
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
      icon: HiOutlineWifi,
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
      icon: HiOutlinePhoneIncoming,
    },
  ]

  return (
    <div className="pb-6 flex flex-col items-center md:flex-row md:items-baseline md:ml-10 md:pb-0 md:space-x-4">

      <Link href="/"> 
        <a
          className="hover:bg-slate-100 hover:text-baseColor text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
        >
          Главная
        </a>
      </Link>

      <Link href="/about"> 
        <a
          className="hover:bg-slate-100 text-gray-800 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium"
        >
          О нас
        </a>
      </Link>

      <DropdownItem solutions={solutions} />

      <a
        href="#"
        className="text-gray-800 hover:bg-slate-100 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium"
      >
        Для бизнеса
      </a>

      <a
        href="#"
        className="text-gray-800 hover:bg-slate-100 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium"
      >
        Projects
      </a>

      <a
        href="#"
        className="text-gray-800 hover:bg-slate-100 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium"
      >
        Calendar
      </a>

      <a
        href="#"
        className="text-gray-800 hover:bg-slate-100 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium"
      >
        Reports
      </a>

    </div>
  )
}

const DropdownItem = ({solutions}) => {
  return (
    <div>
      <Popover className="relative z-10">
        {({ open }) => (
          <>

            <Popover.Button
              className={`
                ${open ? 'bg-baseColor text-white' : 'text-opacity-100 text-gray-800'}
                 hover:bg-slate-100 hover:text-baseColor px-3 py-2 rounded-md text-sm font-medium flex`}
            >
              <span>Solutions</span>

              <HiChevronDown
                className={`${open ? '' : 'text-opacity-100'} 
                    ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />

            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >

              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">

                  <div className={`bg-white relative grid gap-8 p-7 lg:grid-cols-2`}>

                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12 text-white text-lg rounded-lg bg-myYellow">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}

                  </div>

                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>

                </div>
              </Popover.Panel>

            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}





export default Navbar