<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomTypes extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'type_name',
        'price_per_night',
        'max_occupancy',
    ];

    public function rooms()
    {
        return $this->hasMany(Rooms::class, 'room_type_id');
    }
}
