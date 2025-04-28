import "../index.css"
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <div className="xl:rounded-md md:rounded-md xl:rounded-t-none bg-gray-200 mb-10">
            <div className="flex justify-between p-3 pt-4 xl:p-5 items-center ">
                <div>
                    <h1 className="text-xl xl:text-2xl font-bold">Dompet<span className="text-orange-400">Ku</span></h1>
                </div>

                <div className="flex gap-4 text-gray-500/95 xl:text-xl">
                    <Link to={"/"} className="hover:text-orange-400 ease-in duration-200 font-semibold">Home</Link>
                    <span>|</span>
                    <Link to={"/histori"} className="hover:text-orange-400 ease-in duration-200 font-semibold">Histori transaksi</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar