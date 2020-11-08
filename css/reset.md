# Reset

normalize 같은 css 리셋을 쓰기도 하고 임의로 선언하기도 한다.<br>
필요한 부분은 추가하여 사용한다.

```css
@charset "UTF-8";
html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,form,fieldset,p,input,textarea,select,button,th,td,blockquote {margin:0;padding:0}
body {-webkit-text-size-adjust:none}
ul,ol,li {list-style:none}
a {text-decoration:none}
img {max-width:100%;border:none;vertical-align:top}
button, input[type=button], input[type=submit] {-webkit-appearance:none;-webkit-border-radius:none}

.blind {visibility:hidden; overflow:hidden; position:absolute; top:0; left:0; width:1px; height:1px; font-size:0; line-height:0}
```