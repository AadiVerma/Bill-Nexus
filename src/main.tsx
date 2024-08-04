import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// @ts-ignore
import image from '/BN.png';
import './index.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { IoNotifications } from "react-icons/io5";
import { SearchButton } from "./components/SearchButton"
import ActionTab from "./components/actions";
import AvatarNav from "./components/Avatar";
import { FloatingNav } from "./components/ui/floating-navbar";
import { IoHomeSharp } from "react-icons/io5";
import AddTransaction from './AddTransaction.tsx';
import Layout from './components/layout.tsx'
import Invoice from './components/Invoice.tsx';
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IoHomeSharp className="h-4 w-4 text-white dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IoHomeSharp className="h-4 w-4 text-white dark:text-white" />,
  },
  {
    name: "Help",
    link: "/contact",
    icon: (
      <IoHomeSharp className="h-4 w-4 text-white dark:text-white " />
    ),
  },
];
const Nav = () => {
  const navigate = useNavigate();
  return (<div className="bg-[#121212] h-fit p-6 ml-10">
    <div className='border-2 border-[#212121] p-2 rounded-full ml-[7%] mr-[4%]'>
    <div className="flex justify-between p-3 bg-black text-white rounded-full ">
      <div className="flex-col justify-center place-content-center ml-10 cursor-pointer" onClick={() => {
        navigate("/")
      }}>
        <img src={image} className='h-14 w-14'/>
      </div>
      <div className='w-[40%]'>
       <SearchButton />
       </div>
      <div className="flex gap-3 w-fit justify-end mr-10">
        <IoNotifications className="bg-[#E21D48] hover:bg-[#d11941] text-5xl mt-1 h cursor-pointer border-2 border-[#212121] rounded-full p-2 " />
        <div className="flex-col justify-center place-content-center">
          <ActionTab />
        </div>
        <div className="h-full w-fit p-2 bg-black flex-col justify-center place-content-center border-2 rounded-full border-[#121212] "><AvatarNav /></div>
      </div>
    </div>
    </div>
    <FloatingNav navItems={navItems} />
  </div>)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/addtransaction" element={<AddTransaction />} />
        </Route>
        <Route path="/Invoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
