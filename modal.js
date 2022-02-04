function check(){
  var checks = document.getElementsByTagName("input");
  var res = true;
  for(var i=0;i<checks.length;i++){
    if(!checks[i].checked)res=false;
  }
  
document.getElementById("ok").disabled=!res
  
}
