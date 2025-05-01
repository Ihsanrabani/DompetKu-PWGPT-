import "../index.css"


const TransCard = ({data, onDelete}) => {
    const isIncome = data.TransactionType === "pemasukkan"
    

    return (
        <div className={`${isIncome ? "bg-green-400/65 border border-green-500 rounded-md text-center p-2" : "bg-red-400/65 border border-red-500 rounded-md text-center p-2"}`}>
            <div className="">
                <div className="flex justify-between">
                    <p className="text-black/40">{isIncome ? "Pemasukkan" : "Pengeluaran"}</p>
                    <p className="text-black/40">{data.CreatedDate}</p>
                </div>

                <div className="h-full my-4 flex flex-col gap-1">
                    <p className="font-semibold">{data.TransactionName}</p>
                    <p className="text-2xl font-bold">{isIncome ? `+ Rp ${Number(data.TransactionAmount).toLocaleString()}` : `- Rp ${Number(data.TransactionAmount).toLocaleString()}`}</p>
                </div>

                <div className="text-right">
                    <button className="bg-red-400 text-white p-1 rounded-md" onClick={onDelete}>Hapus Transaksi</button>
                </div>
            </div>
        </div>
    )
}


export default TransCard