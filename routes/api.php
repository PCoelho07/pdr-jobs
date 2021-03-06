<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    Route::post('login', 'AuthController@login');
    Route::get('me', 'AuthController@me')->middleware('auth:api');
});

Route::group(['prefix' => 'resumes'], function () {
    Route::get('', 'ResumeController@index')->middleware('auth:api');
    Route::post('', 'ResumeController@store');
});

