# The Black Unicorn :unicorn: :black_heart:

[![GitHub CI](https://github.com/iamtheblackunicorn/iamtheblackunicorn.github.io/actions/workflows/dart.yml/badge.svg)](https://github.com/iamtheblackunicorn/iamtheblackunicorn.github.io/actions)

*The Black Unicorn's home!* :unicorn:

## About :books:

This website is my personal website. On it, you can find information about me and a complete portfolio of all my projects.

## Public APIs

You can use these APIs in your apps free of charge.

## Unicorn Launcher

This app contains two APIs:

The wallpaper API:

- URL
```text
https://blckunicorn.art/assets/unicornlauncher/api/wallpapers.json
```

- Fields:
```dart
// Type: Map<String, dynamic>
// Key: Wallpaper index
// Wallpaper URL: value
```

The famous people quote API:

- URL:
```text
https://blckunicorn.art/assets/unicornlauncher/api/quotes.json
```

- Fields:
```dart
// Type: Map<String, dynamic>
// Key: The famous quoter
// Quote: value
```

## Black Unicorn Wallpapers

This API contains some beautiful wallpapers:

- URL:
```text
https://blckunicorn.art/assets/buwa/main/api/wallpapers.json
```

- Fields:
```dart
// Type: Map<String, dynamic>
// Key: wallpaper index
// Wallpaper URL: value[0]
// Wallpaper description: value[1]
```

## The Mansion

This API contains a JSON API built in Jekyll for blogs:

- URL:
```text
https://blckunicorn.art/content/api/
```

- Fields:
```dart
// Type: Map<String, dynamic>
// Key: Post title
// Post date: value[0]
// Post description: value[1]
// Post content: value[2]
// Post URL: value[3]
// Post cover image: value[4]
```

## Haute Couture

This API contains some information the most prominent fashion designers of our time:

- URL:
```text
https://blckunicorn.art/assets/hautecouture/api/designers.json
```

- Fields:
```dart
// Type: Map<String, dynamic>
// Key: designer name
// Cover image: value[0]
// Description: value[1]
// Brand website: value[2]
```

## NOTE :scroll:

- *The Black Unicorn :unicorn:* by Alexander Abraham :black_heart: a.k.a. *"The Black Unicorn" :unicorn:*
- Licensed under the MIT license.
