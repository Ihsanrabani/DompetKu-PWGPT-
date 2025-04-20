import "../index.css"


function Navbar() {

    return (
        <div className="xl:rounded-md md:rounded-md xl:rounded-t-none bg-gray-200 mb-10">
            <div className="flex justify-between p-3 pt-4 xl:p-5 items-center ">
                <div>
                    <h1 className="text-xl xl:text-2xl font-bold">Dompet<span className="text-orange-400">Ku</span></h1>
                </div>

                <div className="flex gap-4 text-gray-500/95 xl:text-xl">
                    <a href="#" className="hover:text-orange-400 ease-in duration-200 font-semibold">Home</a>
                    <span>|</span>
                    <a href="#" className="hover:text-orange-400 ease-in duration-200 font-semibold">Histori transakasi</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar