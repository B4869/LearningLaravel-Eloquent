<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Orders extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'customer_id',
        'order_date',
        'total_amount'
    ];

    public function customer()
    {
        return $this->belongsTo(ProdCustomers::class, 'customer_id', 'customer_id');
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class, 'order_id', 'id');
    }
}
