"use strict"
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

document.documentElement.addEventListener('click', (e) => {
    let elem = e.target;
    if (elem === searchIcon || elem === searchInput) {
        searchIcon.style.display = 'none';
        searchInput.style.display = 'block';
        searchInput.focus();
    }

    else {
        searchIcon.style.display = 'block';
        searchInput.style.display = 'none';
    }
});

const statement = document.getElementById('statement');
const modalForm = document.getElementById('model-form');
const closeModelForm = document.getElementById('close-model-form');
statement.addEventListener('click', (e) => { e.preventDefault(); modalForm.classList.remove('d-none'); });

closeModelForm.addEventListener('click', (e) => { e.preventDefault(); modalForm.classList.add('d-none'); });




