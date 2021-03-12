<?php

namespace App\Http\ViewComposers;

/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 12/31/2016
 * Time: 10:33 PM
 */
use Illuminate\Contracts\View\View;
use LaravelLocalization;

class GlobalComposer
{
    /**
     * @param View $view
     */
    public function compose(View $view)
    {
        $dir = LaravelLocalization::getCurrentLocaleDirection();
        $lang = LaravelLocalization::getCurrentLocale();
        $left = ($dir == 'ltr') ? 'left' : 'right';
        $right = ($dir == 'ltr') ? 'right' : 'left';
        $view->with('dir', $dir);
        $view->with('lang', $lang);
        $view->with('left', $left);
        $view->with('right', $right);
        //Css Libraries
        $CSS = ['select2' => '     <link rel="stylesheet" href="' . asset('admin/css/components/select-boxes.css') . '" type="text/css"/>
                               <link rel="stylesheet" href="' . asset('admin/css/components/select2-bootstrap.css') . '" type="text/css"/>',
            'select2-general' => '     <link rel="stylesheet" href="' . asset('general/css/components/select-boxes.css') . '" type="text/css"/>
                               <link rel="stylesheet" href="' . asset('general/css/components/select2-bootstrap.min.css') . '" type="text/css"/>',
            'datatable' => '   <link rel="stylesheet" href="' . asset("datatable/datatable-$dir.css") . '" type="text/css"/>',
            'bs-filestyle' => '<link rel="stylesheet" href="' . asset('admin/css/components/bs-filestyle.css') . '" type="text/css" />',
            'bs-editable' => ' <link rel="stylesheet" href="' . asset('admin/css/components/bs-editable.css') . '" type="text/css" />',
            'timepicker' => '  <link rel="stylesheet" href="' . asset('admin/css/components/timepicker.css') . '" type="text/css"/>',
            'like-comment' => '<link href="' . asset('vendor/laravelLikeComment/css/comment-' . $dir . '.min.css') . '" rel="stylesheet">
                               <link href="' . asset('vendor/laravelLikeComment/css/style-' . $dir . '.css') . '" rel="stylesheet">',
            'calendario' => '  <link rel="stylesheet" href="' . asset('css/calendar.css') . '" type="text/css" />',
            'cropper' => '<link rel="stylesheet" href="' . asset('admin/css/components/cropper.min.css') . '" type="text/css" />',
            'select-picker' => '<link rel="stylesheet" href="' . asset('admin/css/components/select-picker/bootstrap-select.css') . '" type="text/css" />',

        ];
        $view->with('CSS', $CSS);
        //JS Libraries
        $JS = ['select2' => '     <script type="text/javascript" src="' . asset('admin/js/components/select-boxes.js') . '"></script>
                              <script type="text/javascript" src="' . asset('admin/js/components/select2/i18n/' . $lang . '.js') . '"></script>',
            'datatable' => '   <script type="text/javascript" src="' . asset('datatable/datatable.js') . '"></script>',
            'bs-filestyle' => '<script type="text/javascript" src="' . asset('admin/js/components/file-input/fileinput.js') . '"></script>
                                        <script src="' . asset('admin/js/components/file-input/fa/theme.min.js') . '"></script>
                              <script type="text/javascript" src="' . asset('admin/js/components/file-input/locales/' . $lang . '.js') . '"></script>',
            'bs-editable' => '<script type="text/javascript" src="' . asset('admin/js/components/bs-editable.js') . '"></script>',
            'timepicker' => '<script type="text/javascript" src="' . asset('admin/js/components/timepicker.min.js') . '"></script>'
                . ($lang == 'ar' ? '<script type="text/javascript" src="' . asset('admin/js/components/momentjs/ar.js') . '"></script><script>moment.locale("' . $lang . '");</script>' : ''),
            'ckeditor' => '<script type="text/javascript" src="' . asset('ckeditor/ckeditor.js') . '"></script>
                              <script type="text/javascript" src="' . asset('ckeditor/adapters/jquery.js') . '"></script>',
            'gmap' => '<script type="text/javascript" src="http://maps.google.com/maps/api/js?libraries=places&language=' . $lang . '"></script>
                              <script type="text/javascript" src="' . asset('general/js/jquery.gmap.js') . '"></script>',
            'calendario' => '<script type="text/javascript" src="' . asset('js/jquery.calendario.js') . '"></script>' . ($lang == 'ar' ? '<script type="text/javascript" src="' . asset('js/components/calendario/ar.js') . '"></script>' : ''),
            'cropper' => '<script type="text/javascript" src="' . asset('admin/js/components/cropper.min.js') . '"></script>',
            'select-picker' => '<script type="text/javascript" src="' . asset('admin/js/components/select-picker/bootstrap-select.js') . '"></script>
                                <script type="text/javascript"src="'.asset('admin/js/components/select-picker/i18n/defaults-'.$lang.'.js').'"></script>',

        ];
        $view->with('JS', $JS);
    }
}
