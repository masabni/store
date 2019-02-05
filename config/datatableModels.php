<?php

/**
 *  you must add here route and model and view foreach
 *
 *  model             : you must add model for datatable
 *  dataTableFunc     : default funcName is get_datatable // add name for maker method ,this name will be used in maker class or in factory class as get_func / build_func / store_func / update_fund / destroy_func
 *  middlewares       : you can make auth by pass string or array to this property
 *  middlewaresOption : this option allow you to only make auth on on action or except action from auth by pass array
 *  request           : this is must be Form Request Class
 *  stopOperation     : for stop normal oper and add custom oper ['store','update','destroy']
 *  factory           : the default factory is  modelFactory unless you add you own factory property
 *
 */

use App\User;

return [

    'users' => [
        'model' => User::class,
        'factory' => \App\Factories\UsersFactory::class,
    ],
    'generals' => [
        'model' => \App\Models\CmpGeneral::class,
        'factory' => \App\Factories\GeneralFactory::class,
    ],
    'categories' => [
        'model' => \App\Models\Category::class,
        'factory' => \App\Factories\CategoryFactory::class,
    ],
    'client-say' => [
        'model' => \App\Models\ClientSay::class,
        'factory' => \App\Factories\ClientSayFactory::class,
    ],
    'counters' => [
        'model' => \App\Models\CmpCounter::class,
        'factory' => \App\Factories\CounterFactory::class,
    ],
    'contact-mails' => [
        'model' => \App\Models\ContactMail::class,
        'factory' => \App\Factories\ContactMailFactory::class,
    ],
    'products' => [
        'model' => \App\Models\Product::class,
        'factory' => \App\Factories\ProductFactory::class,
        'stopOperation'=>['store','update']
    ],
    'questions' => [
        'model' => \App\Models\Question::class,
        'factory' => \App\Factories\QuestionFactory::class,
    ],
    'seos' => [
        'model' => \App\Models\Seo::class,
        'factory' => \App\Factories\SeoFactory::class,
    ],
    'styles' => [
        'model' => \App\Models\Style::class,
        'factory' => \App\Factories\StyleFactory::class,
    ],
    'achievments' => [
        'model' => \App\Models\Achievment::class,
        'factory' => \App\Factories\AchievmentFactory::class,
    ],
    'pages' => [
        'model' => \App\Models\Page::class,
        'factory' => \App\Factories\PageFactory::class,
        'stopOperation' => ['store', 'update','destroy']
    ],
    'gallery' => [
        'model' => \App\Models\Gallery::class,
        'factory' => \App\Factories\GalleryFactory::class,
    ],
    'blogs' => [
        'model' => \App\Models\Blog::class,
        'factory' => \App\Factories\BlogFactory::class,
        'stopOperation'=>['store','update']
    ],
    'rates' => [
        'model' => \App\Models\Rating::class,
        'factory' => \App\Factories\RateFactory::class,
    ],
    'subscribes' => [
        'model' => \App\Models\Subscribe::class,
        'factory' => \App\Factories\SubscribeFactory::class,
    ],
    'attribute-page' => [
        'model' => \App\Models\Attribute_page::class,
        'factory' => \App\Factories\AttributePageFactory::class,
    ],
    'attributes' => [
        'model' => \App\Models\Attribute::class,
        'factory' => \App\Factories\AttributeFactory::class,
    ],
    'opening-hours' => [
        'model' => \App\Models\WorkSchedule::class,
        'factory' => \App\Factories\WorkScheduleFactory::class,
    ],

];
