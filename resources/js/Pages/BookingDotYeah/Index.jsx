import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import { router } from '@inertiajs/react';

export default function Index({ table, tableNo }) {
    const [selectedTable, setSelectedTable] = useState(tableNo || 1);

    const columns = {
        1: [
            { label: 'ID', key: 'id' },
            { label: 'Room ID', key: 'room_id' },
            { label: 'Customer ID', key: 'customer_id' },
            { label: 'Check Out Date', key: 'check_in_date' },
            { label: 'Check In Date', key: 'check_out_date' },
            { label: 'Total Amount', key: 'total_amount' },
        ],
        2: [
            { label: 'ID', key: 'id' },
            { label: 'Room Type ID', key: 'room_type_id' },
            { label: 'Room Number', key: 'room_number' }
        ],
        3: [
            { label: 'ID', key: 'id' },
            { label: 'Room Type', key: 'type_name' },
            { label: 'Price / Night', key: 'price_per_night' }
        ],
        4: [
            { label: 'ID', key: 'id' },
            { label: 'First Name', key: 'first_name' },
            { label: 'Last Name', key: 'last_name' },
            { label: 'Phone', key: 'phone' },
        ]
    };

    const handlePageChange = (url, selectedTable) => {
        router.get(url, { selectedTable });
    };

    const handleTableChange = (newTable) => {
        setSelectedTable(newTable);
        handlePageChange('/booking', newTable);
    };

    return (
        <>
            <Navbar />
            <div className="p-16">
                <h1 className="text-2xl font-bold mb-8 text-center">
                    <div className="flex justify-evenly items-center space-x-8">
                        <button onClick={() => handleTableChange(1)}>
                            Bookings List
                        </button>
                        <button onClick={() => handleTableChange(2)}>
                            Rooms List
                        </button>
                        <button onClick={() => handleTableChange(3)}>
                            RoomTypes List
                        </button>
                        <button onClick={() => handleTableChange(4)}>
                            Customers List
                        </button>
                    </div>
                </h1>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-200">
                        <tr>
                            {columns[selectedTable].map((column) => (
                                <th key={column.key} className="py-2 px-4 border-b border-gray-300">{column.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {table.data.map(item => (
                            <tr key={item.id} className="even:bg-gray-50">
                                {columns[selectedTable].map((column) => (
                                    <td key={column.key} className="py-2 px-4 border-b border-gray-300 text-center">
                                        {item[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-8 flex justify-center items-center space-x-4">
                    <button
                        onClick={() => handlePageChange(`${table.prev_page_url}`, selectedTable)}
                        disabled={!table.prev_page_url}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-lg">Page {table.current_page} of {table.last_page}</span>
                    <button
                        onClick={() => handlePageChange(`${table.next_page_url}`, selectedTable)}
                        disabled={!table.next_page_url}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
