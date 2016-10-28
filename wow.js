function inIframe(){
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

(function() {
    if(inIframe()){
        var kezdo = new Date(2016, 9-1, 16).getTime();
        var most = Date.now();
        var k = most-kezdo;
        var nap = k/1000/60/60/24;
        var o = nap/7;
        var het = Math.floor(o)+1;
        var eredmeny="";
        //var het=7;
        if(document.getElementsByClassName('userselect')[1].getElementsByTagName('tr')[het-1] == null){
            eredmeny="I";
        }
        else if(document.getElementsByClassName('userselect')[1].getElementsByTagName('tr')[het-1].getElementsByTagName('td')[3] == null){
            eredmeny="-";
        }
        else{
            eredmeny = document.getElementsByClassName('userselect')[1].getElementsByTagName('tr')[het-1].getElementsByTagName('td')[3].innerHTML;
            eredmeny = eredmeny.split('\n\t\t\t').join('');
            eredmeny=eredmeny.substr(0,eredmeny.indexOf("/"));
        }
        //document.getElementsByClassName('userselect')[1].getElementsByTagName('tr')[het-1] == null ? eredmeny="I" : (document.getElementsByClassName('userselect')[1].getElementsByTagName('tr')[het-1].getElementsByTagName('td')[3] == null ? eredmeny="-" : eredmeny = document.getElementsByClassName('userselect')[1].getElementsByTagName('tr')[het-1].getElementsByTagName('td')[3].innerHTML.split('\n\t\t\t').join('').substr(0,eredmeny.indexOf("/")));
        document.getElementsByTagName('html')[0].innerHTML="<span style='-moz-user-select: none;margin:0;padding:0;color:#ababab;font-size:9px;position:fixed;bottom:0;left:0;'>" + eredmeny + "</span>";
    }
})();