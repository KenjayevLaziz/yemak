import { Link } from 'react-router-dom'
import resImg from '../../../assets/img/resImg.png'
import { useEffect, useState } from 'react'
export default function Restaunrant(){
    let [rest,setRest]=useState(null)
    useEffect(()=>{
        fetch("https://api.yemak-test.uz/user/restaurant")
        .then((res)=>res.json())
        .then((data)=>setRest(data))
        
    },[])
    return <>
        <div className="grid grid-cols-3 gap-6 w-full max-w-[1440px] mx-[auto] my-0 mb-6"> 
            {
                rest?.data?.restaurants.map((item,ind)=>{
                    return(
                        <Link to={`${item?.id}`}>
                            <div key={ind}  className="relative cursor-pointer transition-[1s] hover:scale-[1.035]">
                                <img className='w-full max-w-[465px] rounded-2xl mb-[12px] cursor-pointer' src={ind==1 ? resImg: item?.image} alt="resImg" />
                                <div className="absolute top-[25px] bg-[white] flex rounded-r-[10px] items-center">
                                    <img className='w-[20px] h-[20px] mx-[5px]' src={ind==1 ? resImg: item?.logotype} alt="icon" />
                                    <p className='font-semibold text-xs text-[#12282F] p-[10px]' >0-{item?.default_category_id} daqiqa</p>
                                </div>
                                <div className="px-[17px]">
                                    <p className='font-bold text-2xl text-[#12282F] mb-[8px]'>{item?.name}</p>
                                    <div className="flex justify-between">
                                        <div className="flex max-w-[100px] w-full justify-between items-center">
                                            <img className='w-7 rounded-2xl h-7' src={ind==1 ? resImg: item?.logotype} alt="icon" />
                                            <p className='font-semibold text-xs text-[#12282F]'>{item?.slug}</p>
                                        </div>
                                        <p className='font-bold text-[20px] text-[#12282F]' >Bepul yetkazish</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </>
}