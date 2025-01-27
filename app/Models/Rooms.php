<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'room_type_id',
        'room_number',
    ];

    public function roomType()
    {
        return $this->belongsTo(RoomTypes::class, 'room_type_id');
    }

    public function bookings()
    {
        return $this->hasMany(Bookings::class, 'room_id');
    }
}
