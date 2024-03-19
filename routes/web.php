<?php

use Illuminate\Support\Facades\Route;


Route::get('/recruit', function () {
    return view('recruit'); 
});

Route::get('/{any}', function () {
    return view('home'); 
})->where('any', '.*');