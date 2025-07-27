import { Link } from "react-router-dom"
import home from "../../../assets/icons/home.svg"
import right from "../../../assets/icons/right.svg"
export default function ResHeader(){
    return<>
        <div className="bg-[#F7F7F7]">
            <div className="w-full max-w-[1440px] mx-[auto] my-0 pb-8">
                <nav className="flex">
                    <ul className="flex items-center gap-x-2">
                        <Link to={"/home"}>
                            <li className="flex items-center"><img className="mx-[5px]" src={home} alt="icon" /> <p className="text-[#12282F] text-[13px] font-normal">Asosiy sahifa</p></li>
                        </Link>
                        <li><img src={right} alt="icon" /></li>
                        <li><p className="text-[#12282F] text-[13px] font-normal" >Restoranlar</p></li>
                        <li><img src={right} alt="icon" /></li>
                        <li><p className="text-[#B0B7BA] text-[13px] font-normal">Dodo Pizza</p></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
}