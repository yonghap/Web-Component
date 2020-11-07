# Theme

테마 구조로 사용하기 위해 body나 wrap에 테마 클래스를 추가한다.
테마를 사용하지 않을 경우 wrap에 기본 스타일을 정의한다.

## 기본 스타일 정의

```html
<body class="theme"></body>
<!--OR-->
<div id="wrap" class="wrap theme"></div>
```

```css
.theme {
    font-family:'Noto Sans KR','Roboto','맑은 고딕','AppleGothic','serif';
    font-size:16px;
    color:#111;
    line-height:1.43;
}
```

## 테마의 변형

다크 모드나 컬러 모드를 사용할 경우 해당 클래스를 추가한다.

```html
<body class="theme theme--dark"></body>
<!--OR-->
<div id="wrap" class="wrap theme--dark"></div>
```

```css
.theme--dark {
    background-color:#444;
    color:#eee;
}
```