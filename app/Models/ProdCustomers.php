<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProdCustomers extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
    ];

    public function orders()
    {
        return $this->hasMany(Orders::class, 'customer_id', 'customer_id');
    }
}
