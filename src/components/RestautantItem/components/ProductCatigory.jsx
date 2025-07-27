import { useState } from "react"
import Modal from "../components/Modal"
// import pitsa from "../../../assets/img/pitsa.png"
export default function Catigory({name,item}){
    let [ismodal,setModal]=useState(false)
    let [foodItem,setFoodItem]=useState(null)
    return <>
        <div className="w-full max-w-[900px]">
            <h1 className="capitalize font-bold text-3xl leading-[30px] text-[#12282F] mb-[15px]" >{name?name:"Cellect category"}</h1>
            <div className="grid grid-cols-4 w-full max-w-[900px] gap-y-4 gap-x-3">
                {
                    item?.map((item)=>{
                        if(item?.title==name){
                            return(
                                item?.products.map((item,ind)=>{
                                    return(
                                        <div onClick={()=>{setModal(true);setFoodItem(item)}} key={ind} className="bg-[rgba(226,219,219,0.8)] pb-2.5 rounded-2xl cursor-pointer hover:scale-[1.04] transition-[0.5s] w-full max-w-[270px] gap-x-[12px] gap-y-[15px]">
                                        <img className="mb-2 w-full h-[180px] rounded-xl" src={item?.photo} alt="pitsaImg" />
                                        <p className="mb-2 px-3 capitalize font-semibold text-[14px] leading-[20px] text-[#12282F]">{item?.name}</p>
                                        <p>{item?.title}</p>
                                        <p className="px-3 pt-3.5 font-bold text-2xl leading-6 text-[#12282F]" >{item?.price} UZS</p>
                                    </div>
                                    )
                                })
                            )
                        }
                    })
                }
            </div>
        </div>
        {
            ismodal?<Modal  modal={setModal} foodItem={foodItem}/>:""
        }
        
    </>
}