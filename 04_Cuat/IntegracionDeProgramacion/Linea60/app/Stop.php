<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stop extends Model
{
    
    public function branch()
    {
        return $this->hasOne('App\Branch', 'id', 'id_branch');
    }


}
