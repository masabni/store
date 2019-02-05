<!-- This Component Support Upload Image or Video and Cropping Image-->
<?php $name = isset($name) ? $name : $id?>
<div class="{{$contClass}} image-upload-cont">
    @if($label!==false){!! Form::label($id,' ') !!}@endif
    <span class=" show-error-msg " id="error-{{$id}}-name"></span>
    {!! Form::label($id.'-name',$errors->has($name)?$errors->first($name):' ',['id'=>$id.'-name-error','class'=>$class.' error f'.$right]) !!}
        <input data-msg="@lang('validation.custom.select_image')" id="{{$id}}-name" name="{{$name}}" value="{{$fileName}}" type="text"  class="image-upload-name {{($required==true)?' required':''}} hide">
        <div class="clear"></div>
        <input {!! $attr !!} data-url="{{$fileUrl}}" data-type="{{$type}}" id="{{$id}}" name="image" data-title="{{$fileName}}" type="file"  class="{{strpos($attr,'data-width')!==false?'hide':'image-upload'}}" @if($type=='image') accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" @endif>
    @if(strpos($attr,'data-width')!==false)
        <button type="button" class="choose-action btn btn-outline-purple f{{$left}}" style=" z-index: 100;"><i
                    class="zmdi zmdi-upload"></i> @lang('app.pick_image')</button>
        <button type="button" class="crop-action btn btn-outline-info f{{$left}}" style="z-index: 100;"><i
                    class="zmdi zmdi-crop"></i> @lang('app.crop')</button>
        <img {!! $attr !!} class="image-crop-upload" src="{{$fileUrl}}" style="width: 100%;margin-top: 5px;">
    @endif
</div>

