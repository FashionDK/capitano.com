window.CrazyRocket = {
    cdn: "https://cdn.crazyrocket.io/widget/",
    uploads: "https://cdn.crazyrocket.io/uploads/",
    api: "https://api.crazyrocket.io/api",
    language: "auto",
    version: 17
}


function loadScriptCrazyRocket(url, callback) {

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function addCrazyRocketScript() {
    if (window.isCrazyRocketLoaded) return;

    if (window.jQuery) {
      window.isCrazyRocketLoaded = true;
      var script = document.createElement('script');
      script.src = CrazyRocket.cdn + 'scripts/crazyrocket.min.js?v=' + CrazyRocket.version;
      script.onload = function () { CrazyRocket.init(); }
      document.body.appendChild(script);
    }
    else {
        window.addCrazyRocketScriptAttempt++;

        if (window.addCrazyRocketScriptAttempt == 3) {
            console.log("CrazyRocket - loading jQuery ");

            loadScriptCrazyRocket('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function () {
            
                addCrazyRocketScript();
            });
        }

        if (window.addCrazyRocketScriptAttempt < 3) {
            console.log("CrazyRocket - waiting for jQuery - attempt " + window.addCrazyRocketScriptAttempt)
            window.setTimeout("addCrazyRocketScript();", 300);
        }
      
    }
}

window.addCrazyRocketScriptAttempt = 0;

addCrazyRocketScript();