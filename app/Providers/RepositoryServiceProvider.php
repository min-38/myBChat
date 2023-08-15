<?php

namespace App\Providers;

use App\Repositories\BaseRepository;
use App\Repositories\AuthRepository;

use App\Interfaces\EloquentInterface;
use App\Interfaces\AuthInterface;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        $this->app->bind(EloquentInterface::class, BaseRepository::class);
        $this->app->bind(AuthInterface::class, AuthRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}