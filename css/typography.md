# # Typorgraphy

타이포 크기의 정의는 프로젝트에 따라 다르게 정합니다.<br>
기본 대타이틀과 소타이틀로 나누고 기타 타이틀은 임의로 정의합니다. <br>
px, rem, em 단위는 임의로 정합니다.

```html
<header>
    <h1 class="h1">Title</h1>
</header>
<section class="section">
    <h2 class="h2">Sub TItle</h2>
    <article class="article">
        <h3 class="h3">Article Title</h3>
    </article>
    <article class="article">
        <h3 class="h3">Article Title</h3>
    </article>
    <article class="article">
        <h3 class="h3">Article Title</h3>
    </article>
</section>
```

```css
.h1 {
    font-size:32px;line-height:1.6
}
.h2 {
    font-size:28px;line-height:1.5
}
.h3 {
    font-size:24px
}
```