import logo from "../../assets/icons/footerLogo.svg"
import apple from "../../assets/icons/FooterIcons/apple.svg"
import huawe from "../../assets/icons/FooterIcons/huawe.svg"
import playMarket from "../../assets/icons/FooterIcons/playMarket.svg"
import xabar from "../../assets/icons/FooterIcons/xabar.svg"
import telegram from "../../assets/icons/telegram.svg"
import instagram from "../../assets/icons/instagram.svg"
import facebook from "../../assets/icons/facebook.svg"
import phone from "../../assets/icons/phone.svg"
export default function Footer(){
    return<>
        <div className="bg-white">
            <div className="mx-[auto] my-0 w-full max-w-[1440px] py-6">
                <img className="mb-5" src={logo} alt="Logo" />
                <div className="mb-3 flex justify-between">
                    <div className="w-full max-w-[710px]">
                        <div className="flex justify-between items-center w-full max-w-[350px] mb-3">
                            <p className="font-semibold text-[17px] leading-5 text-[#12282F]">Biz haqimizda</p>
                            <p className="font-semibold text-[17px] leading-5 text-[#12282F]">Ommaviy oferta</p>
                            <p className="font-semibold text-[17px] leading-5 text-[#12282F]">Bog’lanish</p>
                        </div>
                        <p className="font-normal text-[14px] text-[#5A696E]">10 dan oshiq restoran, choyxona va kafelarni tanlab oson buyurtma berishingiz mumkin. Bularning barchasini telefoningizda turib bajarish mumkin</p>
                    </div>
                    <div className="flex w-full max-w-[610px] justify-between">
                        <div className="bg-[#F7F7F7] flex w-full rounded-xl p-3 max-w-[180px] gap-x-2">
                            <img src={apple} alt="icons" />
                            <div className="">
                                <p className="font-normal text-[12px] text-[#B0B7BA] cursor-pointer mb-1">Yuklab oling</p>
                                <p className="font-bold text-[14px] text-[#12282F] capitalize">app store</p>
                            </div>
                        </div>
                        <div className="bg-[#F7F7F7] flex w-full rounded-xl p-3 max-w-[180px] gap-x-2">
                            <img src={playMarket} alt="icons" />
                            <div className="">
                                <p className="font-normal text-[12px] text-[#B0B7BA] cursor-pointer mb-1">Yuklab oling</p>
                                <p className="font-bold text-[14px] text-[#12282F] capitalize">google play</p>
                            </div>
                        </div>
                        <div className="bg-[#F7F7F7] flex w-full rounded-xl p-3 max-w-[180px] gap-x-2">
                            <img src={huawe} alt="icons" />
                            <div className="">
                                <p className="font-normal text-[12px] text-[#B0B7BA] cursor-pointer mb-1">Yuklab oling</p>
                                <p className="font-bold text-[14px] text-[#12282F] capitalize">app gallery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between mx-[auto] my-0 w-full max-w-[1440px] py-4">
                <p className="max-w-[500px] w-full font-normal text-xl text-[#12282F]">© Yemak Delivery 2022. Barcha huquqlar himoyalangan.</p>
                <div className="w-full flex justify-between items-center max-w-[100px]">
                    <img className="cursor-pointer" src={telegram} alt="icons" />
                    <img className="cursor-pointer" src={facebook} alt="icons" />
                    <img className="cursor-pointer" src={instagram} alt="icons" />
                </div>
                <div className="flex gap-x-6 w-full max-w-[550px]">
                    <p className="flex w-full max-w-[200px] gap-x-2 font-normal text-xl text-[#12282F]"><img src={phone} alt="phone" /> +998 90 669 18 25</p>
                    <p className="flex w-full max-w-[250px] gap-x-2 font-normal text-xl text-[#12282F]"><img src={xabar} alt="phone" /> lazizkenjayev1825@gmail.com</p>
                </div>
            </div>
        </div>
    </>
}