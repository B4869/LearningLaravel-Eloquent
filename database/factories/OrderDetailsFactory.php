<?php

namespace Database\Factories;

use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderDetails>
 */
class OrderDetailsFactory extends Factory
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
            'order_id' => $this->faker->numberBetween(1, 30),
            'product_code' => Products::inRandomOrder()->first()->product_code,
            'quantity' => $this->faker->numberBetween(1, 30),
            'price_per_unit' => $this->faker->randomFloat(2, 1, 100),
            'total_price' => $this->faker->randomFloat(2, 1, 100),
        ];
    }
}
