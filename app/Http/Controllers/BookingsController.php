<?php

namespace App\Http\Controllers;

use App\Models\Bookings;
use App\Models\Rooms;
use App\Models\RoomTypes;
use App\Models\BookingCustomers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Pagination\Paginator;

class BookingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function visual()
    {
        $topRooms = Rooms::withCount('bookings')
            ->orderByDesc('bookings_count')
            ->take(10)
            ->get(['room_number']);

        return Inertia::render('BookingDotYeah/Visual', [
            'topRooms' => $topRooms,
        ]);
    }

    public function index(Request $request)
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

        return Inertia::render('BookingDotYeah/Index', [
            'table' => $table,
            'tableNo' => $selectedTable,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function edit(Bookings $bookings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bookings $bookings)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bookings $bookings)
    {
        //
    }
}
