let counter = document.querySelector('.counter');
let loadingBar = document.querySelector('.loadingFront');

let idx = 0;
updatenum();


function updatenum(){

    counter.innerHTML = idx +"%";
    loadingBar.style.width = idx + "%";
    idx++;

    if(idx < 101)
    {
        setTimeout(updatenum, 50);
    }

}