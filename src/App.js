import './App.css';
import {useState} from 'react'
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";


function App() {
    const [open, setOpen] = useState(true);

    return (<div className="w-full flex">
            <Aside isOpen={open}/>
            <main className=" min-h-screen w-full flex flex-col justify-between">
                <div>
                    <Header onMenuOpened={setOpen}/>
                    <section className="p-6">
                        <Dashboard/>
                    </section>
                </div>
                <Footer/>
            </main>
        </div>);
}

export default App;
