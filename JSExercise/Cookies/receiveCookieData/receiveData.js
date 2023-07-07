//This is done to make the following JavaScript code compatible to XHTML. <![CDATA[
var visitor_name = prompt("What's your name?", "");
var expr_date = new Date("December 30, 2012");
var cookie_date = expr_date.toUTCString();

final_cookie =
  "Name =" + encodeURIComponent(visitor_name) + ";expires_on = " + cookie_date;
document.cookie = final_cookie;
alert(final_cookie);
document.write(visitor_name);
//]]>
