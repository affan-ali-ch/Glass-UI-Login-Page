let toggle = document.querySelector('.mx-2');
let darkIcon = document.querySelector('#darkIcon');
let lightIcon = document.querySelector('#lightIcon');
let check = document.querySelector('.toggle-input');
check.checked = false;

toggle.addEventListener('click', ()=>{
    
    if(!check.checked){
        document.getElementsByTagName('body')[0].style.backgroundColor = "#1F2A37"
        toggle.classList.add('dark');

        toggle.style.backgroundColor = "#566372";
        toggle.style.borderColor = "#4B5663";
        darkIcon.style.stroke = "#39A8C2";
        lightIcon.style.stroke = "#9CA3AF";

        toggle.addEventListener('mouseenter', ()=>{
            toggle.style.backgroundColor = "#566372";
            toggle.style.borderColor = "#4B5663";


        });

        toggle.addEventListener('mouseleave', ()=>{
            toggle.style.backgroundColor = "#4B5663";
            toggle.style.borderColor = "#4B5663";

        });
    }
    else{
        document.getElementsByTagName('body')[0].style.backgroundColor = "#FFF"
        toggle.classList.remove('dark');
        toggle.style.backgroundColor = "#E5E7EB";
        toggle.style.borderColor = "#E5E7EB";

        darkIcon.style.stroke = "#9CA3AF";
        lightIcon.style.stroke = "#F3B017";

        toggle.addEventListener('mouseenter', ()=>{
            toggle.style.backgroundColor = "#E5E7EB";
            toggle.style.borderColor = "#E5E7EB";
        });

        toggle.addEventListener('mouseleave', ()=>{
            toggle.style.backgroundColor = "#F3F4F6";
            toggle.style.borderColor = "#E5E7EB";
        });

    }
    


});
