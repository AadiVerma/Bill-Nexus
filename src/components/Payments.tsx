import { AnimatedTooltip } from "./ui/animated-tooltip";
import { useNavigate } from "react-router-dom";
const people = [
  {
    id: 1,
    name: "QR Code",
    designation: "Online Payment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXgnU7FduTcy0Z7GyoXnMnCqLBwMwAXdiFw&s",
  },
  {
    id: 2,
    name: "Phone Pay",
    designation: "Payment Platform",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKkhPQ45aqAeA5E2cXuW_doCd1JXkF26WKQ&s",
  },
  {
    id: 3,
    name: "Paytm",
    designation: "Payment Platform",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEjY90pS-UfgHJU4glc8Aiupp1xCn_jcvRQ&s",
  },
  {
    id: 4,
    name: "Google Pay",
    designation: "Payment Platform",
    image:
      "https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk",
  },
];

export function Payment({datasend,customerName,customerinfo,customerAddres,Total}:{datasend:{ ItemName: string, Quantity: number, UnitPrice: number, id: number }[],customerName:string,customerAddres:string,customerinfo:string,Total:number}) {
  const navigate=useNavigate();
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full" onClick={()=>{
      navigate("/Invoice",{state:{datasend,customerName,customerinfo,customerAddres,Total}});
    }}>
      <AnimatedTooltip items={people} />
    </div>
  );
}
