import { useState } from "react"
import Restaunrant from "../Restaurants/component/Restaunrant"
export default function Restaurant(){
    let [active,setActive]=useState(false)
    return<>
        <div className="">
            <div className="w-full bg-[#F7F7F7]">
                <h1 className="mb-4 mx-[auto] my-0 w-full max-w-[1440px] text-[#12282F] font-[700] text-4xl leading-[42px] py-[35px]">Restoranlar</h1>
                <div className="mx-[auto] w-full max-w-[1440px] mb-5">
                    <ul className="flex bg-white w-full max-w-[720px] justify-between rounded-xl">
                        <li className="capitalize transition-[0.5s] active:bg-[#fde17a] font-bold text-[18px] text-[#12282F] cursor-pointer p-5 hover:bg-[#EDC843]">pitsalar</li>
                        <li className="capitalize transition-[0.5s] active:bg-[#fde17a] font-bold text-[18px] text-[#12282F] cursor-pointer p-5 hover:bg-[#EDC843]">fast food</li>
                        <li className="capitalize transition-[0.5s] active:bg-[#fde17a] font-bold text-[18px] text-[#12282F] cursor-pointer p-5 hover:bg-[#EDC843]">milliy</li>
                        <li className="capitalize transition-[0.5s] active:bg-[#fde17a] font-bold text-[18px] text-[#12282F] cursor-pointer p-5 hover:bg-[#EDC843]">shirinliklar</li>
                        <li className="capitalize transition-[0.5s] active:bg-[#fde17a] font-bold text-[18px] text-[#12282F] cursor-pointer p-5 hover:bg-[#EDC843]">yevropa</li>
                        <li className="capitalize transition-[0.5s] active:bg-[#fde17a] font-bold text-[18px] text-[#12282F] cursor-pointer p-5 hover:bg-[#EDC843]">muzqaymoq</li>
                    </ul>
                </div>
                <Restaunrant/>
                <div className="mx-[auto] my-0 w-full max-w-[1440px] flex justify-center items-center">
                    <button className="mb-6 font-semibold py-[15px] text-white rounded-xl text-[15px] bg-[#EDC843] w-full max-w-[350px] cursor-pointer active:text-[20px] active:bg-[#ecda99] active:scale-[1.05] transition-[0.5s]">Загрузить ещё</button>
                </div>
            </div>
            
        </div>
    </>
}