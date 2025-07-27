import star from "../../../assets/icons/star.svg"
import yukla from "../../../assets/icons/upload.svg"
import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import img from "../../../assets/img/pizza.png"
export default function ResReklama(){
    let params=useParams()
    let [rest,setRest]=useState(null)
    useEffect(()=>{
        fetch("https://api.yemak-test.uz/user/restaurant")
        .then((res)=>res.json())
        .then((data)=>setRest(data))
        
    },[])
    let filterRest=rest?.data?.restaurants?.filter((item)=>{
        return item?.id==params?.id
    })
    return<>
        <div className="mb-[24px]">
            <div style={{ backgroundImage: `url(${params.id==38 ? img :filterRest?.[0]?.image})` }} className="z-0 bg-cover   p-[20px] flex justify-between w-full max-w-[1440px] mx-[auto] my-0 h-[250px] rounded-xl">
                <div className="flex flex-col justify-end">
                    <h1 className='capitalize text-[#FFFFFF] font-bold text-4xl mb-3'>{filterRest?.[0]?.name}</h1>
                    <p className='text-[#FFFFFF] font-normal text-[15px] w-full max-w-[500px] mb-[17px]' >{filterRest?.[0]?.description?filterRest?.[0]?.description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi ipsa debitis sit eligendi maiores."}</p>
                    <div className="grid grid-cols-3 gap-x-[12px] w-full max-w-[350px]">
                        <div className="flex rounded-[12px]  backdrop-blur-[8px] justify-around bg-[rgba(255,255,255,0.3)]">
                            <img className='w-[20px]' src={star} alt="star" />
                            <div className="">
                                <p className='font-semibold text-[14px] text-[#fff]'>4.5</p>
                                <p className='font-semibold text-[14px] text-[#fff]'>100+</p>
                            </div>
                        </div>
                        <div className="flex rounded-[12px] backdrop-blur-[8px] justify-around bg-[rgba(255,255,255,0.3)]">
                            <img className='w-[20px]' src={star} alt="star" />
                            <div className="">
                                <p className='font-semibold text-[14px] text-[#fff]'>4.5</p>
                                <p className='font-semibold text-[14px] text-[#fff]'>100+</p>
                            </div>
                        </div>
                        <div className="flex rounded-[12px] backdrop-blur-[8px] justify-around bg-[rgba(255,255,255,0.3)]">
                            <img className='w-[20px]' src={star} alt="star" />
                            <div className="">
                                <p className='font-semibold text-[14px] text-[#fff]'>4.5</p>
                                <p className='font-semibold text-[14px] text-[#fff]'>100+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div className="rounded-[12px] cursor-pointer bg-[rgba(255,255,255,0.5)] grid place-content-center w-[40px] h-[40px] backdrop-blur-[8px]">
                        <img src={yukla} alt="icon" />
                    </div>
                    <div className= "bg-[rgba(255,255,255,0.06)] backdrop-blur-[8px] py-[8px] px-[12px]">
                        <p className='font-normal text-[14px] text-[#fff]'>Время работы <span className='font-bold'>({filterRest?.[0]?.work_time?.from}-{filterRest?.[0]?.work_time?.to})</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
}