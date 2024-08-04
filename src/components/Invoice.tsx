import InvoiceTile from './InvoiceTile';
// @ts-ignore
import image from '/BN.png';
// @ts-ignore
import invoice from '/Invoice.png'
export default function Invoice() {
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
                        <h1 className='text-md font-semibold'>Aditya Verma</h1>
                        <h2 className='text-md font-semibold'>7888992617</h2>
                        <h1 className='text-md font-semibold'>321, Archimedes Hostel, Chitkara University, Rajpura</h1>
                    </div>
                    <div>
                        <h1 className='text-md font-semibold'>Invoice No. 12345</h1>
                        <h1 className='text-md font-semibold'>4 Aug 2024</h1>
                    </div>
                </div>
                <div className='border-b-2 p-2 border-black mt-5'></div>
                <InvoiceTile Quantity={"Quantity"} UnitPrice={"UnitPrice"} Total={"Total"} Items={"Items"} />
                <InvoiceTile Quantity={"1"} UnitPrice={"$123"} Total={"$123"} Items={"Eggshell Camisole Top"} />
                <InvoiceTile Quantity={"1"} UnitPrice={"$127"} Total={"$254"} Items={"Cuban Collar Shirt"} />
                <InvoiceTile Quantity={"1"} UnitPrice={"$123"} Total={"$123"} Items={"Floral Cotton Dress"} />
                    <div className='flex gap-10 justify-end mt-4 mr-10'>
                    <h1 className='flex justify-start text-lg font-bold'>SubTotal</h1>
                    <h1 className='text-lg font-bold'>$500</h1>
                    </div>
                    <div className='flex gap-10 justify-end mt-4 mr-14'>
                        <h1 className='flex justify-start text-lg font-bold'>Tax (0%)</h1>
                        <h2 className='text-lg font-bold'>$0</h2>
                    </div>
                    <div className='flex justify-end w-full'>
                    <div className='border-b-2 p-2 border-black  w-[28%]'></div>
                    </div>
                    <div className='flex gap-10 justify-end mt-4 mr-6'>
                        <h1 className='flex justify-start text-2xl font-bold'>Total :</h1>
                        <h2 className='text-2xl font-bold'>$500</h2>
                    </div>
                    <h1 className='flex mt-4 font-bold text-2xl ml-4'>Thank You!</h1>
                    <div className='flex mt-4 justify-between ml-4'>
                        <div className='text-md font-semibold'>
                        <h1>PAYMENT INFORMATION</h1>
                        <h1>XYZ Mode</h1>
                        <h1>Account Name:Aditya-Verma</h1>
                        <h1>Account Number: 123-456-789</h1>
                        <h2>Pay by : 4 Aug 2024</h2>
                        </div>
                        <div>
                        <h1 className='text-md font-semibold'>Aditya Verma</h1>
                        <h1 className='text-md font-semibold'>321, Archimedes Hostel, Chitkara University, Rajpura</h1>
                        </div>

                    </div>
            </div>
        </div>
    )
}