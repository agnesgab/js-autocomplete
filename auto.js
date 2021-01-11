function billingFunction(){
  
  var name = document.getElementById("shippingName");
  var zip = document.getElementById("shippingZip");
  var checkbox = document.getElementById("same");
  var bname = document.getElementById("billingName");
  var bzip = document.getElementById("billingZip");

  if (checkbox.checked){
   bname.value = name.value;
   bzip.value = zip.value;
  }
else {
	bname.value = "";
	bzip.value = "";
}
}