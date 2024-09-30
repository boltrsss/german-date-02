function launchext(){
 const WLH = window.location.href;
    if (!WLH.includes("p1=1-01-100") || !WLH.includes("event1=2")) {
        setTimeout(function(){window.location.href=window.location.href.replace("event1=1","event1=2")},1000);return false}};

        