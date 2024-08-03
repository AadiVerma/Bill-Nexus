import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Link } from "react-router-dom"
export default function ActionTab() {
  return (
    <Menubar className="bg-[#E21D48] border-2 border-[#212121] rounded-xl ">
      <MenubarMenu >
        <MenubarTrigger className="cursor-pointer ">Actions</MenubarTrigger>
        <MenubarContent>
          <Link to={"/addtransaction"}><MenubarItem >Create New Transaction</MenubarItem></Link>
          <MenubarSeparator className="bg-[#212121]" />
          <MenubarItem>Add New Client</MenubarItem>
          <MenubarSeparator className="bg-[#212121]" />
          <MenubarItem>Make a Transfer</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
