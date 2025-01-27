<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasTable('registers')) {
            Schema::create('registers', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('student_id');
                $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
                $table->string('course_code', 10);
                $table->foreign('course_code')->references('course_code')->on('courses')->onDelete('cascade');
                $table->string('semester');
                $table->integer('year');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registers');
    }
};
