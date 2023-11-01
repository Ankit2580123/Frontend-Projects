const date=document.getElementById('date');
const day=document.getElementById('day');
const month=document.getElementById('month');
const year=document.getElementById('year');

const today=new Date();
const week=['Sunday','Monday','Tuesday', 'Wednesday', 'Thurssday', 'Friday', 'Saturtday'];
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July','August',
'September','October','November','December'];
date.innerText=today.getDate();
day.innerText=week[today.getDay()];
month.innerText=months[today.getMonth()];
year.innerText=today.getFullYear();