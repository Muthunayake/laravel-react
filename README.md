## Project Description
SPA made with Laravel and React for User Profile Managment
Front End - React version 16.13.1
Back End - Laravel Framework 7.25.0
Database - MySql

## Installation

## Clone the git Repository
git clone https://github.com/Muthunayake/laravel-react

## Change Directory
cd laravel-react

## Installing all Composer & NPM dependencies.
composer update && npm install


## Config Environment.
cp .env.example .env


## Generate app key
php artisan key:generate


## Config Database
set database name , username , password to .env


## Run database migration
php artisan migrate:fresh

## Create Image Path
php artisan storage:link

## Create Fake Users
php artisan db:seed


## Compiling Assets
npm run dev


## Boot up a server
php artisan serve
