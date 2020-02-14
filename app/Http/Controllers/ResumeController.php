<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResume;
use App\Services\ResumeService;

class ResumeController extends Controller
{
    private $resumeService;

    public function __construct(ResumeService $resumeService)
    {
        $this->resumeService = $resumeService;
    }

    public function index()
    {
        try {
            $resumes = $this->resumeService->all();
            return response()
                ->json($resumes);
            //code...
        } catch (\Exception $e) {
            return response()
                ->json([
                    "error" => $e->getMessage()
                ]);
        }
    }

    public function store(StoreResume $request)
    {
        $validatedData = $request->validated();

        try {
            $resume = $this->resumeService->store($request);

            return response()
                ->json([
                    'resume' => $resume,
                    'success' => true,
                    'message' => 'resume stored with success!'
                ]);
        }
        catch (\Exception $e) {
            return response()
                ->json([
                    'success' => false,
                    'message' => $e->getMessage()
                ]);
        }
    }
}
