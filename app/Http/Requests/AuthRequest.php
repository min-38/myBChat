<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email:rfc,dns|unique:users,email',
            'name' => 'required|unique:users,name|between:2,10',
            'password' => 'required|regex:/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/|min:8',
            'password_confirmation' => 'required|same:password',
            'phone' => 'required|regex:/^01([016789]?)-?([0-9]{3,4})-?([0-9]{4})$/|min:11|unique:users,phone',
            'gender' => 'required',
            'country' => 'required',
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'email.required' => 'Please enter your email.',
            'email.unique' => 'This email is already registered.',
            'email' => 'It is not in email format.',
            'name.required' => 'Please enter your username (within 2 to 10 characters)',
            'name.between' => 'Please fill out the user name within 2 to 10 characters.',
            'name.unique' => 'This name already exists.',
            'password.required' => 'Please enter your password.',
            'password' => 'Must contain at least 8 alphanumeric characters, numbers, and special characters.',
            'password_confirmation.required' => 'Please enter your password.',
            'password.same' => 'Passwords do not match.',
            'phone.requried' => 'Please enter your cell phone number.',
            'phone.unique' => 'This is a registered phone number.',
            'phone' => 'This is not a phone number format.',
            'gender.required' => 'Please select a gender.',
            'country.required' => 'Please select a country.',
        ];
    }
}