
function toggleClass(){
  let menu =document.querySelector('.mainmenu');
  menu.classList.toggle('toggleCls');
}
function storedata(){
  sessionStorage.setItem('name',document.getElementById('name').value);
  sessionStorage.setItem('location',document.getElementById('location').value);
  sessionStorage.setItem('mname',document.getElementById('mname').value);
  sessionStorage.setItem('honor',document.getElementById('honor').value);
  sessionStorage.setItem('fname',document.getElementById('fname').value);
  sessionStorage.setItem('lname',document.getElementById('lname').value);
}


