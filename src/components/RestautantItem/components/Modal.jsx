import pitsa from "../../../assets/img/pitsa.png"
import close from "../../../assets/icons/remove.svg"
import checkTrue from "../.././../assets/icons/radiocheck.svg"
import checkFalse from "../.././../assets/icons/radioIscheck.svg"
import minus from "../../../assets/icons/minus-circle.svg"
import plus from "../../../assets/icons/plus-circle.svg"
import { useState } from "react"
export default function Modal({modal,foodItem}){
    let [count,setCount]=useState(0)
    let [img,setImg]=useState(true)
    let [img1,setImg1]=useState(true)
    // console.log(foodItem);
    function dic(){
        count++
        setCount(count)
    }
    function inc(){
        if(count>0){
            count--
            setCount(count)
        }else{
            count=0
        }
    }

    return<>
        <div className={" bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 right-0 bottom-0 h-[100%] w-full"}>
            <div className="rounded-2xl fixed top-0 right-[40%] bg-[white] w-full max-w-[350px] h-full max-h-[800px] py-5 overflow-y-scroll">
                <div className="flex items-start justify-between mb-4 px-5">
                    <img className="w-full max-w-[300px] rounded-2xl" src={foodItem?.photo} alt="img" />
                    <img className="cursor-pointer" onClick={()=>modal(false)} src={close} alt="" />
                </div>
                <div className="px-5 mb-4">
                    <p className="font-bold text-2xl text-[#12282F] mb-1">{foodItem?.name}</p>
                    <p className="font-semibold text-xs text-[#15CC69] mb-4">25sm</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo nulla incidunt placeat distinctio asperiores laborum, in delectus fugit molestiae!</p>
                </div>
                <div className="">
                    <p className="py-2 px-5 bg-[#F0F0F0]">Taom o‘lchami</p>
                    <div className="p-5">
                        <p className="p-4 flex gap-x-2 font-normal text-[17px] capitalize text-[rgb(18,40,47)]"><img className="cursor-pointer" onClick={()=>{setImg(!img)}} src={img ? checkFalse : checkTrue} alt="icon" /> o'rtacha </p>
                        {/* <p className="p-4 flex gap-x-2 font-normal text-[17px] capitalize text-[#12282F]"><img className="cursor-pointer" onClick={()=>{setImg1(!img1)}} src={img1 ?checkFalse : checkTrue} alt="icon" /> o'rtacha(35sm) </p> */}
                        {/* {
                            foodItem?.options[0]?.rows?.map((item,ind)=>{
                                return (
                                    <p key={ind} className="p-4 flex gap-x-2 font-normal text-[17px] capitalize text-[#12282F]"> <input className="cursor-pointer" type="radio" name="radio" /> {item?.name} </p>
                                )
                            })
                        } */}
                    </div>
                    <div className="flex justify-between px-5">
                        <div className="w-full max-w-[150px] p-3">
                            <p className="capitalize font-bold text-[17px] text-[#12282F] mb-[5px]">miqdori</p>
                            <p className="flex justify-between max-w-[120px] items-center"><span className="font-semibold text-[14px] text-[#12282F]">{count}</span>x<span className="">{(img?0:foodItem.price)}</span>UZS</p>
                        </div>
                        <div className="flex items-center w-full max-w-[130px] justify-between">
                            <p className="grid place-content-center border-solid border-[#B0B7BA] border p-2 rounded-xl w-9 cursor-pointer"><img onClick={inc} src={minus} alt="icon" /></p>
                            <p className="text-[17px] border-solid border-[#B0B7BA] border p-2 rounded-xl w-9 bg-[#F7F7F7] font-bold text-[#12282F]">{count}</p>
                            <p className=" border-solid border-[#B0B7BA] border p-2 rounded-xl w-9 cursor-pointer"><img onClick={dic} src={plus} alt="plus" /></p>
                        </div>
                    </div>
                    <button className="flex w-full px-5 capitalize bg-[#EDC843] rounded-xl text-[#12282F] font-bold text-[15px] items-center justify-center py-2 cursor-pointer">savatchaga <p className="ml-[10px] flex items-center justify-center"> (<span>{count*(img?0:foodItem.price)}</span>)</p></button>
                </div>
            </div>
        </div>
    </>
}