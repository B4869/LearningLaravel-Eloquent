import { useState } from "react"
import Navbar from "../../Components/Navbar"
import { router } from "@inertiajs/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Table({ table, tableNo }) {
    const [selectedTable, setSelectedTable] = useState(tableNo || 1)

    const columns = {
        1: [
            { label: "ID", key: "id" },
            { label: "Room ID", key: "room_id" },
            { label: "Customer ID", key: "customer_id" },
            { label: "Check In Date", key: "check_in_date" },
            { label: "Check Out Date", key: "check_out_date" },
            { label: "Total Amount", key: "total_amount" },
        ],
        2: [
            { label: "ID", key: "id" },
            { label: "Room Type ID", key: "room_type_id" },
            { label: "Room Number", key: "room_number" },
        ],
        3: [
            { label: "ID", key: "id" },
            { label: "Room Type", key: "type_name" },
            { label: "Max Occupancy", key: "max_occupancy" },
            { label: "Price / Night", key: "price_per_night" },
        ],
        4: [
            { label: "ID", key: "id" },
            { label: "First Name", key: "first_name" },
            { label: "Last Name", key: "last_name" },
            { label: "Phone", key: "phone" },
        ],
    }

    const handlePageChange = (url, selectedTable) => {
        router.get(url, { selectedTable })
    }

    const handleTableChange = (newTable) => {
        setSelectedTable(newTable)
        handlePageChange("/booking/table", newTable)
    }

    const tableNames = ["Bookings", "Rooms", "Room Types", "Customers"]

    return (
        <>
            <Navbar />
            <div className="bg-gray-150 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold mb-10 mt-4 text-center text-gray-800">All Tables</h1>
                    <div className="flex flex-wrap justify-center gap-4 p-4 mb-2">
                        {tableNames.map((name, index) => (
                            <button
                                key={index}
                                onClick={() => handleTableChange(index + 1)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out bg-gray-200 text-gray-700 hover:bg-gray-300`}
                            >
                                {name} List
                            </button>
                        ))}
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        {columns[selectedTable].map((column) => (
                                            <th
                                                key={column.key}
                                                scope="col"
                                                className="px-6 py-4 text-left text-xs text-gray-900 uppercase tracking-wider text-center font-bold"
                                            >
                                                {column.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {table.data.map((item, itemIdx) => (
                                        <tr key={item.id} className={itemIdx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}>
                                            {columns[selectedTable].map((column) => (
                                                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                                                    {item[column.key]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-12 flex justify-between items-center space-x-4">
                        <button
                            onClick={() => handlePageChange(table.prev_page_url, selectedTable)}
                            disabled={!table.prev_page_url}
                            className="flex items-center px-6 pl-4 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            <ChevronLeft className="h-5 w-5 mr-2" />
                            Previous
                        </button>
                        <button
                            onClick={() => handlePageChange(table.next_page_url, selectedTable)}
                            disabled={!table.next_page_url}
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

