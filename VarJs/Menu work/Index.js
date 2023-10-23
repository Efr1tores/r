"use strict"
const searchIcon=document.getElementById('search-icon');
const searchInput=document.getElementById('search-input');
searchIcon.addEventListener('click',(e)=>{e.target.style.display='none';
searchInput.style.display='block';
searchInput.focus();
});










