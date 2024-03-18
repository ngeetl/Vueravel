<?php

use Illuminate\Support\Facades\Route;

// 모든 웹 요청을 home 뷰로 리디렉션하여 vue와 라우팅 충돌 방지
Route::get('/{any}', function () {
    return view('home'); 
})->where('any', '.*');