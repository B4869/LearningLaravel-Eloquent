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
        if (!Schema::hasTable('bookings')) {
            Schema::create('bookings', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('room_id');
                $table->foreign('room_id')->references('id')->on('rooms')->onDelete('cascade');
                $table->unsignedBigInteger('customer_id');
                $table->foreign('customer_id')->references('id')->on('booking_customers')->onDelete('cascade');
                $table->date('check_in_date');
                $table->date('check_out_date');
                $table->decimal('total_amount', 10, 2);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
