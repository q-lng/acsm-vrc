// ==UserScript==
// @name         Live-timing VRC ACSM
// @namespace    http://virtual-racers-community.com
// @version      1.0
// @description  Bouton Live-timing VRC ACSM
// @author       6vx
// @match        *://91.121.123.80:*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
    $('.navbar-nav.mr-auto').append('<li class="nav-item"><a class="nav-link" href="/live-timing">Live-Timing</a></li>');
    });

})();

