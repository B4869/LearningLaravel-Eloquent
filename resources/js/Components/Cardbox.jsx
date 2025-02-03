import { Users, Filter, Edit, Trash } from "lucide-react";

export default function RoomCard({ room, defaultImageUrl, onEdit, onDelete }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 relative group">
            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={onEdit}
                    className="p-2 bg-gray-500/30 text-white rounded-full hover:bg-gray-600/50 transition-colors duration-300"
                >
                    <Edit className="w-4 h-4" />
                </button>
                <button
                    onClick={onDelete}
                    className="p-2 bg-gray-500/30 text-white rounded-full hover:bg-gray-600/50 transition-colors duration-300"
                >
                    <Trash className="w-4 h-4" />
                </button>
            </div>

            <img
                src={room.image_url || defaultImageUrl}
                alt={`Room ${room.room_number}`}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">ห้อง {room.room_number}</h2>
                <div className="flex items-center mb-2">
                    <Filter className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-500">{room.room_type.type_name}</span>
                </div>
                <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="text-gray-500">ห้องสำหรับ {room.room_type.max_occupancy} คน</span>
                </div>
                <div className="flex items-center">
                    <span className="text-red-400 font-semibold text-lg">THB {room.room_type.price_per_night}</span>
                </div>
            </div>
        </div>
    );
}