import tel from '../../../assets/icons/phone.svg'
import facebook from '../../../assets/icons/facebook.svg'
import instagram from '../../../assets/icons/instagram.svg'
import map from '../../../assets/icons/map-pin.svg'
import telegram from '../../../assets/icons/telegram.svg'
import world from '../../../assets/icons/world.svg'
export default function HeaderTitle(){
    return <>
        <div className="w-full max-w-[1440px] flex justify-between mx-[auto] my-0 py-3">
            <div className="flex gap-x-[20px] w-full max-w-[340px] justify-between items-center">
                <div className="flex items-center w-full max-w-[130px] justify-between ">
                    <img className='w-[20px] cursor-pointer' src={tel} alt="phone" />
                    <p className='font-normal text-xs text-[#5A696E]'>+998 90 669 18 25</p>
                </div>
                <div className="flex items-center w-full max-w-[200px] justify-between">
                    <img className='w-[20px] cursor-pointer' src={map} alt="map-pin" />
                    <p className='font-normal text-xs text-[#12282F]'>Qarshi, Amir Temur ko‘chasi 46</p>
                </div>
            </div>
            <div className="flex w-full max-w-[200px] justify-between items-center">
                <div className="flex items-center justify-between w-full max-w-[80px]">
                    <img className='w-[20px] cursor-pointer' src={telegram} alt="telegram" />
                    <img className='w-[20px] cursor-pointer' src={facebook} alt="facebook" />
                    <img className='w-[20px] cursor-pointer' src={instagram} alt="instagram" />
                </div>
                <div className="flex items-center w-full max-w-[100px] justify-between">
                    <p className='font-normal text-xs text-[#5A696E] cursor-pointer'>O‘zbekcha</p>
                    <img className='w-[20px] cursor-pointer' src={world} alt="world" />
                </div>
            </div>
        </div>
    </>
}