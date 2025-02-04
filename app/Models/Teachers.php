<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Teachers extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'faculty',
        'department'
    ];

    public function courses()
    {
        return $this->hasMany(Courses::class, 'teacher_id');
    }
}
