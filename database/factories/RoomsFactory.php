<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rooms>
 */
class RoomsFactory extends Factory
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
            'room_type_id' => $this->faker->numberBetween(1, 5),
            'room_number' => $this->faker->regexify('[A-Z]{1}[0-9]{2}'),
        ];
    }
}
