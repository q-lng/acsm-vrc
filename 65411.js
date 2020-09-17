// ==UserScript==
// @name        Live-timing VRC ACSM
// @description Bouton Live-timing VRC ACSM
// @version 1.0
// @match       *://91.121.123.80:*/*
// @grant       GM_addStyle
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

$(document).ready(function(){
$('.navbar-nav.mr-auto').append('<li class="nav-item"><a class="nav-link" href="/live-timing">Live-Timing</a></li>');
});
