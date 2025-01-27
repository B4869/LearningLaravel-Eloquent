<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Teachers;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Courses>
 */
class CoursesFactory extends Factory
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
            'course_code' => $this->faker->unique()->regexify('[A-Z]{3}[0-9]{3}'),
            'course_name' => $this->faker->word,
            'credit_hour' => $this->faker->numberBetween(1, 3),
            'teacher_id' => $this->faker->numberBetween(1, 30),
        ];
    }
}
