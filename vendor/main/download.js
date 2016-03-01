$(document).ready(function(){

	displayqr();

	 });

function displayqr(secret,username)
{
   var qstring =  $('#downloadapk').attr("href");
  $('#qrcode-downloadapk').qrcode({render:"canvas",width: 128,height: 128,text: qstring});
}