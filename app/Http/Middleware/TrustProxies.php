<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as Middleware;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array|string
     */
    protected $proxies = '*';

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers = \Illuminate\Http\Request::HEADER_X_FORWARDED_FOR 
                         | \Illuminate\Http\Request::HEADER_X_FORWARDED_PORT 
                         | \Illuminate\Http\Request::HEADER_X_FORWARDED_PROTO 
                         | \Illuminate\Http\Request::HEADER_X_FORWARDED_HOST;
}