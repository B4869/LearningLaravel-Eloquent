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
        $checkInDate = $this->faker->dateTimeBetween('-3 years', 'now');
        $daysToAdd = $this->faker->numberBetween(1, 8);
        $checkOutDate = clone $checkInDate;
        $checkOutDate->modify("+$daysToAdd days");

        return [
            //
            'room_id' => $this->faker->numberBetween(1, 30),
            'customer_id' => $this->faker->numberBetween(1, 100),
            'check_in_date' => $checkInDate,
            'check_out_date' => $checkOutDate,
            'total_amount' => $this->faker->randomFloat(2, 1, 1000),
        ];
    }
}
