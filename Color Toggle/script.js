let toggleStatus = false;
let toggleButton = document.querySelector(".toggleMe")
let sidebar = document.querySelector(".nav-sidebar");
let toggleLi = document.querySelectorAll(".nav-sidebar ul li")



toggleButton.addEventListener('click', e => {
    showList()
})


let showList = function () {
    if (toggleStatus === false) {
        sidebar.style.visibility = "visible"
        toggleStatus = true;
    }

    else if (toggleStatus === true) {
        sidebar.style.visibility = "hidden"
        toggleStatus = false
    }
}

let colornumber = function () {
    [document.body.style.background = "red", document.body.style.backgroundColor = "blue", document.body.style.backgroundColor = "green", document.body.style.backgroundColor = "purple"]
}


for (i = 0; i < toggleLi.length; i++) {
    if (i == 0) {
        toggleLi[i].addEventListener('click', e => {
            //colornumber[i]
            document.body.style.background = "red"
            sidebar.style.visibility = "hidden"
            toggleStatus = false
        })
    }

    else if (i == 1) {
        toggleLi[i].addEventListener('click', e => {
            //colornumber[i]
            document.body.style.background = "blue"
            sidebar.style.visibility = "hidden"
            toggleStatus = false
        })
    }

    else if (i == 2) {
        toggleLi[i].addEventListener('click', e => {
            //colornumber[i]
            document.body.style.background = "green"
            sidebar.style.visibility = "hidden"
            toggleStatus = false
        })
    }

    else if (i == 3) {
        toggleLi[i].addEventListener('click', e => {
            //colornumber[i]
            document.body.style.background = "purple"
            sidebar.style.visibility = "hidden"
            toggleStatus = false
        })
    }


}



