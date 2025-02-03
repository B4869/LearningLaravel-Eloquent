<?php

namespace App\Http\Controllers;

use App\Models\Bookings;
use App\Models\Rooms;
use App\Models\RoomTypes;
use App\Models\BookingCustomers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function visual()
    {
        $topRooms_allTime = Rooms::withCount('bookings')
            ->orderByDesc('bookings_count')
            ->take(10)
            ->get(['room_number']);

        $topRooms_year = Rooms::withCount([
            'bookings' => function ($query) {
                $query->whereBetween('check_out_date', [
                    now()->subYear()->toDateString(),
                    now()->toDateString()
                ]);
            }
        ])
            ->orderByDesc('bookings_count')
            ->take(10)
            ->get(['room_number', 'bookings_count']);

        $topRooms_sixMonth = Rooms::withCount([
            'bookings' => function ($query) {
                $query->whereBetween('check_out_date', [
                    now()->subMonths(6)->toDateString(), // วันที่ 6 เดือนที่แล้ว
                    now()->toDateString() // วันนี้
                ]);
            }
        ])
            ->orderByDesc('bookings_count')
            ->take(10)
            ->get(['room_number', 'bookings_count']);

        $topRooms_threeMonth = Rooms::withCount([
            'bookings' => function ($query) {
                $query->whereBetween('check_out_date', [
                    now()->subMonths(3)->toDateString(), // วันที่ 6 เดือนที่แล้ว
                    now()->toDateString() // วันนี้
                ]);
            }
        ])
            ->orderByDesc('bookings_count')
            ->take(10)
            ->get(['room_number', 'bookings_count']);

        $topRooms_month = Rooms::withCount([
            'bookings' => function ($query) {
                $query->whereBetween('check_out_date', [
                    now()->subMonth()->toDateString(), // วันที่ 1 เดือนที่แล้ว
                    now()->toDateString() // วันนี้
                ]);
            }
        ])
            ->orderByDesc('bookings_count')
            ->take(10)
            ->get(['room_number', 'bookings_count']);

        return Inertia::render('BookingDotYeah/Visual', [
            'topRooms' => $topRooms_allTime,
            'topRooms_year' => $topRooms_year,
            'topRooms_sixMonth' => $topRooms_sixMonth,
            'topRooms_threeMonth' => $topRooms_threeMonth,
            'topRooms_month' => $topRooms_month,
        ]);
    }

    public function table(Request $request)
    {
        $selectedTable = $request->input('selectedTable', 1);
        $table = Bookings::paginate(10);

        if ($selectedTable == 1) {
            $table = Bookings::paginate(10);
        } else if ($selectedTable == 2) {
            $table = Rooms::paginate(10);
        } else if ($selectedTable == 3) {
            $table = RoomTypes::paginate(10);
        } else if ($selectedTable == 4) {
            $table = BookingCustomers::paginate(10);
        }

        return Inertia::render('BookingDotYeah/Table', [
            'table' => $table,
            'tableNo' => $selectedTable,
        ]);
    }

    public function index(Request $request)
    {
        $query = $request->input('search');

        $rooms = Rooms::with('roomType')
            ->where('room_number', 'like', '%' . $query . '%')
            ->paginate(8);

        return Inertia::render('BookingDotYeah/Index', [
            'rooms' => $rooms,
            'query' => $query,
        ]);
    }

    public function create()
    {
        //
        $rooms = RoomTypes::get();

        return Inertia::render('BookingDotYeah/Create', [
            'rooms' => $rooms,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'room_type_id' => 'required',
                'room_number' => 'required|regex:/^[A-Z][0-9]{2}$/|unique:rooms,room_number',
            ]);

            Rooms::create($validated);

            return redirect()->route('booking.index')->with('success', 'Room added successfully');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage() . ' Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Bookings $bookings)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rooms $room)
    {
        $roomTypes = RoomTypes::all();

        return Inertia::render('BookingDotYeah/Edit', [
            'room' => $room,
            'roomTypes' => $roomTypes,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rooms $room)
    {
        //
        try {
            $validated = $request->validate([
                'room_type_id' => 'required',
                'room_number' => 'required|regex:/^[A-Z][0-9]{2}$/|unique:rooms,room_number',
            ]);

            $room->update($validated);

            return redirect()->route('booking.index')->with('success', 'Room updated successfully');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage() . ' Please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rooms $room)
    {
        //
        try {
            $room->delete();

            return redirect()->route('booking.index')->with('success', 'Room deleted successfully');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage() . ' Please try again.');
        }
    }
}
