<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Interfaces\AuthInterface;

class AuthController extends Controller
{
    private AuthInterface $authInterface;

    public function __construct(AuthInterface $authInterface)
    {
        $this->middleware('guest')->except('logout');
        $this->authInterface = $authInterface;
    }

    // 회원가입
    function SignUp(AuthRequest $request) {
        $state = $this->authInterface->addUser($request);

        if($state) {
            // 회원가입 성공 시
            return response()->json(array(
                'success' => true,
                'message'   => "회원가입이 되셨습니다.\n로그인해주세요.",
                'redirectUrl'   => "/login",
            ));
        }
    }
}
