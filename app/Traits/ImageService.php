<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Image;

trait ImageService
{
    public function saveImage($base64Image)
    {
        try {
            $imageName = time() . ".jpg";
            $content = Image::make(file_get_contents($base64Image))->response('jpg')->content();
            Storage::disk('public')->put($imageName, $content);
        } catch (\Exception $e) {
            return null;
        }
        return url('images', $imageName);
    }
}
