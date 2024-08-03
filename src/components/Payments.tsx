import { AnimatedTooltip } from "./ui/animated-tooltip";
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

export function Payment() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
