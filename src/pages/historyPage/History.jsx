import "../../index.css"
import { use, useEffect, useState } from "react"

// COMPONENTS
import Navbar from "../../components/Navbar"
import TransCard from "../../components/TransactionCard"

function History() {
    const [trans, setTrans] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {

        const storedTrans = JSON.parse(localStorage.getItem("Transactions")) || []
        setTrans(storedTrans)
    }, [])

    const handleFilter = () => {

        if (filter === "tanggal") {
            const sortedTransD = [...trans].sort((a, b) => new Date(b.CreatedDate) - new Date(a.CreatedDate))
            setTrans(sortedTransD)
            return sortedTransD
        } else if (filter === "alfabet") {
            const sortedTransA = [...trans].sort((a, b) => a.TransactionName.localeCompare(b.TransactionName))
            setTrans(sortedTransA)
        } else if (filter === "jenis") {
            const sortedTransT = [...trans].sort((a, b) => a.TransactionType.localeCompare(b.TransactionType))
            setTrans(sortedTransT)
        }

    }

    useEffect(() => {
        handleFilter()
    }, [filter])

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
                        
                        <div className="flex mb-3 gap-1">
                            <p>Diurutkan berdasarkan</p>
                            <form action="" className="">
                                <select name="" id="" className="bg-gray-200 p-.5 rounded-md" onChange={(e) => setFilter(e.target.value)}>
                                    <option value="tanggal">Tanggal</option>
                                    <option value="alfabet">Alfabet</option>
                                    <option value="jenis">Jenis Transaksi</option>
                                </select>
                            </form>
                        </div>

                        <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2">
                            {trans.map((tran, index) => (
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