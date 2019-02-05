<?php

namespace DataTable\DataTables\Exceptions;

use \RuntimeException;

class NotFoundDataTableException extends RuntimeException
{
    protected $message = 'This model not registered';
}