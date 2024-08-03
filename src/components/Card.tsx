import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Progress } from "./ui/progress"
export default function CardComponent({week,amount,increase,label}:{week:string,amount:string,increase:number,label:string}) {
    return (<Card x-chunk="dashboard-05-chunk-1" className="bg-black border-2 border-[#212121] text-[#FFFFFF] w-[45%] rounded-xl">
        <CardHeader className="pb-2">
            <CardDescription className="text-[#969696]">This {week}</CardDescription>
            <CardTitle className="text-4xl text-white">${amount}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="text-xs text-[#969696]">
                +{increase}% from last {label}
            </div>
        </CardContent>
        <CardFooter>
            <Progress value={increase} aria-label="25% increase" />
        </CardFooter>
    </Card>);
}