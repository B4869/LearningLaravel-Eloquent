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
        if (!Schema::hasTable('prod_customers')) {
            Schema::create('prod_customers', function (Blueprint $table) {
                $table->string('customer_id', 10)->primary();
                $table->string('first_name', 50);
                $table->string('last_name', 50);
                $table->string('phone', 30);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prod_customers');
    }
};
