# # DOCTYPE

HTML5 기본 DOCTYPE을 사용한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document Title</title>
</head>
```

SEO와 Viewport를 위한 소스도 추가할 수 있다.

```html
<head>
    <meta charset="UTF-8">
    <title>Document Title</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="apple-mobile-web-app-title" content="">
    <meta name="keywords" content="키워드">
    <meta name="description" content="설명">
    <meta name="author" content="저자">
    <meta property="og:title" content="페이스북 공유 타이틀">
    <meta property="og:url" content="페이스북 공유 URL">
    <meta property="og:image" content="페이스북 공유 이미지">
    <meta property="og:description" content="페이스북 공유 설명">
    <meta name="twitter:card" content="트위터 카드 종류">
    <meta name="twitter:title" content="트위터 카드 제목">
    <meta name="twitter:url" content="트위터 카드 URL">
    <meta name="twitter:image" content="트위터 카드 이미지">
    <meta name="twitter:description" content="트위터 카드 설명">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
    <meta name="format-detection" content="no">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="icon.png">
</head>
```