<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrustHosts
{
    public function handle(Request $request, \Closure $next): Response
    {
        return $next($request);
    }
}
