//This is done to make the following JavaScript code compatible to XHTML. <![CDATA[
function CookieSet(cName, cValue, cPath, cExpires) {
  let cvalue = encodeURIComponent(cValue);
  if (cExpires == "") {
    var cdate = new Date();
    cdate.setMonth(cdate.getMonth() + 9);
    cExpires = cdate.toUTCString();
  }
  if (cPath != "") {
    cPath = ";Path=" + cPath;
  }
  document.cookie = cName + "=" + cValue + "expires=" + cExpires + cPath;
}
CookieSet("Name", "George ", "", "");
alert(document.cookie);
//]]>
