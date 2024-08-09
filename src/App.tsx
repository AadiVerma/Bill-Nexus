// import Pie from "./components/Pie"
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"
import CardComponent from "./components/Card"
// import LineComponent from "./components/LineChart2"
import OrderCard from "./components/OrderCard"
import { useNavigate } from "react-router-dom"
function App() {
const navigate=useNavigate();
  return (
    <div className="bg-[#121212] min-h-screen h-fit gap-4  pb-4">
  
      <div className="flex justify-center gap-4 w-[100%] mb-4">
        <CardComponent week={"Week"} amount={"1,329"} increase={25} label={"week"} />
        <CardComponent week={"Month"} amount={"5,329"} increase={10} label={"month"} />
      </div>
      <div className="flex gap-4 justify-center w-full flex-wrap">
        <div className="h-[45%] lg:w-[45%] md:w-[50%] border-2 border-[#212121] rounded-xl flex justify-center">
          <LineChart />
        </div>
        <div className="h-[45%] lg:w-[45%] md:w-[50%]  border-2 border-[#212121] rounded-xl flex justify-center">
          <BarChart />
        </div>
      </div>
      {/* <div className="flex h-full w-full justify-center gap-10 mt-4">
        <div className="h-full lg:w-[30%] md:w-[50%] border-2 border-[#212121] rounded-xl flex justify-center">
          <Pie />
        </div>
        <div className="h-full w-fit">
          <div className="flex justify-start gap-4">
            <LineComponent />
            <LineComponent />
          </div>
        </div>
      </div>
      <div className=" justify-center m-4 ml-14 mr-14">
        <LineComponent />
      </div> */}
      <div className="m-4 ml-14 mr-14 border-2 border-[#212121] rounded-xl p-6 bg-black">
       <div className="flex justify-between">
       <div className="flex justify-start bg-[#212121] w-fit rounded-xl border-2 border-[#212121] gap-2 p-1  ">
          <button className="pt-2 pb-2 pl-4 pr-4 text-[#969696] font-bold hover:bg-black rounded-xl cursor-pointer bg-black">Week</button>
          <button className="pt-2 pb-2 pl-4 pr-4 text-[#969696] font-bold hover:bg-black rounded-xl cursor-pointer focus:bg-black">Month</button>
          <button className="pt-2 pb-2 pl-4 pr-4 text-[#969696] font-bold hover:bg-black rounded-xl cursor-pointer focus:bg-black ">Year</button>
        </div>
        <div className="pl-6 pr-6 pt-1 pb-1 rounded-xl  flex-col  place-content-center bg-[#E11D48] cursor-pointer hover:bg-[#b91536]" onClick={()=>{
            navigate("/addtransaction")
          }}>
          <button className="text-white font-bold " >Add</button>
        </div>
       </div>
        <div>
          <div className="mt-2 mb-2 ">
            <OrderCard email={""} name={"Customer"}  date={"Date of Transaction"} money={"Amount"} Type={"Mode of transaction"} />
          </div>
          <OrderCard email={"aditya@gmail.com"} name={"Aditya Verma"} date={"2024-08-1"} money={"$250.00"} Type={"UPI"} />
          <OrderCard email={"aditya@gmail.com"} name={"Aditya Verma"}  date={"2024-08-1"} money={"$250.00"} Type={"Cash"} />
          <OrderCard email={"aditya@gmail.com"} name={"Aditya Verma"}  date={"2024-08-1"} money={"$250.00"} Type={"Phone Pay"}   />
          <OrderCard email={"aditya@gmail.com"} name={"Aditya Verma"}  date={"2024-08-1"} money={"$250.00"} Type={"Paytm"} />
          <OrderCard email={"aditya@gmail.com"} name={"Aditya Verma"}  date={"2024-08-1"} money={"$250.00"} Type={"Google Pay"}  />
        </div>
      </div>

    </div>
  )
}

export default App;
