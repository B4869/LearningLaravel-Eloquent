<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Students>
 */
class StudentsFactory extends Factory
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
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'student_code' => $this->faker->unique()->regexify('[0-9]{10}'),
            'faculty' => $this->faker->randomElement(['Engineering', 'Science', 'Arts', 'Business']),
            'department' => $this->faker->randomElement(['Computer Science', 'Physics', 'Mathematics', 'Biology', 'Chemistry', 'Economics', 'Accounting', 'Marketing']),
        ];
    }
}
