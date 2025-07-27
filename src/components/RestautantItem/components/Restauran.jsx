import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ProductCatigory from "../components/ProductCatigory"
import savat from "../../../assets/img/savatcha.png"
export default function Restauran(){
    let params=useParams()
    let [state,setState]=useState(null)
    let [name01,setName]=useState("")
    useEffect(()=>{
        fetch(`https://yemak-test.uz/api/user/restaurant/product?id=${params.id}`)
            .then((item)=>item.json())
            .then((data)=>setState(data))
    },[])
    // useEffect(()=>{
    //     fetch(`https://api.yemak-test.uz/user/restaurant/view?slug=${params.id}`)
    //         .then((item)=>item.json())
    //         .then((data)=>setState(data))
    // },[])
    // console.log(state);
    return <>
        <div className="w-full max-w-[1440px] mx-[auto] my-0">
            <div className="flex justify-between items-start">
                <div className="w-full max-w-[900px]">
                    {/* <ul className="mb-[24px] w-full flex justify-between bg-[white] max-w-[940px]">
                        <li className="font-semibold text-[24px] text-[#12282F] px-[12px] py-[7px] cursor-pointer hover:bg-[#EDC843] transition-[0.5s] hover:text-[white]">Pitsa</li>
                        <li className="font-semibold text-[24px] text-[#12282F] px-[12px] py-[7px] cursor-pointer hover:bg-[#EDC843] transition-[0.5s] hover:text-[white]">Dodsterlar</li>
                        <li className="font-semibold text-[24px] text-[#12282F] px-[12px] py-[7px] cursor-pointer hover:bg-[#EDC843] transition-[0.5s] hover:text-[white]">Snek</li>
                        <li className="font-semibold text-[24px] text-[#12282F] px-[12px] py-[7px] cursor-pointer hover:bg-[#EDC843] transition-[0.5s] hover:text-[white]">Burgerlar</li>
                        <li className="font-semibold text-[24px] text-[#12282F] px-[12px] py-[7px] cursor-pointer hover:bg-[#EDC843] transition-[0.5s] hover:text-[white]">Souslar</li>
                        <li className="font-semibold text-[24px] text-[#12282F] px-[12px] py-[7px] cursor-pointer hover:bg-[#EDC843] transition-[0.5s] hover:text-[white]">Ichimliklar</li>
                    </ul> */}
                    <ul className="mb-[24px] w-full flex bg-[white] max-w-[940px]">
                        {
                        state?.data?.products?.map((item,ind)=>{
                            
                            return<>
                                 <li key={ind} onClick={(e)=>setName(e.target.innerText)} className="font-semibold text-[24px] text-[#12282F] px-[12px] py-[7px] cursor-pointer hover:bg-[#EDC843] transition-[0.5s] hover:text-[white]">{item?.title}</li>
                            </>
                        })  
                        }
                    </ul>
                    <ProductCatigory name={name01} item={state?.data?.products}/>
                    
                    {/* <div className="w-full max-w-[900px]">
                        <h1 className="capitalize font-bold text-3xl leading-[30px] text-[#12282F] mb-[15px]" >Pizza</h1>
                        <div className="grid grid-cols-4 w-full max-w-[900px] gap-y-4 gap-x-3">
                            {
                                arr.map((item)=>{
                                    return(
                                        <div onClick={()=>{setModal(true)}} className="cursor-pointer hover:scale-[1.04] transition-[0.5s] w-full max-w-[270px] gap-x-[12px] gap-y-[15px]">
                                            <img className="mb-2 w-full" src={pitsa} alt="pitsaImg" />
                                            <p className="mb-2 px-3 capitalize font-semibold text-[14px] leading-[20px] text-[#12282F]">Мясная</p>
                                            <p className="px-3 pt-3.5 font-bold text-2xl leading-6 text-[#12282F]" >39 500 UZS</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div> */}
                </div>
                <div className="w-full max-w-[500px] bg-[white] p-5 rounded-2xl">
                    <p className="mb-[70px] capitalize font-bold text-3xl leading-8 text-[#12282F]">savatcha</p>
                    <div className="grid place-items-center">
                        <img className="mb-6"  src={savat} alt="img" />
                        <p className="font-bold text-2xl text-[#12282F] mb-3">Hozirda savatcha bo‘m-bo‘sh </p>
                        <p className="font-semibold text-[14px] text-[#5A696E] mb-[270px]">Kunlik takliflarni ko‘rib chiqing va buyurtma bering </p>
                    </div>
                </div>
            </div>
        
        </div>
    </>
}