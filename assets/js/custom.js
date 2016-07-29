var nav = false;
$('#container').click(function(){
  // console.log('clicked');
  if(nav === true){
    closeNav();
  }
});

function openNav(){
  document.getElementById("leftside-nav-bar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  nav = true;
}

function closeNav() {
    document.getElementById("leftside-nav-bar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    nav = false;
}

function changeTitleHeader(title){
    $('#top-header').html(" &nbsp;"+title);
}
