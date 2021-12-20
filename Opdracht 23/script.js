const button = document.querySelector('.btn-alert');
button.addEventListener('click', function () {
    alert("Button Clicked");
})


const bgclass = document.querySelector('.btn-background')
const background = document.querySelector('.blue-background')
const toggleColor = function () {
    bgclass.addEventListener('click', function () {
        background.classList.toggle('red-background')
    })
}
toggleColor();
