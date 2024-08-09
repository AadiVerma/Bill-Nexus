import { useLocation } from 'react-router-dom';
import InvoiceTile from './InvoiceTile';
import image from '/BN.png';
import invoice from '/Invoice.png'
export default function Invoice() {
    const { state } = useLocation();
    const { datasend, customerName, customerinfo, customerAddres, Total } = state;
    console.log(datasend);
    return (
        <div className='flex justify-center'>
            <div className='text-black bg-slate-100 w-[60%] rounded-md p-10'>
                <div className='flex justify-between'>
                    <img src={image} className='h-[12%] w-[9%] mt-6' />
                    <img src={invoice} className="h-[50%] w-[15%] mr-5" />
                </div>
                <div className='flex justify-between'>
                    <div >
                        <h1 className='text-lg text-black font-bold'>BILLED TO : </h1>
                        <h1 className='text-md font-semibold'>{customerName}</h1>
                        <h2 className='text-md font-semibold'>{customerinfo}</h2>
                        <h1 className='text-md font-semibold'>{customerAddres}</h1>
                    </div>
                    <div>
                        <h1 className='text-md font-semibold'>Invoice No. 12345</h1>
                        <h1 className='text-md font-semibold'>4 Aug 2024</h1>
                    </div>
                </div>
                <div className='border-b-2 p-2 border-black mt-5'></div>
                <InvoiceTile Quantity={"Quantity"} UnitPrice={"UnitPrice"} Total={"Total"} Items={"Items"} />
                {datasend.map((d: { ItemName: string, Quantity: number, UnitPrice: number, id: number }) => (
                    <InvoiceTile Quantity={d.Quantity} UnitPrice={d.UnitPrice} Total={d.UnitPrice * d.Quantity} Items={d.ItemName} />
                ))}
                <div>
                    <div className='flex gap-10 justify-between mt-4 '>
                        <h1 className='flex justify-start text-lg font-bold'>SubTotal</h1>
                        <h1 className='text-lg font-bold'>${Total}</h1>
                    </div>
                    <div className='flex gap-10 justify-between mt-4 '>
                        <h1 className='flex justify-start text-lg font-bold'>Tax (2%)</h1>
                        <h2 className='text-lg font-bold'>${Total * (0.02)}</h2>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='border-b-2 p-2 border-black  w-full'></div>
                </div>
                <div className='flex gap-10 justify-between mt-4 '>
                    <h1 className='flex justify-start text-2xl font-bold'>Total :</h1>
                    <h2 className='text-2xl font-bold'>${Total + (Total * (0.02))}</h2>
                </div>
                <div className='flex w-full'>
                    <div className='border-b-2 p-2 border-black  w-full'></div>
                </div>
                <h1 className='flex mt-10 font-bold text-2xl ml-4'>Thank You!</h1>
                <div className='flex mt-4 justify-between ml-4'>
                    <div className='text-md font-semibold'>
                        <h1>PAYMENT INFORMATION</h1>
                        <h1>XYZ Mode</h1>
                        <h1>Account Name:{customerName}</h1>
                        <h1>Account Number: 123-456-789</h1>
                        <h2>Pay by : 4 Aug 2024</h2>
                    </div>
                    <div>
                        <h1 className='text-md font-semibold'>{customerName}</h1>
                        <h1 className='text-md font-semibold'>{customerAddres}</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}