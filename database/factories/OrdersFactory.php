<?php

namespace Database\Factories;

use App\Models\ProdCustomers;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orders>
 */
class OrdersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'customer_id' => ProdCustomers::inRandomOrder()->first()->customer_id,
            'order_date' => $this->faker->dateTimeBetween('2020-01-01', '2025-12-31')->format('Y-m-d'),
            'total_amount' => $this->faker->randomFloat(2, 100, 1000),
        ];
    }
}
