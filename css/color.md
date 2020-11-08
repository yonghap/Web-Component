# # Color

컬러는 HEX코드 3자리나 6자리로 표시한다.<br>
요소에 Modifier를 추가할 수도 있고 컬러 전용 클래스를 추가할 수도 있다. 

```html
<p class="description">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis?
</p>
<p class="description description--notice">
    Lorem ipsum dolor sit amet.
</p>
<p class="description color--notice">
    Lorem ipsum dolor sit amet, consectetur.
</p>
```

```css
.description {color:#333}
.description--notice {color:#DE3535}
.color--notice {color:#DE3535}
```