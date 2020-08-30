## Project Description
SPA made with Laravel and React for User Profile Managment
Front End - React version 16.13.1
Back End - Laravel Framework 7.25.0
Database - MySql

## Installation

## Clone the git Repository
git colne https://github.com/Muthunayake/laravel-react


## Installing all Composer & NPM dependencies.
composer update && npm install


## Config Environment.
Copy .env.example to .env


## Generate app key
php artisan key:generate


## Config Database
set database name , username , password to .env


## Run database migration
php artisan migrate:fresh


## Create Fake Users
php artisan db:seed


## Compiling Assets
npm run dev


## Boot up a server
php artisan serve
