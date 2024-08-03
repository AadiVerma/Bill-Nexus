import { BiSolidDashboard } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuBadgeHelp } from "react-icons/lu";
import { RiLogoutBoxLine } from "react-icons/ri";
export default function SideBar(){
    return (
        <div className="flex min-h-screen fixed flex-wrap bg-[#121212] mb-2 ">
            <div className="h-fit w-fit bg-[#121212] border-2 border-[#212121] rounded-full ml-4 p-2">
            <div className="bg-black text-white rounded-full flex-col justify-between place-content-center p-8">
            <BiSolidDashboard className="text-2xl hover:text-[#E11D48] cursor-pointer mt-4"/>
            <IoPerson className="mt-8 text-2xl hover:text-[#E11D48] cursor-pointer"/>
            <LiaFileInvoiceSolid className="mt-8 text-2xl hover:text-[#E11D48] cursor-pointer"/>
            <FaMoneyBillTransfer className="mt-8 text-2xl hover:text-[#E11D48] cursor-pointer" />
            <IoSettings className="mt-8 text-2xl hover:text-[#E11D48] cursor-pointer"/>
            <LuBadgeHelp  className="mt-8 text-2xl hover:text-[#E11D48] cursor-pointer"/>
            <RiLogoutBoxLine className="mt-8 text-2xl hover:text-[#E11D48] cursor-pointer"/>
            </div>
        </div>
        </div>
    )
}