// ==UserScript==
// @name (╯°□°）╯︵ ┻━┻
// @namespace omgmog.github.com
// @description Website flip  (╯°□°）╯︵ ┻━┻
// @include *
// @match http://*/*
// ==/UserScript==

var html = document.getElementsByTagName("html")[0]; 
	html.setAttribute("style"," \
		-moz-transition: all 3s; \
		-moz-transform: rotate(180deg); \
		-o-transition: all 1s; \
		-o-transform: rotate(180deg); \
		-webkit-transition: all 1s; \
		-webkit-transform: rotate(180deg); \
		-ms-transition: all 1s; \
		-ms-transform: rotate(180deg); \
		transition: all 1s; \
		transform: rotate(180deg); \
		");