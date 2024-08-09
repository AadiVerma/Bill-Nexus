export default function InvoiceTile({Items,Quantity,UnitPrice,Total}:{
    Items:string,Quantity:number | string,UnitPrice:number | string,Total:number | string
}){
    return (
        <div className="flex justify-between border-b-2 border-black p-3">
            <h1 className="w-[50%] text-lg font-bold">{Items}</h1>
            <div className="flex justify-between w-[50%]">
            <h1 className="text-lg font-bold w-[10%] flex justify-center">{Quantity}</h1>
            <h1 className="text-lg font-bold w-[10%] flex justify-center">{UnitPrice}</h1>
            <h1 className="text-lg font-bold w-[10%] flex justify-center">{Total}</h1>
            </div>
        </div>
    )
}