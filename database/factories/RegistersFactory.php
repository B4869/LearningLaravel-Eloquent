<?php

namespace Database\Factories;

use App\Models\Courses;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Registers>
 */
class RegistersFactory extends Factory
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
            'student_id' => $this->faker->numberBetween(1, 30),
            'course_code' => Courses::inRandomOrder()->first()->course_code,
            'semester' => $this->faker->randomElement(['Spring', 'Summer', 'Fall']),
            'year' => $this->faker->numberBetween(2015, 2021),
        ];
    }
}
