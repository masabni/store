@php
    extract($gridSystemResult);
@endphp

<div class='form-group {{ $global }}'>
    <label class='{{ $label }} control-label' for='{{ $name }}'>{{ $title }} @if($star) <span class='text-danger'>*</span> @endif</label>
    <div class='{{ $input }}'>
        <div id='{{$name}}_group' class='input-group {{ $groupClass }}'>
            <input id='{{ $id }}'
                   data-datavalue='{{ $data }}'
                   name='{{ $name }}'
                   type='{{ $type }}'
                   placeholder='{{ $title }}'
                   class='form-control {{ $class }}'
                   data-editable = 'true'
                   {{ $attr }}
            >
            <span class='input-group-addon'>
                <span class='{{ $groupIcon }}'></span>
            </span>
        </div>

        <div id='error_{{ $id }}'></div>
    </div>
</div>