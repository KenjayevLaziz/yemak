import Logo from "../../../assets/icons/Logo.svg"
import Search from "../../../assets/icons/search02.svg"
// import buyumHover from "../../../assets/icons/receipt.svg"
import buyum from "../../../assets/icons/Group.svg"
import basket from "../../../assets/icons/basket.svg"
import profel from "../../../assets/img/profel.jpg"
import { Link } from "react-router-dom"
export default function HeaderLogo(){
    return <>
        <div className="w-full max-w-[1440px] flex justify-between mx-[auto] my-0 py-[20px]">
            <div className="w-full max-w-[600px] flex justify-between items-center">
                <img className="w-full max-w-[140px] cursor-pointer" src={Logo} alt="Logo" />
                <div className="flex w-full max-w-[430px] bg-[#F7F7F7] rounded-l-[10px] justify-between">
                    <div className="flex w-full max-w-[315px]">
                        <img className="w-[20px] cursor-pointer mx-[10px]" src={Search} alt="Search Icon" />
                        <input className="flex w-full max-w-[300px] p-[10px] text-[#B0B7BA]" type="text" placeholder="Izlash"/>
                    </div>
                    <buttto className="w-full max-w-[105px] bg-[#EDC843] rounded-r-[10px] grid place-items-center cursor-pointer font-semibold text-[15px] text-[#FFFFFF]">Izlash</buttto>
                </div>
            </div>
            <div className="w-full max-w-[400px] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-y-[5px]">
                    <img className="w-[24px] cursor-pointer"  src={buyum} alt="" />
                    <p className="text-xs font-semibold text-[#5A696E]">Buyurtmalar</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-[5px]">
                    <img  className="w-[24px] cursor-pointer" src={basket} alt="" />
                    <p className="text-xs font-semibold text-[#5A696E]">Savatcha</p>
                </div>
                <div className="flex items-center gap-x-[8px]">
                    <div className="">
                        <p className="font-semibold text-[14px] my-[2px] text-[#12282F]">Laziz Kenjayev</p>
                        <p className="font-semibold text-xs text-[#5A696E]">+998 90 669 18 25</p>
                    </div>
                    <img className="w-[40px] h-[40px] rounded-4xl cursor-pointer" src={profel} alt="profel" />
                </div>
            </div>
        </div>
    </>
}