import { useState } from "react"
import { Bar } from "react-chartjs-2"
import Navbar from "@/Components/Navbar"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { BarChartIcon as ChartSquareBar, Calendar } from "lucide-react"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function TopRoomsChart({
    topRooms,
    topRooms_year,
    topRooms_sixMonth,
    topRooms_threeMonth,
    topRooms_month,
}) {
    const [selectedPeriod, setSelectedPeriod] = useState("ทั้งหมด")

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period)
    }

    const periodData = {
        ทั้งหมด: {
            data: topRooms,
            color: "rgba(59, 130, 246, 0.6)",
            backgroundColor: "rgba(59, 130, 246, 0.6)",
        },
        "1 ปีที่ผ่านมา": {
            data: topRooms_year,
            color: "rgba(255, 99, 132, 0.6)",
            backgroundColor: "rgb(255, 99, 132)",
        },
        "6 เดือนที่ผ่านมา": {
            data: topRooms_sixMonth,
            color: "rgba(75, 192, 192, 0.6)",
            backgroundColor: "rgb(75, 192, 192)",
        },
        "3 เดือนที่ผ่านมา": {
            data: topRooms_threeMonth,
            color: "rgba(153, 102, 255, 0.6)",
            backgroundColor: "rgb(153, 102, 255)",
        },
        "1 เดือนที่ผ่านมา": {
            data: topRooms_month,
            color: "rgba(255, 159, 64, 0.6)",
            backgroundColor: "rgb(255, 159, 64)",
        },
    }

    const selectedData = periodData[selectedPeriod]

    const data = {
        labels: selectedData.data.map((room) => room.room_number),
        datasets: [
            {
                label: `จำนวนการจองห้องพัก (${selectedPeriod})`,
                data: selectedData.data.map((room) => room.bookings_count),
                backgroundColor: selectedData.backgroundColor,
                borderColor: selectedData.color,
                borderWidth: 1,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "จำนวนการจองห้องพัก",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: "เลขห้อง",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleFont: {
                    size: 16,
                    weight: "bold",
                },
                bodyFont: {
                    size: 14,
                },
                padding: 12,
                cornerRadius: 8,
            },
        },
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-150">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-3xl overflow-hidden">
                        <div className="p-8">
                            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center flex items-center justify-center">
                                <ChartSquareBar className="w-10 h-10 mr-4 text-blue-500" />
                                อันดับห้องที่มีการจองมากที่สุด
                            </h1>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {["ทั้งหมด", "1 ปีที่ผ่านมา", "6 เดือนที่ผ่านมา", "3 เดือนที่ผ่านมา", "1 เดือนที่ผ่านมา"].map((period) => (
                                    <button
                                        key={period}
                                        onClick={() => handlePeriodChange(period)}
                                        className={`px-6 py-3 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedPeriod === period
                                                ? "bg-blue-500 text-white shadow-lg"
                                                : "bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50"
                                            }`}
                                    >
                                        <span className="flex items-center">
                                            <Calendar className="w-5 h-5 mr-2" />
                                            {period}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <div className="w-full max-w-5xl mx-auto h-[60vh]">
                                <Bar data={data} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

