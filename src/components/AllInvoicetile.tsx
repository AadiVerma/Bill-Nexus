import { FaCloudDownloadAlt } from "react-icons/fa";
export default function AllInvoiceTile() {
    return (
        <div className="bg-[#121212] pl-4 pr-4 rounded-lg p-2 mb-4 cursor-pointer">
            <div className="flex justify-between">
                <h1 className="flex-col justify-center place-content-center text-lg text-[#E11D48]">#1234</h1>
                <div>
                    <h2>Aditya Verma</h2>
                    <h3 className="text-slate-300">aditya@gmail.com</h3>
                </div>
                <div className="flex-col justify-center place-content-center">
                    <h2>2024-08-1</h2>
                </div>
                <div className="flex-col justify-center place-content-center cursor-pointer">
                    <FaCloudDownloadAlt className="text-[#508D4E] text-3xl" />
                </div>
            </div>
        </div>
    )
}