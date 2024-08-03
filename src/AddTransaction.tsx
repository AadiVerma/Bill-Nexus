import { useState } from "react";
import { DatePicker } from "./components/DatePicker";
import { Payment } from "./components/Payments";

const Item = ({ id, onRemove }:{id:number,onRemove:(id:number)=>void}) => {
    return (
      <div className="flex gap-2">
        <input placeholder="Item Name" type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl mt-4 w-[100%]" />
        <input placeholder="Quantity" type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl mt-4 w-[100%]" />
        <input placeholder="Unit Price" type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl mt-4 w-[100%]" />
        <button onClick={() => onRemove(id)} className="pl-4 pr-4 mt-6 mb-2 rounded-xl flex-col place-content-center bg-[#E11D48] cursor-pointer hover:bg-[#b91536]">Remove</button>
      </div>
    );
  };
export default function AddTransaction() {
    const [items, setItems] = useState([{ id: 0 }]);
    const [nextId, setNextId] = useState(1);

  const addItem = () => {
    setItems([...items, { id: nextId }]);
    setNextId(nextId + 1);
  };

  const removeItem = (id:number) => {
    setItems(items.filter(item => item.id !== id));
  };

    return (
        <div className="bg-[#121212] min-h-screen p-2">
            <div className="bg-black text-white m-2 ml-16 border-2 border-[#212121] mr-16 p-10 rounded-2xl">
                <h1 className="text-4xl font-bold text-[#E21D48] mb-6">Add Transaction</h1>
                <div>
                    <div className="flex gap-4 mb-4">
                        <h2 className="text-xl text-[#E21D48]">Transaction Id <span className="text-white">: -</span> </h2>
                        <h2 className="text-lg ">918273645928</h2>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex gap-4">
                        <input placeholder="Customer Name" type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl w-[50%]" />
                        <input placeholder="Contact Info" type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl w-[50%]" />
                    </div>
                   <div className="flex gap-4">
                   <input placeholder="Billing Address" type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl w-[100%] mt-4" />  
                    <DatePicker/>
                   </div>
                </div>
                <input placeholder="Description " type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl w-[100%] mt-4" />
            <div className="mt-4 border-2 border-[#212121] rounded-xl p-4">
                <div className="flex justify-between">
                    <h1 className="text-xl text-[#E21D48] flex-col cursor- justify-between ">Product Details</h1>
                    <button  className="pl-6 pr-6 pt-2 pb-2 rounded-xl  flex-col  place-content-center bg-[#E11D48] cursor-pointer hover:bg-[#b91536]" onClick={addItem}>Add</button>
                </div>
                {items.map(item => (
            <Item key={item.id} id={item.id} onRemove={removeItem} />
          ))}
            </div>
            <div className="mt-4">
              <h1 className="text-[#E11D48] text-xl">
                Payments : 
              </h1>
            <Payment/>
            </div>
            </div>
        </div>
    )
}