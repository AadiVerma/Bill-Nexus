import { useState } from "react";
import { DatePicker } from "./components/DatePicker";
import { Payment } from "./components/Payments";

interface ItemData {
  ItemName: string;
  Quantity: number;
  UnitPrice: number;
  id: number;
}

interface ItemProps {
  id: number;
  onRemove: (id: number) => void;
  dataItems: ItemData[];
  setdataItems: React.Dispatch<React.SetStateAction<ItemData[]>>;
  settotal: React.Dispatch<React.SetStateAction<number>>;
}

const Item = ({ id, onRemove, dataItems, setdataItems, settotal }: ItemProps) => {
  const handleInputChange = (field: string, value: string | number) => {
    setdataItems((prevDataItems) =>
      prevDataItems.map((item) => {
        if (item.id === id) {
          const updatedValue = field === "UnitPrice" || field === "Quantity" ? (value === "" || isNaN(value as number) ? 0 : value) : value;
          const newItem = { ...item, [field]: updatedValue };
          if (field === "UnitPrice" || field === "Quantity") {
            const oldTotal = item.Quantity * item.UnitPrice;
            const newTotal = (field === "UnitPrice" ? updatedValue as number : newItem.UnitPrice) * (field === "Quantity" ? updatedValue as number : newItem.Quantity);
            settotal((prev) => prev - oldTotal + newTotal);
          }
          return newItem;
        }
        return item;
      })
    );
  };

  return (
    <div className="flex gap-2">
      <input
        placeholder="Item Name"
        type="text"
        value={dataItems.find((item) => item.id === id)?.ItemName || ""}
        onChange={(e) => handleInputChange("ItemName", e.target.value)}
        className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl mt-4 w-[100%]"
      />
      <input
        placeholder="Quantity"
        type="text"
        value={dataItems.find((item) => item.id === id)?.Quantity || ""}
        onChange={(e) => handleInputChange("Quantity", parseInt(e.target.value, 10))}
        className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl mt-4 w-[100%]"
      />
      <input
        placeholder="Unit Price"
        type="text"
        value={dataItems.find((item) => item.id === id)?.UnitPrice || ""}
        onChange={(e) => handleInputChange("UnitPrice", parseFloat(e.target.value))}
        className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl mt-4 w-[100%]"
      />
      <button
        onClick={() => onRemove(id)}
        className="pl-4 pr-4 mt-6 mb-2 rounded-xl flex-col place-content-center bg-[#E11D48] cursor-pointer hover:bg-[#b91536]"
      >
        Remove
      </button>
    </div>
  );
};

export default function AddTransaction() {
  const [items, setItems] = useState<ItemData[]>([]);
  const [nextId, setNextId] = useState(1);
  const [customerName, setcustomerName] = useState("");
  const [customerinfo, setcustomerinfo] = useState("");
  const [customerAddres, setcustomerAddress] = useState("");
  const [total, settotal] = useState<number>(0);

  const [dataItems, setdataItems] = useState<ItemData[]>([]);

  const addItem = () => {
    const newItem: ItemData = { ItemName: "", Quantity: 0, UnitPrice: 0, id: nextId };
    setItems([...items, newItem]);
    setdataItems([...dataItems, newItem]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    const itemToRemove = dataItems.find((item) => item.id === id);
    if (itemToRemove) {
      settotal((prev) => prev - (itemToRemove.Quantity * itemToRemove.UnitPrice));
    }
    
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setdataItems((prevDataItems) => prevDataItems.filter((item) => item.id !== id));
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
            <input placeholder="Customer Name" onChange={(e) => setcustomerName(e.target.value)} type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl w-[50%]" />
            <input placeholder="Contact Info" onChange={(e) => setcustomerinfo(e.target.value)} type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl w-[50%]" />
          </div>
          <div className="flex gap-4">
            <input placeholder="Customer Address" onChange={(e) => setcustomerAddress(e.target.value)} type="text" className="text-xl bg-black border-2 border-[#212121] focus:border-[#E21D48] outline-none p-4 rounded-xl w-[100%] mt-4" />
            <DatePicker />
          </div>
        </div>
        <div className="mt-4 border-2 border-[#212121] rounded-xl p-4">
          <div className="flex justify-between">
            <h1 className="text-xl text-[#E21D48] flex-col cursor- justify-between ">Product Details</h1>
            <button className="pl-6 pr-6 pt-2 pb-2 rounded-xl flex-col place-content-center bg-[#E11D48] cursor-pointer hover:bg-[#b91536]" onClick={addItem}>Add</button>
          </div>
          {items.map((item) => (
            <Item key={item.id} id={item.id} onRemove={removeItem} dataItems={dataItems} setdataItems={setdataItems} settotal={settotal} />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <div>
            <div className="flex gap-3">
              <h2 className="text-2xl font-bold text-[#E11D48]">Total : </h2>
              <h1 className="text-xl font-bold mt-1">${total}</h1>
            </div>
            <div className="flex gap-3">
              <h2 className="text-2xl font-bold text-[#E11D48]">Taxes : </h2>
              <h1 className="text-xl font-bold mt-1">10%</h1>
            </div>
            <div className="flex gap-3">
              <h2 className="text-2xl font-bold text-[#E11D48]">SubTotal : </h2>
              <h1 className="text-xl font-bold mt-1">$1100</h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-[#E11D48] text-xl">Payments :</h1>
          <Payment datasend={dataItems} customerName={customerName} customerinfo={customerinfo} customerAddres={customerAddres} Total={total}/>
        </div>
      </div>
    </div>
  );
}
