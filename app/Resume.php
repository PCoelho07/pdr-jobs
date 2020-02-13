<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $fillable = [
        'name',
        'email',
        'contact',
        'presentation',
        'linkedin_url',
        'github_url',
        'salary_target',
        'resume_path',
        'level'
    ];
}
