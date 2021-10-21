<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <title>Laravel React</title>
</head>

<body>
    {{-- @if (Auth::check())
        <script>
            window.Laravel = {!! json_encode(['isAuthenticated' => true, 'user' => Auth::user()]) !!}
        </script>
    @else
        <script>
            window.Laravel = {!! json_encode(['isAuthenticated' => false]) !!}
        </script>
    @endif --}}
    <div id="fusengine"></div>

    {{-- <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script> --}}
    <script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>
