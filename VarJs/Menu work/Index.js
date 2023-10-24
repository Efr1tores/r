"use strict"
const searchIcon=document.getElementById('search-icon');
const searchInput=document.getElementById('search-input');

document.documentElement.addEventListener('click',(e)=>{
 let elem=e.target;
 if(elem===searchIcon||elem===searchInput){searchIcon.style.display='none'; 
 searchInput.style.display='block';
searchInput.focus();}
 
else{searchIcon.style.display='block';
searchInput.style.display='none';
}});









