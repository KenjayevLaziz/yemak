import ResHeader from "./components/ResHeader"
import ResReklama from "./components/ResReklama"
import Restauran from "./components/Restauran"
export default function ResItems(){
    return <>
    <div className="bg-[#F7F7F7]">
        <ResHeader/>
        <ResReklama />
        <Restauran/>
    </div>

    </>
}