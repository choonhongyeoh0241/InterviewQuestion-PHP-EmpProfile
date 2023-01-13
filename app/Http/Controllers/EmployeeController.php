<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{
    public function addEmployee(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:150',
            'phone' => 'required|min:10|max:11',
            'email' => 'required|email|max:191',
            'address' => 'required|max:250',
            'gender' => 'required|max:11',
            'nationality' => 'required',
            'birthday' => 'required',
            'hire_date' => 'required',
            'marital_status' => 'required',
            'department' => 'required'
        ]);

        if ($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors'=>$validator->messages()
            ]);
        }
        else{
            $data =$request->all();
            $json_arr = Storage::disk('local')->exists('employee.json') ? json_decode(Storage::disk('local')->get('employee.json')) : array();
            array_push($json_arr, $data);
            Storage::disk('local')->put('employee.json', json_encode($json_arr, JSON_PRETTY_PRINT));
            
            return response()->json([
                'status' => 200,
                'employee_data' => $data
            ]);
        }
    }

    public function getEmployee(){
        if (Storage::disk('local')->exists('employee.json')) {
            $employee_data = json_decode(Storage::disk('local')->get('employee.json'));
            return response()->json([
                'status' => 200,
                'employee_data' => $employee_data
            ]);
        }
        else{
            return response()->json([
                'status' => 200,
                'employee_data' => []
            ]);
        }
        
    }
    
}
