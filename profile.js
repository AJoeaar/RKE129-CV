const titleSpan = document.querySelector('#h1');
const authorSpan = document.querySelector('#author');
const ratingCountSpan = document.querySelector('#rating-count');
const jobSpan = document.querySelector('#job')

window.onload = () => {

    fetch('person.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        titleSpan.textContent = data.h1
        authorSpan.textContent = data.author;
        ratingCountSpan.textContent = data.rating-count;
        jobSpan.textContent = data.job;

    
        }
    )
}

/* See on kui kaugele ma jõudsin kuni kuul kokku jooksis.*/