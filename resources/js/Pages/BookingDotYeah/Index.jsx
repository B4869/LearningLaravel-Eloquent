import { useState } from "react"
import { Helmet } from "react-helmet"
import { router, usePage } from '@inertiajs/react';
import { Search, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/Components/Navbar"
import RoomCard from "@/Components/Cardbox"
import FlashMessage from "@/Components/FlashMessage";
import Swal from "sweetalert2";
import '../../../css/swal.css'


export default function Rooms({ rooms, query, flash }) {
    const [search, setSearch] = useState(query || "")
    const defaultImageUrl = "/storage/imgs/background.png"

    const handlePageChange = (url) => {
        router.get(url, { search })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        router.get("/booking", { search })
    }

    const handleEdit = (room_id) => {
        router.get(`/booking/${room_id}/edit`)
    }

    const handleDelete = (room_id) => {
        Swal.fire({
            title: "คุณแน่ใจหรือไม่?",
            text: "คุณจะไม่สามารถกู้คืนข้อมูลนี้กลับมาได้!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            showClass: {
                popup: "animate__animated animate__fadeInDown", // Animation เข้า
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp", // Animation ออก
            },
            customClass: {
                container: "custom-swal-container", // ปรับแต่ง container
                popup: "custom-swal-popup", // ปรับแต่ง popup
                title: "custom-swal-title", // ปรับแต่ง title
                text: "custom-swal-text", // ปรับแต่ง text
                confirmButton: "custom-swal-confirm-button", // ปรับแต่งปุ่ม Confirm
                cancelButton: "custom-swal-cancel-button", // ปรับแต่งปุ่ม Cancel
            },
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/booking/${room_id}`);
            }
        });
    };

    return (
        <>
            <Navbar />
            <Helmet>
                <title>Our Rooms | Your Hotel Name</title>
            </Helmet>
            <FlashMessage flash={flash} />
            <div className="bg-gray-150 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-10 mt-4 text-center text-gray-800">Rooms List</h1>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <form onSubmit={handleSearch} className="w-full md:w-auto mb-4 md:mb-0">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    maxLength={20}
                                    className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Search rooms..."
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-blue-500 hover:blue-600 rounded-r-full"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                        <button
                            onClick={() => router.get(route('booking.create'))}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                        >
                            <Plus className="h-5 w-5 mr-2" />
                            New Room
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {rooms.data.map((room) => (
                            <RoomCard key={room.id} room={room} defaultImageUrl={defaultImageUrl} onEdit={() => handleEdit(room.id)} onDelete={() => handleDelete(room.id)} />
                        ))}
                    </div>
                    <div className="mt-12 flex justify-between items-center space-x-4">
                        <button
                            onClick={() => handlePageChange(rooms.prev_page_url)}
                            disabled={!rooms.prev_page_url}
                            className="flex items-center px-6 pl-4 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            <ChevronLeft className="h-5 w-5 mr-2" />
                            Previous
                        </button>
                        <button
                            onClick={() => handlePageChange(rooms.next_page_url)}
                            disabled={!rooms.next_page_url}
                            className="flex items-center px-6 pr-4 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            Next
                            <ChevronRight className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

