<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingCustomers extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
    ];

    public function bookings()
    {
        return $this->hasMany(Bookings::class, 'customer_id');
    }
}
