var visitor_name = prompt("What's your name?", "");
var curdate = new Date();
curdate.setMonth(curdate.getMonth() + 6);

var cookie_date = curdate.toUTCString();
document.write(visitor_name);
final_cookie =
  "my_cookie=" +
  encodeURIComponent(visitor_name) +
  ";expires_on = " +
  cookie_date;
document.cookie = final_cookie;
alert(final_cookie);
