<?php

namespace DataTable\DataTables;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use LaravelLocalization;
use Route;

class DataTableServiceProvider extends ServiceProvider
{

    /**
     * Vendor name.
     *
     * @var string
     */
    protected $vendor   = 'aut';

    /**
     * Package name.
     *
     * @var string
     */
    protected $package  = 'datatable';

    protected $namespace = 'DataTable\DataTables\Http\Controllers';

    protected $middleware;

    protected $commands = [];

    public function __construct(\Illuminate\Foundation\Application $app)
    {
        parent::__construct($app);

        $this->registerConfig();

        $this->commands = $this->registerCommandByVersion($this->commands);
    }

    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot(Router $router)
    {
        $routeMiddleware = config('datatable.routeMiddleware');

        $this->middleware =  $routeMiddleware;

        $this->datatableBlade();

        $this->mapDatatableRoutes($router);

        $this->loadTranslations();

        $this->publishDatatable();
    }

    protected function publishDatatable()
    {
        // publish config
        $this->publishes([
            __DIR__.'/Config/datatable.php' => config_path('datatable.php')
        ], 'config');

        // publish assets
        $this->publishes([
            __DIR__.'/Assets' => public_path('vendor/datatable'),
        ], 'public');
    }

    /**
     * set route datatable
     *
     * @param $router
     */
    protected function mapDatatableRoutes($router)
    {
        $router->group([
            'prefix' => LaravelLocalization::setLocale() . '/datatable',
            'namespace' => $this->namespace,
            'middleware' => $this->middleware
        ], function () {
            // for dev
            Route::get('{model}/query/table', 'DataTableController@index');

            Route::post('{model}/get/table', 'DataTableController@index');

            Route::get('{model}/table/password/generator', 'DataTableController@generator');

            Route::resource('{model}/table', 'DataTableController');
        });
    }

    /**
     * custom blade datatable
     */
    protected function datatableBlade()
    {
        \Blade::directive('datatable', function ($param) {

            $param = substr($param, 1, -1);

            $param = explode(',',$param);

            foreach ($param as $index => $item)
            {
                $param[$index] = substr($item, 1, -1);
            }

            $model = isset($param[0]) ? $param[0] : '';

            $data_param = isset($param[1]) ? $param[1] : '';

            $load = isset($param[2]) ? $param[2] : 'true';

            $cont = "<div class='datatable' role='datatable' data-table='$model' data-load='<?=$load?>' data-url='<?= localizeURL(\"datatable/$model/table/create{$data_param}\")?>'></div>";

            return $cont;
        });
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerDataTableBuilder();

        $this->commands($this->commands);

        $this->app->alias('DataTable', 'DataTable\DataTables\DataTableBuilder');

        $this->registerHelper();

        $this->registerViews();

        $this->registerController();
    }

    protected function registerHelper()
    {
        // add helper method to my project
        require_once('Helper/helpers.php');
    }

    protected function registerViews()
    {
        //register our view
        $this->loadViewsFrom(__DIR__.'/Resources/Views', 'datatable');
    }

    protected function registerController()
    {
        // register our controller
        $this->app->make('DataTable\DataTables\Http\Controllers\DataTableController');
    }

    protected function registerConfig()
    {
        //register our config
        if(!file_exists(base_path('config/datatable.php')))
            $this->mergeConfigFrom(__DIR__.'/Config/datatable.php' ,'datatable');
    }

    protected function loadTranslations()
    {
        $this->loadTranslationsFrom(__DIR__.'/Resources/Lang', 'datatable');
    }

    protected function registerDataTableBuilder()
    {
        $this->app->singleton('DataTable', function ($app) {

            return new DataTableBuilder();
        });
    }

    protected function registerCommandByVersion($commands)
    {
        $version = config('datatable.version');
        if(!app()->runningInConsole())
        {
            \Artisan::call('' ,['--version']);
            preg_match('/\d\.\d/',\Artisan::output() ,$v);
            $version = $v[0];
        }

        switch ($version)
        {
            case '5.2': {
                return array_merge($commands ,[
                    \DataTable\DataTables\Commands\LaravelFive\vFour\MakeDataTableCommand::class,
                    \DataTable\DataTables\Commands\LaravelFive\vFour\FactoryMakeCommand::class
                ]);
            } break;

            case '5.4' : {
                return array_merge($commands ,[
                    \DataTable\DataTables\Commands\LaravelFive\vFour\MakeDataTableCommand::class,
                    \DataTable\DataTables\Commands\LaravelFive\vFour\FactoryMakeCommand::class
                ]);
            } break;

            default : {
                return $commands;
            }; break;
        }
    }

    public function provides()
    {
        return ['DataTable', 'Aut\DataTable\DataTableBuilder'];
    }
}