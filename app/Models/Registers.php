<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Registers extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'student_id',
        'course_code',
        'semester',
        'year'
    ];

    public function student()
    {
        return $this->belongsTo(Students::class, 'student_id');
    }

    public function course()
    {
        return $this->belongsTo(Courses::class, 'course_code', 'course_code');
    }
}
