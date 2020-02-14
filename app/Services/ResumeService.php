<?php

namespace App\Services;

use App\Resume;

class ResumeService
{

    public function all()
    {
        $resumes = Resume::all();

        foreach ($resumes as $resume) {
            $resume['resume_full_path'] = url("storage/resumes/{$resume['resume_path']}");
        }

        return $resumes;
    }

    public function store($request)
    {
        $data = $request->all();

        $sanitizedData = [
            'name' => $data['name'],
            'email' => $data['email'],
            'contact' => $data['contact'],
            'presentation' => $data['presentation'],
            'linkedin_url' => $data['linkedin_url'],
            'github_url' => $data['github_url'],
            'salary_target' => $data['salary_target'],
            'resume_path' => '',
            'level' => $data['level'],
        ];


        if ($request->hasFile('resume_path'))
        {
            $resumePath = "{$request->resume_path->getClientOriginalName()}";
            $sanitizedData['resume_path'] = $resumePath;

            $request->resume_path->storeAs('resumes', $resumePath);
        }

        $resume = Resume::create($sanitizedData);

        return $resume;
    }
}
