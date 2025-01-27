<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RoomTypes>
 */
class RoomTypesFactory extends Factory
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
            'type_name' => $this->faker->word,
            'price_per_night' => $this->faker->randomFloat(2, 50, 500),
            'max_occupancy' => $this->faker->numberBetween(1, 3),
        ];
    }
}
