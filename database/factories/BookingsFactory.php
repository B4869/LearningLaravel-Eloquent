<?php

namespace Database\Factories;

use App\Models\BookingCustomers;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bookings>
 */
class BookingsFactory extends Factory
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
            'room_id' => $this->faker->numberBetween(1, 30),
            'customer_id' => $this->faker->numberBetween(1, 100),
            'check_in_date' => $this->faker->dateTimeBetween('-1 years', 'now'),
            'check_out_date' => $this->faker->dateTimeBetween('now', '+1 years'),
            'total_amount' => $this->faker->randomFloat(2, 1, 1000),
        ];
    }
}
