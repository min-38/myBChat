<?php

namespace App\Repositories;

use App\Http\Requests\AuthRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use App\Repositories\BaseRepository;
use App\Interfaces\AuthInterface;
use App\Models\User;

class AuthRepository extends BaseRepository implements AuthInterface
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function addUser(AuthRequest $request)
    {
        
    }
}