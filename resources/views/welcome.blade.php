@extends('layouts.app')

@push('meta')
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <base href="{{url('/')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta content="{{url(LaravelLocalization::getCurrentLocale().'/api')}}" name="api-base-url">
@endpush

@push('favicon')
    {{--<link rel="shortcut icon" href="/img/favicon.ico?v=2" type="image/x-icon"/>--}}
@endpush

@push('css')
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
@endpush

@push('header_js')
    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    {{--<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>--}}
    {{--<script>--}}
    {{--WebFont.load({--}}
    {{--google: {--}}
    {{--families: ['Material Icons','Roboto']--}}
    {{--}--}}
    {{--});--}}
    {{--</script>--}}
    {{--<!-- Vuetified Initial State Provider -->--}}
    {{--<script>--}}
    {{--window.App = {!! json_encode(array_merge(--}}
    {{--Vuetified::scriptVariables(), [--}}
    {{--// Add Key and Value Here You Want to Added to Initial State--}}
    {{--]--}}
    {{--))!!}--}}
    {{--</script>--}}
@endpush

@push('title')
    <title>{{ config('app.name', 'Laravel') }}</title>
@endpush

@section('content')
    <div id="app" v-cloak>
        <div id="v-cloak--block">
            <div class="loader">
                <!-- Preloader Before Vue is Loaded -->
                <div class="loader-inner">
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                </div>
            </div>
        </div>
        <index></index>
    </div>
@endsection

@push('footer_js')
    <!-- Load Socket If Echo is ON -->
    {{--@if(config('echo.realtime'))--}}
    {{--<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>--}}
    {{--@endif--}}

    {{--@if(config('app.env') !== 'production')--}}
    {{--<!-- Local ENV Assets -->--}}
    {{--<script src="{{mix('/js/app.js')}}"></script>--}}
    {{--@else--}}
    <!-- Production ENV Assets -->
    <script src="{{mix('/js/manifest.js')}}"></script>
    <script src="{{mix('/js/vendor.js')}}"></script>
    <script src="{{mix('/js/app.js')}}"></script>
    {{--@endif--}}

    {{--<link--}}
    {{--rel="prefetch"--}}
    {{--href="{{ mix('/js/home-component.js') }}"--}}
    {{--as="script"--}}
    {{-->--}}

@endpush
