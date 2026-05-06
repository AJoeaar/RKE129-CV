const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const targetimage = document.querySelector('.cover-image img');
let i = 1;

targetimage.addEventListener('click', () => {

    targetimage.style.opacity = '0';

    setTimeout(() => {
       if(i === images.length - 1) {
        i = 0;
    } 
    
    targetimage.src = 'images/' + images[i];
    i++;

    targetimage.style.opacity = '1';

}, 500);

    

    
    
});