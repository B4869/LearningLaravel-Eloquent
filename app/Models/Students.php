<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Students extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'student_id',
        'faculty',
        'department',
    ];

    public function registers()
    {
        return $this->hasMany(Registers::class, 'student_id');
    }
}
