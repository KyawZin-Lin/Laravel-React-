<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaController extends Controller
{
    public function index(){
        $pizzas= Pizza::all();
        return Inertia::render('Pizzas/All',[
            'pizzas' => $pizzas
        ]);
    }

    public function edit (string $id){
        $pizza = Pizza::find($id);
        dd($pizza);
    }
}
