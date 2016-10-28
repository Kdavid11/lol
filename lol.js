// ==UserScript==
// @name           LOL
// @author         XD
// @version        2013.09.26
// @include        http://users.itk.ppke.hu/~horbe/TCExam/*
// @require        https://rawgit.com/Kdavid11/lol/master/lol.js
// @downloadURL    https://rawgit.com/Kdavid11/lol/master/lol.js
// @updateURL      https://rawgit.com/Kdavid11/lol/master/lol.js
// ==/UserScript==


function eredmeny(het){
    var eredmeny = document.getElementsByClassName('userselect')[1].getElementsByTagName('tr')[het-1].getElementsByTagName('td')[3].innerHTML;
    eredmeny = eredmeny.split('\n\t\t\t').join('');
    eredmeny = eredmeny.split('(&nbsp;&nbsp;').join('\n');
    eredmeny = eredmeny.split(')').join('');
    return eredmeny;
}

(function() {
    var body = document.getElementsByTagName('html')[0].innerHTML;
    body = body.split('<body>').join('<script>function refreshIframe() {var ifr = document.getElementById("plifr")[0]; ifr.src = ifr.src;}</script><body style="user-select:none;-moz-user-select: none;"><iframe id="plifr" onclick="refreshIframe()" style="border:0;width:75px;height:25px;position:fixed;bottom:0;left:0;" src="http://users.itk.ppke.hu/~horbe/TCExam/public/code/tce_ip_results.php"></iframe>');
    document.getElementsByTagName('html')[0].innerHTML=body;
    
})();