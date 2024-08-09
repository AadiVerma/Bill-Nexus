import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "/Image.png"
export default function AvatarNav(){
   return (
    <Avatar>
    <AvatarImage src={Image}/>
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
   )
}
