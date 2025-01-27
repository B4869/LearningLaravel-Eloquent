<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Courses extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'course_code',
        'course_name',
        'credit_hour',
        'teacher_id'
    ];

    public function teacher()
    {
        return $this->belongsTo(Teachers::class, 'teacher_id');
    }

    public function registers()
    {
        return $this->hasMany(Registers::class, 'course_code', 'course_code');
    }
}
