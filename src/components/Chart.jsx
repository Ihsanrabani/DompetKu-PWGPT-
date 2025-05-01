import "../index.css"
import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";

// ⚠️⚠️ !STILL IN WORK! ⚠️⚠️

const Chart = () => {



    const Statistics = () => {
        const [dataForChart, setDataForChart] = useState([]);

        useEffect(() => {
            // Ambil data transaksi dari localStorage
            const storedTransactions = JSON.parse(localStorage.getItem("Transactions")) || [];

            // Dapatkan tanggal hari ini
            const today = new Date();
            const last30Days = Array.from({ length: 30 }, (_, i) => {
                const date = new Date(today);
                date.setDate(today.getDate() - i);  // 30 hari kebelakang
                return date.toISOString().split('T')[0];  // format tanggal YYYY-MM-DD
            });

            // Inisialisasi array untuk menyimpan total pemasukkan dan pengeluaran per tanggal
            const chartData = last30Days.map(date => ({
                date,
                income: 0,
                expense: 0,
            }));

            // Mengelompokkan transaksi berdasarkan tanggal dan jenis transaksi
            storedTransactions.forEach(tran => {
                const transactionDate = tran.CreatedDate;  // Asumsi sudah ada properti CreatedDate pada transaksi

                if (last30Days.includes(transactionDate)) {
                    const index = last30Days.indexOf(transactionDate);
                    if (tran.TransactionType === "pemasukkan") {
                        chartData[index].income += Number(tran.TransactionAmount);
                    } else if (tran.TransactionType === "pengeluaran") {
                        chartData[index].expense += Number(tran.TransactionAmount);
                    }
                }
            });

        setDataForChart(chartData);
    }, []);

    useEffect(() => {
        Statistics()
    }, [])

    console.log("Hello")

    return (
        <div className="w-full h-[300px] mt-6 bg-white rounded-xl p-4 shadow-md">
            <h2 className="text-lg font-bold mb-4">Statistik 30 Hari Terakhir</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataForChart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#22c55e" name="Pemasukkan" />
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" name="Pengeluaran" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
}

export default Chart