import logo from "../assets/logo.svg";
import dashboard from "../assets/icons/dashboard.svg";

export default function Aside({isOpen}) {
    return (
        <aside
            className={'w-64 md:w-[300px] transition ease-in-out delay-150 min-h-screen bg-[#FBFAFF] border border-[#E9E9EF] p-4 transition ease-out duration-100 ' + (isOpen ? 'block' : 'hidden')}>
            <div className="w-full flex justify-between items-center">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="uppercase text-sm text-gray-700 my-5">Menu</div>
            <ul className="flex flex-col space-y-3 text-sm">
                <li>
                    <a href="" className="flex space-x-2 items-center w-full rounded hover:bg-[#E8E6F6] p-2">
                        <img src={dashboard} alt=""/>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href=""
                       className="flex space-x-2 items-center justify-between rounded  w-full hover:bg-[#E8E6F6] p-2">
                        <div className="flex space-x-2 items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                            </svg>

                            <span>Payment System</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-5 h-5">
                            <path fillRule="evenodd"
                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                  clipRule="evenodd"/>
                        </svg>


                    </a>
                </li>
                <li>
                    <a href=""
                       className="flex space-x-2 items-center justify-between rounded  w-full hover:bg-[#E8E6F6] p-2">
                        <div className="flex space-x-2 items-center justify-between ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                            </svg>
                            <span>Products</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="w-5 h-5">
                            <path fillRule="evenodd"
                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                  clipRule="evenodd"/>
                        </svg>


                    </a>
                </li>
            </ul>
        </aside>
    );
}