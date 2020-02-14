<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewCandidatesReport extends Mailable
{
    use Queueable, SerializesModels;

    protected $newCandidatesQtt;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($newCandidatesQtt)
    {
        $this->newCandidatesQtt = $newCandidatesQtt;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        $this->to(env('EMAIL_RECIPIENT_ADDRESS'), env('EMAIL_RECIPIENT_NAME'));

        return $this->markdown('emails.newCandidates')
                ->with([
                    'newCandidatesQtt' => $this->newCandidatesQtt
                ]);
    }
}
