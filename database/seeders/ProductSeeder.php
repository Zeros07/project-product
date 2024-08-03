<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'product_name' => 'Sample Product',
            'category' => 'Sample Category',
            'price' => 99.99,
            'discount' => 10.00
        ]);
    }
}
