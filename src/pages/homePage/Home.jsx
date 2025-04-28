import "../../index.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TransCard from "../../components/TransactionCard"

// !!! TODO
// 1. Fitur filter di historyPage
// 2. Bikin analitik(Low)

// Components
import Navbar from "../../components/Navbar"

const Home = () => {  

  useEffect(() => {

    const savedTrans = JSON.parse(localStorage.getItem("Transactions")) || []
    const savedBalance = JSON.parse(localStorage.getItem("Balance")) || 0
    
    setTrans(savedTrans)
    setBalance(savedBalance)

  }, [])

  const [isVisible, setIsVisible] = useState(false)
  const [balance, setBalance] = useState(0)
  const [trans, setTrans] = useState([])
  const [transName, setTransName] = useState("")
  const [transNum, setTransNum] = useState(0)
  const [transTyp, setTransTyp] = useState("")

  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const currentDate = day + '-' + month + '-' + year

  const handleAddTran = (e) => {
    e.preventDefault()

    if(transName === "" || transTyp === "") {
      alert("Isi data transaksi!")
      return;
    }

    const newTran = {
      TransactionName: transName,
      TransactionAmount: transNum,
      TransactionType: transTyp,
      CreatedDate: currentDate,
    }

    setTrans(prev => {
      const updateTrans = [...prev, newTran]
      localStorage.setItem("Transactions", JSON.stringify(updateTrans))
      return updateTrans
    })

    if (transTyp === "pemasukkan") {
      const newBalance = balance + Number(transNum)
      setBalance(newBalance)
      localStorage.setItem("Balance", JSON.stringify(newBalance))
    } else if (transTyp === "pengeluaran") {
      const newBalance = balance - Number(transNum)
      setBalance(newBalance)
      localStorage.setItem("Balance", JSON.stringify(newBalance))
    }

    alert("Transaksi Baru telah di tambahkan!")
    setTransName("")
    setTransNum("")
    setTransTyp("")
    setIsVisible(false)
  }

  const handleDeleteTran = (tranIndex, trans, tran) => {

    const con = confirm("Apakah transaksi " + tran.TransactionName + " ingin dihapus?")

    if(con) {
      const updateTrans = trans.filter((_, i) => i !== tranIndex)
      setTrans(updateTrans)
      localStorage.setItem("Transactions", JSON.stringify(updateTrans))
      alert("Transaksi berhasil dihapus!")
    }
  }

  const handlePPAddTrans = () => {
    if (isVisible === false) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      setIsVisible(false)
      document.body.style.overflow = 'auto'
    }
  }

  const todayTrans = trans.filter(tran => tran.CreatedDate === currentDate)

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <div className="xl:mx-[12%] md:mx-[6%]">
        {/* NAVBAR */}
        <Navbar />

        <div className="px-5 md:px-[28%]">
          <div className="mb-10">
            <div className="bg-black/75 border text-center py-10 rounded-md">
              <p className="font-bold text-white">Saldo anda saat ini:</p>
              <p className="text-3xl font-bold text-white">{`Rp ${balance.toLocaleString()}`}</p>
            </div>
          </div>

          <div className="">

            <div className="justify-self-end mb-2">
              <button className="bg-sky-400/80 text-white p-1 rounded-md" onClick={handlePPAddTrans}>Tambah Transaksi</button>
            </div>
            <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2">
              
              {todayTrans.length > 0 ? (                 
                  todayTrans.map((tran, index) => (

                    <TransCard key={index} data={tran} onDelete={() => handleDeleteTran(index, trans, tran)} />

                  ))                  
              ) : (
                <div className="  h-56 flex flex-col justify-center">
                  <h1 className="text-xl text-center text-gray-400">Kamu belum punya transaksi</h1>
                </div>
              )}


              
              {/* <div className="bg-green-400/65 border border-green-500 rounded-md text-center p-2">
                <div className="">
                  <div className="text-left">
                    <p className="text-black/40">Pemasukkan</p>
                  </div>

                  <div className="h-full my-4 flex flex-col gap-1">
                    <p className="font-semibold">Penjualan Pensil</p>
                    <p className="text-2xl font-bold">+ Rp 100.000</p>
                  </div>

                  <div className="text-right">
                    <button className="bg-red-400 text-white p-1 rounded-md">Hapus Transaksi</button>
                  </div>
                </div>
              </div>

              <div className="bg-red-400/65 border border-red-500 rounded-md text-center p-2">
                <div className="">
                  <div className="justify-self-start">
                    <p className="text-black/40">Pengeluaran</p>
                  </div>

                  <div className="h-full my-4 flex flex-col gap-1">
                    <p className="font-semibold">Beli alat</p>
                    <p className="text-2xl font-bold">- Rp 50.000</p>
                  </div>

                  <div className="justify-self-end">
                    <button className="bg-red-400 text-white p-1 rounded-md">Hapus Transaksi</button>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </div>

      </div>

      {
        isVisible &&
          <div className="absolute w-screen h-screen inset-0 bg-gray-400/50 flex flex-col justify-center" onClick={handlePPAddTrans}>
            <div className="bg-white p-4 mx-[10%] md:mx-[30%] xl:mx-[34%] rounded-md" onClick={(e) => {e.stopPropagation()}}>
              <div className="flex justify-between mb-6 items-center">
                <h1 className="text-xl font-semibold text-center">Transaksi Baru</h1>
                <button onClick={handlePPAddTrans} className="text-xl font-semibold w-8 h-8">
                    <FontAwesomeIcon icon="fa-solid fa-xmark"/>
                </button>
              </div>
              <form action="" className="flex flex-col">

                <div className="mb-5 flex flex-col gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Masukkan nama transaksi"
                    className="bg-gray-200 p-1 rounded-md text-ellipsis"
                    value={transName}
                    onChange={(e) => {setTransName(e.target.value)}}
                  />
                  <input
                    required
                    type="number"
                    placeholder="Masukkan jumlah uang"
                    min={0}
                    className="bg-gray-200 p-1 rounded-md text-ellipsis"
                    value={transNum}
                    onChange={(e) => { setTransNum(e.target.value) }}
                  />

                  <select name="" id="" className="bg-gray-200 p-1 rounded-md text-ellipsis" onChange={(e) => {setTransTyp(e.target.value)}} value={transTyp} required>
                    <option value="" defaultValue={true}>-Tipe Transaksi-</option>
                    <option value="pemasukkan">Pemasukkan</option>
                    <option value="pengeluaran">Pengeluaran</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button className="bg-sky-400/80 text-white p-1 px-2 rounded-md" onClick={handleAddTran}>Tambah</button>
                </div>

              </form>
            </div>
          </div>
      }

        <footer className='bg-gray-200 text-center p-4 mt-auto'>
          <p className=''>© 2025 DompetKu by Ihsan. All rights reserved.</p>
        </footer>
    </div>
    </>
  )
}

export default Home
