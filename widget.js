(function (w,d,s,o,f,js,fjs) {
    w['MyWidget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    let queryString = document.currentScript.src;
    let params = new URLSearchParams(document.currentScript.src.split('?')[1])
    js.id = o; js.src = f+"?shop="+params.get("shop"); js.async = 1; fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'because_intelligence', 'https://because-scripts.s3.us-east-2.amazonaws.com/prod/shim/app.js'));
