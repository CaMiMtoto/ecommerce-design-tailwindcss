import hamburgerMenu from "../assets/menu.svg";
import {Menu, Transition} from "@headlessui/react";
import {
    ArrowRightOnRectangleIcon, ChevronDownIcon, UserCircleIcon, UserIcon, MagnifyingGlassIcon, BellIcon
} from "@heroicons/react/24/outline";
import {Fragment, useState} from "react";

function Header({onMenuOpened}) {
    const [open, setOpen] = useState(true);

    let handleMenuOpened = () => {
        setOpen(!open);
        onMenuOpened(open);
    }

    return (<header
        className="w-full bg-white h-10 flex justify-between items-center pl-7 h-16 border-b border-[#E9E9EF]">
        <button type='button' onClick={handleMenuOpened} className="mr-3 cursor-pointer">
            <img src={hamburgerMenu} alt="Logo"/>
        </button>
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-500"/>
        <input type="text" placeholder="Type Something...."
               className="p-1 flex-1 text-sm ml-2 outline-0 placeholder:text-gray-500 placeholder:text-sm"/>
        <a href='' className="px-6 py-5 border-l border-[#E9E9EF] h-full flex items-center relative">
            <span className='bg-red-400 text-white rounded-full px-1 text-xs absolute top-3 left-9'>3</span>
            <BellIcon className="w-6 h-6 text-indigo-500"/>
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

    </header>);
}

export default Header;