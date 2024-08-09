import AllInvoiceTile from "./AllInvoicetile";

export default function AllInvoice() {
    return (
        <div className="text-white w-[86%] ml-[6%] bg-black p-10 rounded-2xl">
            <h1 className="font-bold text-3xl font-mono text-[#E11D48] ">All Invoices</h1>
           <div className="mt-6">
           <AllInvoiceTile/>
            <AllInvoiceTile/>
            <AllInvoiceTile/>
            <AllInvoiceTile/>
            <AllInvoiceTile/>
            <AllInvoiceTile/>
           </div>
        </div>
    )
}