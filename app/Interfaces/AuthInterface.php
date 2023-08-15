<?php

namespace App\Interfaces;
use App\Interfaces\EloquentInterface;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;

interface AuthInterface extends EloquentInterface
{
    public function addUser(AuthRequest $request);
}