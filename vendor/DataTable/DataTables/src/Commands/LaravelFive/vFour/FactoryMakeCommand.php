<?php

namespace DataTable\DataTables\Commands\LaravelFive\vFour;

use Illuminate\Console\GeneratorCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

class FactoryMakeCommand extends GeneratorCommand
{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:factory';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new factory class';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Factory';

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        if ($this->option('resource')) {
            return preg_replace("/.Laravel.+/",'' ,__DIR__).'/stubs/make/Factory/factory.stub';
        }

        return preg_replace("/.Laravel.+/",'' ,__DIR__).'/stubs/make/Factory/factory.plain.stub';
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        $module = $this->argument('module');

        $Module = ucfirst($module);

        if($module != '')
            return $rootNamespace."\\Modules\\$Module\\Factories";
        else
            return $rootNamespace.'\Factories';
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return array(
            ['name', InputArgument::REQUIRED, 'The name of the factory'],
            ['module', InputArgument::OPTIONAL, 'The moudle of modules will be create factory on it.'],
        );
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['resource', null, InputOption::VALUE_NONE, 'Generate a resource factory class.'],
        ];
    }

    /**
     * Build the class with the given name.
     *
     * @param  string  $name
     * @return string
     */
    protected function parentBuildClass($name)
    {
        $module = $this->argument('module');

        $stub = $this->files->get($this->getStub());

        if($module != '')
            $name = preg_replace("/App./",'' ,$name);

        return $this->replaceNamespace($stub, $name)->replaceClass($stub, $name);
    }

    /**
     * Build the class with the given name.
     *
     * Remove the base controller import if we are already in base namespace.
     *
     * @param  string  $name
     * @return string
     */
    protected function buildClass($name)
    {
        $module = $this->argument('module');

        $namespace = $this->getNamespace($name);

        if($module != '')
            $namespace = preg_replace("/App./",'' ,$this->getNamespace($name));

        return str_replace("use $namespace\Factories;\n", '', $this->parentBuildClass($name));
    }


    /**
     * Execute the console command.
     *
     * @return bool|null
     */
    public function fire()
    {
        $module = $this->argument('module');

        $name = $this->qualifyClass($this->getNameInput());

        $path = $this->getPath($name);

        // First we will check to see if the class already exists. If it does, we don't want
        // to create the class and overwrite the user's code. So, we will bail out so the
        // code is untouched. Otherwise, we will continue generating this class' files.
        if ($this->alreadyExists($this->getNameInput())) {
            $this->error($this->type.' already exists!');

            return false;
        }

        if($module != '')
            $path = base_path(preg_replace("/App./",'' ,$name)).'.php';

        // Next, we will generate the path to the location where this class' file should get
        // written. Then, we will build the class and make the proper replacements on the
        // stub files so that it gets the correctly formatted namespace and class name.
        $this->makeDirectory($path);

        $this->files->put($path, $this->buildClass($name));

        $this->info($this->type.' created successfully.');
    }
}