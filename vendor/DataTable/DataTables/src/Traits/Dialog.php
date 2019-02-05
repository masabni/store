<?php

namespace DataTable\DataTables\Traits;

trait Dialog
{
    protected $dialogCaption = "";

    protected $dialogBody = "";

    protected $dialogFooter = "";

    protected function renderDialog($id)
    {
        $dialogWidth = !empty($this->optionDatatableConfig['dialogWidth'])
            ? "min-width : {$this->optionDatatableConfig['dialogWidth']};"
            : '';

        $form_class = config('datatable.dialog_form_class');

        $form_attr = config('datatable.dialog_form_attr');

        if($this->optionDatatableConfig['withTab'])
            $continer = view('datatable::_tab',['id' => $this->id ,'tabs' => $this->tabs])->render();
        else
            $continer = $this->dialogBody;

        $dialog =  view('datatable::_modal',[
            'id'                => $id,
            'table'             => $this->model,
            'dialogWidth'       => $dialogWidth,
            'form_class'        => $form_class,
            'form_attr'         => $form_attr,
            'continer'          => $continer,
            'dialogFooter'      => $this->dialogFooter,
            'withTabs'          => $this->optionDatatableConfig['withTab'],
            'enableGridSystem'  => $this->optionDatatableConfig['gridSystem'],
            'gridSystem'        => $this->gridSystem
        ])->render();

        return $dialog;
    }

    function checkReturnValue($html ,$isCustom ,$stringCont = 'dialogBody')
    {
        if($isCustom)
        {
            return $html;
        }
        else
        {
            if($this->optionDatatableConfig['withTab'])
            {
                $this->partOfContent .= $html;

                $this->tab['content'] = $this->partOfContent;
            }
            else
                $this->$stringCont .= $html;
        }
    }

    protected function _HiddenInput($id, $name, $value, $type ,$class ,$attr ,$custom = false)
    {
        $replaceId = preg_match('/\b(?<![\S])(replace-id)(?![\S])\b/',$class);

        $html = view('datatable::component.input_hidden' ,[
            'id'    => preg_replace('/[\._]/','-' ,$id),
            'data'  => $id,
            'name'  => $name,
            'type'  => $type,
            'value' => $value,
            'class' => $class,
            'attr'  => $attr,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _addComponent($component ,$custom = false)
    {
        $html = $component;

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _Input($title, $id, $name, $value, $type, $class, $attr , $custom = false)
    {
        $star = preg_match('/\b(?<![\S])(req)(?![\S])\b/',$class);

        $html = view('datatable::component.input' ,[
            'id'                => preg_replace('/[\._]/','-' ,$id),
            'data'              => $id,
            'title'             => $title,
            'name'              => $name,
            'value'             => $value,
            'type'              => $type,
            'attr'              => $attr,
            'class'             => $class,
            'star'              => $star,
            'gridSystemResult'  => $this->gridSystemResult,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _InputPassword($title, $id, $name, $type , $class, $attr ,$custom = false)
    {
        $star = preg_match('/\b(?<![\S])(req)(?![\S])\b/',$class);

        $refresh = preg_match('/\b(?<![\S])(refresh)(?![\S])\b/',$class);

        $html = view('datatable::component.input_password' ,[
            'id'                => preg_replace('/[\._]/','-' ,$id),
            'data'              => $id,
            'title'             => $title,
            'name'              => $name,
            'type'              => $type,
            'attr'              => $attr,
            'class'             => $class,
            'star'              => $star,
            'refresh'           => $refresh,
            'gridSystemResult'  => $this->gridSystemResult,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _InputGroup($title, $id, $name, $type , $class, $groupIcon, $groupClass, $attr ,$custom = false)
    {
        $star = preg_match('/\b(?<![\S])(req)(?![\S])\b/',$class);

        $html = view('datatable::component.input_group' ,[
            'id'                => preg_replace('/[\._]/','-' ,$id),
            'data'              => $id,
            'title'             => $title,
            'name'              => $name,
            'type'              => $type,
            'attr'              => $attr,
            'class'             => $class,
            'star'              => $star,
            'groupClass'        => $groupClass,
            'groupIcon'         => $groupIcon,
            'gridSystemResult'  => $this->gridSystemResult,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _TextArea($title, $id, $name, $class, $attr ,$custom = false)
    {
        $star = preg_match('/\b(?<![\S])(req)(?![\S])\b/',$class);

        $html = view('datatable::component.textArea' ,[
            'id'                => preg_replace('/[\._]/','-' ,$id),
            'data'              => $id,
            'title'             => $title,
            'name'              => $name,
            'attr'              => $attr,
            'class'             => $class,
            'star'              => $star,
            'gridSystemResult'  => $this->gridSystemResult,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _InputNumber($title, $id, $name, $type, $class, $attr ,$custom = false)
    {
        $star = preg_match('/\b(?<![\S])(req)(?![\S])\b/',$class);

        $html = view('datatable::component.input_number' ,[
            'id'                => preg_replace('/[\._]/','-' ,$id),
            'data'              => $id,
            'title'             => $title,
            'name'              => $name,
            'type'              => $type,
            'attr'              => $attr,
            'class'             => $class,
            'star'              => $star,
            'gridSystemResult'  => $this->gridSystemResult,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _addCont($id ,$html ,$class ,$attr ,$custom = false)
    {
        $html = "<div id='$id' class='$class' $attr>$html</div>";

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _startCont($id ,$class ,$attr ,$custom = false)
    {
        $id   = empty($id) ? $id : '';
        $attr = empty($attr) ? $attr : '';

        $html = "<div $id class='$class' $attr>";

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _endCont($custom = false)
    {
        $html = '</div>';

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _Button($text ,$id , $type, $class, $attr ,$custom = false ,$stringCont = 'body')
    {
        $stringCont = 'dialog'.ucfirst($stringCont);

        $html = view('datatable::component.button' ,[
            'id'         => $id,
            'type'       => $type,
            'attr'       => $attr,
            'class'      => $class,
            'text'       => $text,
            'stringCont' => $stringCont == 'dialogBody',
        ])->render();

        return $this->checkReturnValue($html ,$custom ,$stringCont);
    }

    protected function _Autocomplete($url ,$title ,$id ,$name , $colLabel = '', $class = '', $attr = '' ,$target = '' ,$custom = false)
    {
        //$colLabel = preg_replace('/.+\./','',$colLabel);

        $star = preg_match('/\b(?<![\S])(req)(?![\S])\b/',$class);

        //$target = $custom == true ? $target : "#{$this->id}-modal";

        $html = view('datatable::component.autocomplete' ,[
            'id'                => preg_replace('/[\._]/','-' ,$id),
            'data'              => $id,
            'title'             => $title,
            'name'              => $name,
            'attr'              => $attr,
            'class'             => $class,
            'star'              => $star,
            'url'               => $url,
            'colLabel'          => $colLabel,
            'target'            => $target,
            'gridSystemResult'  => $this->gridSystemResult,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }

    protected function _Select($obj, $title, $id, $name, $colLabel, $class, $attr ,$custom = false)
    {
        $star = preg_match('/\b(?<![\S])(req)(?![\S])\b/',$class);

        $html = view('datatable::component.select' ,[
            'id'                => preg_replace('/[\._]/','-' ,$id),
            'data'              => $id,
            'title'             => $title,
            'name'              => $name,
            'attr'              => $attr,
            'class'             => $class,
            'star'              => $star,
            'colLabel'          => $colLabel,
            'options'           => $obj,
            'gridSystemResult'  => $this->gridSystemResult,
        ])->render();

        return $this->checkReturnValue($html ,$custom);
    }
}