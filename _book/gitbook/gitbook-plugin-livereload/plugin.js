(function() {
  var newEl = document.createElement('script'),
      firstScriptTag = document.getElementsByTagName('script')[0];

  if (firstScriptTag) {
    newEl.async = 1;
    newEl.src = '//' + window.location.hostname + ':35729/livereload.js';
    firstScriptTag.parentNode.insertBefore(newEl, firstScriptTag);
  }

})();


//畅言
function globalchanged(e){
  var sid=window.location.href;

  if(document.querySelector('#SOHUCS'))
{
    $("#SOHUCS").remove();
}

    var odiv = document.createElement("div");
    odiv.setAttribute("id", "SOHUCS");
    odiv.setAttribute("sid", sid);
    var mdCntWrapper = document.querySelector(".page-wrapper");
    mdCntWrapper.appendChild(odiv);

    window.changyan=undefined;
    window.cyan=undefined;
    $.getScript("https://changyan.sohu.com/upload/changyan.js", function(){window.changyan.api.config({appid: "cyueneGxW",conf: "prod_fe848d31f5e8ed699cceb2fa75b73d8f"});})
}
