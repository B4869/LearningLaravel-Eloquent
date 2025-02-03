<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BookingCustomers;
use App\Models\Bookings;
use App\Models\Courses;
use App\Models\ProdCustomers;
use App\Models\Products;
use App\Models\Orders;
use App\Models\OrderDetails;
use App\Models\Registers;
use App\Models\Rooms;
use App\Models\RoomTypes;
use App\Models\Students;
use App\Models\Teachers;

class GlowUpSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        // Products::factory(30)->create();
        // ProdCustomers::factory(30)->create();
        // Orders::factory(30)->create();
        // OrderDetails::factory(30)->create();

        // Teachers::factory(30)->create();
        // Students::factory(30)->create();
        // Courses::factory(30)->create();
        // Registers::factory(30)->create();

        // BookingCustomers::factory(100)->create();
        // RoomTypes::factory(5)->create();
        // Rooms::factory(30)->create();
        Bookings::factory(300)->create();
    }
}
