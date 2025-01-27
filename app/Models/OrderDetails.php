<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderDetails extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'order_id',
        'product_code',
        'quantity',
        'price_per_unit',
        'total_price'
    ];

    public function order()
    {
        return $this->belongsTo(Orders::class, 'order_id', 'id');
    }

    public function product()
    {
        return $this->belongsTo(Products::class, 'product_code', 'product_code');
    }
}
