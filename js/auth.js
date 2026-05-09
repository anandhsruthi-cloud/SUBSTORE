const users=[{username:'admin',password:'admin123'}];

function login(){
const username=document.getElementById('username').value;
const password=document.getElementById('password').value;

const user=users.find(u=>u.username===username&&u.password===password);

if(user){
localStorage.setItem('loggedIn',true);
window.location.href='dashboard.html';
}else{
document.getElementById('msg').innerText='Invalid login';
}
}

function logout(){
localStorage.clear();
window.location.href='index.html';
}