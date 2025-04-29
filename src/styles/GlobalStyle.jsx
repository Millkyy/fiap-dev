import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

//Importando fontes
//Gotham Medium
@font-face {
	font-family: 'Gotham';
    src: url('/src/assets/fonts/gotham/GothamHTF-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
}

//Gotham Bold
@font-face {
	font-family: 'Gotham';
    src: url('/src/assets/fonts/gotham/GothamHTF-Bold.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
}

//Gotham Book
@font-face {
    font-family: 'Gotham';
    src: url('/src/assets/fonts/gotham/GothamHTF-Book.otf') format('opentype');
    font-weight: 200;
    font-style: normal;
}

//Roboto Regular
@font-face {
    font-family: 'Roboto';
    src: url('/src/assets/fonts/roboto/roboto-regular.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

//Reset CSS
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}  
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  font-family: 'Gotham', sans-serif; /* <-- isso que faltava */
  font-weight: 400; /* ou 500, dependendo do que você quer como padrão */
  line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*, *::before, *::after {
    box-sizing: border-box;
  }
`;