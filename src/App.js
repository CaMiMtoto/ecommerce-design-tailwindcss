import logo from './assets/logo.svg';
import hamburgerMenu from './assets/menu.svg';
import dashboard from './assets/icons/dashboard.svg';
import './App.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import {useState} from "react";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: false,
            },
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
const data = {
    labels,
    datasets: [
        {
            // label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({min: 0, max: 100})),
            backgroundColor: '#725DFF',
            borderWidth: 0,
            borderColor: 'red',
            borderRadius: 20,
            minBarLength: 1,
            maxBarThickness: 8,
        },
        {
            // label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({min: 0, max: 100})),
            backgroundColor: '#E3EAEF',
            borderWidth: 0,
            borderRadius: 20,
            maxBarThickness: 8,
        },
    ],
};


function App() {

    const [open, setOpen] = useState(true);
    console.log(open);
    return (
        <div className="w-full flex">

            <aside
                className={'w-64 md:w-[300px] transition ease-in-out delay-150 min-h-screen bg-[#FBFAFF] border border-[#E9E9EF] p-4 transition ease-out duration-100 ' + (open ? 'block' : 'hidden')}>
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
            <main className=" min-h-screen w-full flex flex-col justify-between">
                <div>
                    <header
                        className="w-full bg-white h-10 flex justify-between items-center pl-7 h-16 border-b border-[#E9E9EF]">
                        <button type='button' onClick={() => setOpen(!open)} className="mr-2 cursor-pointer">
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
                        <a href='' className="px-6 py-5 border-l border-[#E9E9EF] h-full flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </a>

                    </header>
                    <section className="p-6">
                        <h4>Dashboard</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 my-4 gap-4">
                            <div className="p-6 max-w-sm bg-white rounded-sm border border-gray-200 shadow-none">
                                <div className="flex justify-between">
                                    <div
                                        className="p-2 bg-[#E8E6F6] h-[50px] w-[50px] flex items-center justify-center rounded">
                                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M10 0H3C1.34315 0 0 1.34315 0 3V19C0 20.6569 1.34315 22 3 22H15C16.6569 22 18 20.6569 18 19V8C18 7.96135 17.9978 7.92293 17.9934 7.88492L17.9933 7.88338C17.9355 7.38604 17.5128 7 17 7H14.585L11 3.415V1L10.9933 0.883379C10.9666 0.653922 10.8623 0.448156 10.7073 0.293064C10.5263 0.111999 10.2762 0 10 0ZM9 2H3C2.44772 2 2 2.44772 2 3V19C2 19.5523 2.44772 20 3 20H15C15.5523 20 16 19.5523 16 19V9"
                                                  fill="#725DFF"/>
                                        </svg>
                                    </div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
                                        </svg>
                                    </a>

                                </div>

                                <h6 className="text-sm text-gray-700 my-2">Really Good</h6>
                                <div className="bg-gray-300 w-full h-2 rounded">
                                    <div className="bg-[#725DFF] rounded w-2/3 h-full"></div>
                                </div>
                                <h1 className="text-4xl text-center mt-3">88%</h1>
                            </div>
                            <div className="p-6 max-w-sm bg-white rounded-sm border border-gray-200 shadow-none">
                                <div className="flex justify-between">
                                    <div
                                        className="p-2 bg-[#FFF7DF] h-[50px] w-[50px] flex items-center justify-center rounded">
                                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M7.99327 0.883379C7.93551 0.38604 7.51284 0 7 0C6.44772 0 6 0.447715 6 1V4H4.5L4.28816 4.0049C1.90124 4.11551 0 6.08573 0 8.5C0 10.9853 2.01472 13 4.5 13H6V18H1L0.883379 18.0067C0.38604 18.0645 0 18.4872 0 19C0 19.5523 0.447715 20 1 20H6V23L6.00673 23.1166C6.06449 23.614 6.48716 24 7 24C7.55228 24 8 23.5523 8 23V20H9.5L9.71184 19.9951C12.0988 19.8845 14 17.9143 14 15.5C14 13.0147 11.9853 11 9.5 11H8V6H12L12.1166 5.99327C12.614 5.93551 13 5.51284 13 5C13 4.44772 12.5523 4 12 4H8V1L7.99327 0.883379ZM6 6H4.5C3.11929 6 2 7.11929 2 8.5C2 9.82548 3.03154 10.91 4.33562 10.9947L4.5 11H6V6ZM8 13V18H9.5C10.8807 18 12 16.8807 12 15.5C12 14.1745 10.9685 13.09 9.66438 13.0053L9.5 13H8Z"
                                                  fill="#FFC100"/>
                                        </svg>

                                    </div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
                                        </svg>
                                    </a>

                                </div>

                                <h6 className="text-sm text-gray-700 my-2">Total Sales</h6>
                                <div className="bg-gray-300 w-full h-2 rounded">
                                    <div className="bg-[#FFC100] rounded w-4/5 h-full"></div>
                                </div>
                                <h1 className="text-4xl text-center mt-3">$314k</h1>
                            </div>
                            <div className="p-6 max-w-sm bg-white rounded-sm border border-gray-200 shadow-none">
                                <div className="flex justify-between">
                                    <div
                                        className="p-2 bg-[#EAFBFE] h-[50px] w-[50px] flex items-center justify-center rounded">
                                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.05132 0.683772C7.3414 -0.186483 8.52959 -0.22604 8.90132 0.565101L8.94868 0.683772L14 15.838L16.0513 9.68377C16.1751 9.31255 16.5021 9.05118 16.884 9.00672L17 9H21C21.5523 9 22 9.44771 22 10C22 10.5128 21.614 10.9355 21.1166 10.9933L21 11H17.72L14.9487 19.3162C14.6586 20.1865 13.4704 20.226 13.0987 19.4349L13.0513 19.3162L8 4.162L5.94868 10.3162C5.82494 10.6874 5.49788 10.9488 5.11604 10.9933L5 11H1C0.447715 11 0 10.5523 0 10C0 9.48716 0.38604 9.06449 0.883379 9.00673L1 9H4.279L7.05132 0.683772Z"
                                                fill="#19B9D1"/>
                                        </svg>

                                    </div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
                                        </svg>
                                    </a>

                                </div>

                                <h6 className="text-sm text-gray-700 my-2">Total Profit</h6>
                                <div className="bg-gray-300 w-full h-2 rounded">
                                    <div className="bg-[#19B9D1] rounded w-3/4 h-full"></div>
                                </div>
                                <h1 className="text-4xl text-center mt-3">$48k</h1>
                            </div>
                            <div className="p-6 max-w-sm bg-white rounded-sm border border-gray-200 shadow-none">
                                <div className="flex justify-between">
                                    <div
                                        className="p-2 bg-[#FFEBE8] h-[50px] w-[50px] flex items-center justify-center rounded">
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M4 0H16C16.3148 0 16.6111 0.148194 16.8 0.4L19.7939 4.39188C19.9232 4.56038 20 4.77122 20 5V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V5C0 4.77123 0.0768186 4.56041 0.206068 4.39191L3.2 0.4C3.38885 0.148194 3.68524 0 4 0ZM15.5 2L17.0002 4H2.99985L4.5 2H15.5ZM2 19V6H18V19C18 19.5523 17.5523 20 17 20H3L2.88338 19.9933C2.38604 19.9355 2 19.5128 2 19ZM15 9C15 8.44771 14.5523 8 14 8C13.4477 8 13 8.44771 13 9L12.9949 9.17627C12.9037 10.7511 11.5977 12 10 12C8.34315 12 7 10.6569 7 9C7 8.44771 6.55228 8 6 8C5.44772 8 5 8.44771 5 9C5 11.7614 7.23858 14 10 14C12.7614 14 15 11.7614 15 9Z"
                                                  fill="#FF8577"/>
                                        </svg>

                                    </div>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
                                        </svg>
                                    </a>

                                </div>

                                <h6 className="text-sm text-gray-700 my-2">Total Cost</h6>
                                <div className="bg-gray-300 w-full h-2 rounded">
                                    <div className="bg-[#FF8577] rounded w-3/4 h-full"></div>
                                </div>
                                <h1 className="text-4xl text-center mt-3">3865</h1>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="md:col-span-2 min-h-96 border p-4">
                                <h4 className="uppercase text-gray-700 text-sm">STATISTICS</h4>
                                <div className='py-5'>
                                    <Bar options={options} data={data}/>
                                </div>
                            </div>
                            <div className="md:col-span-1 min-h-96 border p-4 overflow-y-scroll">
                                <div>
                                    <h4 className="uppercase text-gray-700 text-sm mb-4">RECENT ACTIVITY</h4>
                                    <div>
                                        <h5 className="text-[#19B9D1] text-sm mb-2">You sold item</h5>
                                        <p className="text-sm mb-2">
                                            Curabitur non leo mauris. Quisque dapibus massa in nisi tincidunt, vitae
                                            lacinia
                                            ex vestibulum.
                                        </p>
                                        <div className="text-xs text-gray-500">10 minutes ago</div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="uppercase text-gray-700 text-sm mb-4">RECENT ACTIVITY</h4>
                                    <div>
                                        <h5 className="text-[#19B9D1] text-sm mb-2">You sold item</h5>
                                        <p className="text-sm mb-2">
                                            Curabitur non leo mauris. Quisque dapibus massa in nisi tincidunt, vitae
                                            lacinia
                                            ex vestibulum.
                                        </p>
                                        <div className="text-xs text-gray-500">10 minutes ago</div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="uppercase text-gray-700 text-sm mb-4">RECENT ACTIVITY</h4>
                                    <div>
                                        <h5 className="text-[#19B9D1] text-sm mb-2">You sold item</h5>
                                        <p className="text-sm mb-2">
                                            Curabitur non leo mauris. Quisque dapibus massa in nisi tincidunt, vitae
                                            lacinia
                                            ex vestibulum.
                                        </p>
                                        <div className="text-xs text-gray-500">10 minutes ago</div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="uppercase text-gray-700 text-sm mb-4">RECENT ACTIVITY</h4>
                                    <div>
                                        <h5 className="text-[#19B9D1] text-sm mb-2">You sold item</h5>
                                        <p className="text-sm mb-2">
                                            Curabitur non leo mauris. Quisque dapibus massa in nisi tincidunt, vitae
                                            lacinia
                                            ex vestibulum.
                                        </p>
                                        <div className="text-xs text-gray-500">10 minutes ago</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
                <footer className="border-t p-4">
                    <p className='text-center text-sm font-light text-gray-600'>
                        © 2021 YorSite. All Rights Reserved.
                    </p>
                </footer>

            </main>
        </div>
    );
}

export default App;
