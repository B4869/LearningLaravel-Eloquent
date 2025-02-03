import FlashMessage from "@/Components/FlashMessage";
import { useForm } from "@inertiajs/react";
import { Home, Hash, Loader2 } from "lucide-react";

export default function Edit({ roomTypes, flash, room }) {
    const { data, setData, put, errors, processing } = useForm({
        room_type_id: room.room_type_id || "",
        room_number: room.room_number || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("booking.update", room.id)); // ใช้ put หรือ patch สำหรับการอัปเดต
    };

    return (
        <>
            <FlashMessage flash={flash} />
            <div className="min-h-screen bg-gray-150 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit Room</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white shadow-2xl rounded-xl p-8">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="mb-4">
                                <label htmlFor="room_type_id" className="sr-only">
                                    Type Room
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Home className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <select
                                        id="room_type_id"
                                        value={data.room_type_id}
                                        onChange={(e) => setData("room_type_id", e.target.value)}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 pl-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        required
                                    >
                                        <option value="">Select a room type</option>
                                        {roomTypes.map((room) => (
                                            <option key={room.id} value={room.id}>
                                                {room.type_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.room_type_id && (
                                    <p className="mt-2 text-sm text-red-600" id="room_type_id-error">
                                        {errors.room_type_id}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="room_number" className="sr-only">
                                    Room Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Hash className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="room_number"
                                        type="text"
                                        value={data.room_number}
                                        onChange={(e) => setData("room_number", e.target.value.toUpperCase())}
                                        maxLength={3}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 pl-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Room Number"
                                        required
                                    />
                                </div>
                                {errors.room_number && (
                                    <p className="mt-2 text-sm text-red-600" id="room_number-error">
                                        {errors.room_number}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {processing ? (
                                    <Loader2 className="animate-spin h-5 w-5 mr-3" />
                                ) : (
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <Home className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                    </span>
                                )}
                                {processing ? "Updating..." : "Update Room"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}