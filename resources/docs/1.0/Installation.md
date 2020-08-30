# Installation

---

-   [Clone the Project](#section-1)
-   [Install Dependencies](#section-2)
-   [Configuration Environment](#section-3)
-   [Configuration Database](#section-5)
-   [Database Migration](#section-6)
-   [Create Fake Users](#section-7)
-   [Compiling Assets](#section-8)
-   [Boot up a server](#section-9)

<a name="section-1"></a>

## Clone the git Repository

> {info} git colne https://github.com/Muthunayake/laravel-react

<a name="section-2"></a>

## Installing all Composer & NPM dependencies.

> {info} composer update && npm install

<a name="section-3"></a>

## Config Environment.

> {info} Copy .env.example to .env

<a name="section-4"></a>

## Generate app key

> {info} php artisan key:generate

<a name="section-5"></a>

## Config Database

> {info} set database name , username , password to .env

<a name="section-6"></a>

## Run database migration

> {info} php artisan migrate:fresh

<a name="section-7"></a>

## Create Fake Users

> {info} php artisan db:seed

<a name="section-8"></a>

## Compiling Assets

> {info} npm run dev

<a name="section-9"></a>

## Boot up a server

> {info} php artisan serve
