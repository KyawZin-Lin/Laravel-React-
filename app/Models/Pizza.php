<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    protected $guarded=[];

    protected $casts=[
        'toppings'=>'array'
    ];

    protected $appends=[
        'chef',
        'chefEmail'
    ];

    protected $hidden=[
        'user'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getChefAttribute(){
        return $this->user->name;
    }

    public function getChefEmailAttribute(){
        return $this->user->email;
    }
}
