import { Link } from "react-router-dom"
export default function NotPage(){
    return <>
        <h1 className="grid place-content-center my-9 font-extrabold text-8xl">Safiga topilmadi</h1>
        <Link to={"/home"}>
            <p className="text-blue-500 underline grid place-content-center my-9 font-extrabold text-5xl">Bosh sahifa</p>
        </Link>
    </>
}