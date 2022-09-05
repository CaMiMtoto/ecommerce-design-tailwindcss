import hamburgerMenu from "../assets/menu.svg";
import {Menu, Transition} from "@headlessui/react";
import {ArrowRightOnRectangleIcon, ChevronDownIcon, UserCircleIcon, UserIcon} from "@heroicons/react/24/outline";
import {Fragment, useState} from "react";

function Header({onMenuOpened}) {
    const [open, setOpen] = useState(true);

    let handleMenuOpened = () => {
        setOpen(!open);
        onMenuOpened(open);
    }

    return (
        <header
            className="w-full bg-white h-10 flex justify-between items-center pl-7 h-16 border-b border-[#E9E9EF]">
            <button type='button' onClick={handleMenuOpened} className="mr-2 cursor-pointer">
                <img src={hamburgerMenu} alt="Logo"/>
            </button>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M11.431 10.723L16.604 15.896L15.897 16.604L10.724 11.431C9.587 12.406 8.112 13 6.5 13C2.916 13 0 10.084 0 6.5C-0.000998892 4.764 0.675001 3.131 1.902 1.903C3.131 0.676 4.764 0 6.5 0C10.084 0 13 2.916 13 6.5C13 8.112 12.406 9.586 11.431 10.723ZM1 6.5C1 9.533 3.468 12 6.5 12C9.532 12 12 9.532 12 6.5C12 3.467 9.532 1 6.5 1C5.03 1 3.648 1.572 2.61 2.611C1.571 3.649 0.999001 5.03 1 6.5Z"
                      fill="#697E8D"/>
            </svg>

            <input type="text" placeholder="Type Something...."
                   className="p-1 flex-1 text-sm ml-2 outline-0 placeholder:text-gray-500 placeholder:text-sm"/>
            <a href='' className="px-6 py-5 border-l border-[#E9E9EF] h-full flex items-center relative">
                            <span
                                className='bg-red-400 text-white rounded-full px-1 text-xs absolute top-3 left-9'>3</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 text-indigo-500">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                </svg>
            </a>

            <div className="px-6 py-5 border-l border-[#E9E9EF] h-full flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button
                            className="inline-flex w-full justify-center">
                            <UserCircleIcon className="w-6 h-6"/>
                            <ChevronDownIcon
                                className="ml-1 h-5 w-5"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items
                            className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    <button
                                        className='group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-white'>
                                        <UserIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />

                                        Profile
                                    </button>
                                </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    <button
                                        className='hover:bg-violet-500 hover:text-white text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'>
                                        <ArrowRightOnRectangleIcon
                                            className="mr-2 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                        Logout
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

        </header>
    );
}

export default Header;