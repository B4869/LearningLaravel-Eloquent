<?php

use App\Http\Controllers\BookingsController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/booking', [BookingsController::class, 'index'])->name('booking.index');
Route::get('/booking/create', [BookingsController::class, 'create'])->name('booking.create');
Route::post('/booking/store', [BookingsController::class, 'store'])->name('booking.store');
Route::get('/booking/{room}/edit', [BookingsController::class, 'edit'])->name('booking.edit');
Route::put('/booking/{room}', [BookingsController::class, 'update'])->name('booking.update');
Route::delete('/booking/{room}', [BookingsController::class, 'destroy'])->name('booking.destroy');

Route::get('/booking/table', [BookingsController::class, 'table'])->name('booking.table');
Route::get('/booking/visual', [BookingsController::class, 'visual'])->name('booking.visual');

Route::get('/product', [ProductsController::class, 'index'])->name('product');
Route::get('/reg', [RegistersController::class, 'index'])->name('reg');

require __DIR__.'/auth.php';
