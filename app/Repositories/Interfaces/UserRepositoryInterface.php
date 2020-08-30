<?php

namespace App\Repositories\Interfaces;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

interface UserRepositoryInterface
{
    public function getUsers(): Collection;
    public function store(array $data): bool;
    public function update(array $data, User $user): bool;
    public function delete(User $user): bool;
}
