import "../../index.css"
import { useEffect, useState } from "react"

// COMPONENTS
import Navbar from "../../components/Navbar"
import TransCard from "../../components/TransactionCard"

function History() {
    const [trans, setTrans] = useState([])

    useEffect(() => {

        const storedTrans = JSON.parse(localStorage.getItem("Transactions")) || []
        setTrans(storedTrans)

    }, [])

    return (
        <>
            <div className="min-h-screen flex flex-col">
            <Navbar/>
                <div className="px-5 md:px-[28%]">
                    <div className="xl:mx-[12%] md:mx-[6%]">
                        <div className="text-center mb-10">
                            <h1 className="text-xl font-semibold mb-1">Histori Transaksi</h1>
                            <p className="text-gray-400">Disini kamu akan menemukan histori transaksi</p>
                        </div>

                        <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2">
                            {trans
                                .sort((a, b) => new Date(b.CreatedDate) - new Date(a.CreatedDate)) // Urutkan terbaru dulu
                                .map((tran, index) => (
                                    <TransCard key={index} data={tran} onDelete={() => handleDeleteTran(index)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History