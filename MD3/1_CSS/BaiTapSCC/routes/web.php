<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/bai2', function () {
    return view('bai2');
});

Route::get('/bai2/truyen1', function () {
    return view('truyen1');
})->name('truyen1');

Route::get('/bai2/truyen2', function () {
    return view('truyen2');
})->name('truyen2');

Route::get('/bai2/cv', function () {
    return view('cv');
})->name('cv');