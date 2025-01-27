<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookings extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'room_id',
        'customer_id',
        'check_in_date',
        'check_out_date',
        'total_amount',
    ];

    public function room()
    {
        return $this->belongsTo(Rooms::class, 'room_id');
    }

    public function customer()
    {
        return $this->belongsTo(BookingCustomers::class, 'customer_id');
    }
}
