import "./index.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import Navbar from "./components/Navbar.Jsx"

function App() {

  const [isVisible, setIsVisible] = useState(false)

  const handlePPAddTrans = () => {
    if (isVisible === false) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      setIsVisible(false)
      document.body.style.overflow = 'auto'
    }
  }
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
              <p className="text-3xl font-bold text-white">Rp 1.000.000</p>
            </div>
          </div>

          <div className="">

            <div className="justify-self-end mb-2">
              <button className="bg-sky-400/80 text-white p-1 rounded-md" onClick={handlePPAddTrans}>Tambah Transaksi</button>
            </div>
            <div className="flex flex-col gap-4 xl:grid xl:grid-cols-2">

              <div className="bg-green-400/65 border border-green-500 rounded-md text-center p-2">
                <div className="">
                  <div className="text-left">
                    <p className="text-black/40">Pemasukkan</p>
                  </div>

                  <div className="h-full my-4 flex flex-col gap-1">
                    <p className="font-semibold">Jualan pensil</p>
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
              </div>

            </div>

          </div>
        </div>

      </div>

      {
        isVisible &&
          <div className="absolute w-screen h-screen inset-0 bg-gray-400/50 flex flex-col justify-center" onClick={handlePPAddTrans}>
            <div className="bg-white p-4 mx-[10%] md:mx-[30%] xl:mx-[34%] p-4 rounded-md" onClick={(e) => {e.stopPropagation()}}>
              <div className="flex justify-between mb-6 items-center">
                <h1 className="text-xl font-semibold text-center">Transaksi Baru</h1>
                <button onClick={handlePPAddTrans} className="text-xl font-semibold w-8 h-8">
                    <FontAwesomeIcon icon="fa-solid fa-xmark"/>
                </button>
              </div>
              <form action="" className="flex flex-col">

                <div className="mb-5 flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Masukkan nama transaksi"
                    className="bg-gray-200 p-1 rounded-md text-ellipsis"
                  />
                  <input
                    type="number"
                    placeholder="Masukkan jumlah uang"
                    min={0}
                    className="bg-gray-200 p-1 rounded-md text-ellipsis"
                  />

                  <select name="" id="" className="bg-gray-200 p-1 rounded-md text-ellipsis">
                    <option value="pemasukkan" selected>Pemasukkan</option>
                    <option value="pengeluaran">Pengeluaran</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button className="bg-sky-400/80 text-white p-1 px-2 rounded-md">Tambah</button>
                </div>

              </form>
            </div>
          </div>
      }

        <footer className='bg-gray-200 text-center p-4 mt-auto'>
          <p className=''>© 2025 Habit Tracker Harian by Ihsan. All rights reserved.</p>
        </footer>
    </div>
    </>
  )
}

export default App
