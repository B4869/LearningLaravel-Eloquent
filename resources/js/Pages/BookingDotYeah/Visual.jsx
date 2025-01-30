import React from "react"
import { Bar } from "react-chartjs-2"
import Navbar from '../../Components/Navbar';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function TopRoomsChart({ topRooms }) {
    const data = {
        labels: topRooms.map((room) => room.room_number),
        datasets: [
            {
                label: "จำนวนการจองห้องพัก",
                data: topRooms.map((room) => room.bookings_count),
                backgroundColor: "rgba(59, 130, 246, 0.6)",
                borderColor: "rgb(29, 78, 216)",
                borderWidth: 1,
            },
        ],
    }
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "จำนวนการจองห้องพัก",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "เลขห้อง",
                },
            },
        },
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100">
                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0 mt-12">
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">อันดับห้องที่มีการจองมากที่สุด</h1>
                        <div className="w-full max-w-4xl mx-auto">
                            <Bar data={data} options={options} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
