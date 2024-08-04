export default function OrderCard({email,name,date,money,Type}:{email:string,name:string,date:string,money:string,Type:string}){
    return (
        <div className="flex text-white w-full justify-around bg-black p-2  border-b-2 mb-1 border-[#212121] pb-4">
            <div className="w-[10%]">
                <h1 className="font-bold ">{name}</h1>
                {email && <h2 className="text-[#969696]">{email}</h2>}
            </div>
            <div className="flex justify-center place-items-center w-[20%]">
                <h1 className="font-semibold">{Type}</h1>
            </div>
            <div className="flex justify-center place-items-center w-[20%]">
                <h1 className="font-semibold">{date}</h1>
            </div>
            <div className="flex justify-center place-items-center w-[10%]">
                <h1 className="font-semibold">{money}</h1>
            </div>
        </div>
    )
}