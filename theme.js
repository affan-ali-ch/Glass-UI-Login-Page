function toggleTheme(checkbox){
    console.log(checkbox.checked);
    let container = document.querySelector('.container');
    let showcase = document.querySelector('.showcase');
    let card = document.querySelector('.card');
    let label1 = document.querySelector('#label1');
    let label2 = document.querySelector('.text-muted');
    let label3 = document.querySelector('#label3');
    let label4 = document.querySelector('#label4');
    let label5 = document.querySelector('#label5');
    let label6 = document.querySelector('#label6');
    let emailInput = document.querySelectorAll('.form-control');
    let emailIconContainer = document.querySelectorAll('.input-group-text');
    let EmailIcon = document.querySelectorAll('.icon');
    let check = document.querySelector('#defaultCheck5');

    if(checkbox.checked){
        
        container.style.backgroundColor = '#111927';
        container.style.backgroundImage = "none";
        
        showcase.style.backgroundImage = "radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%)";
        
        card.style.backgroundColor = "rgba(17, 25, 40, 0.75)";
        card.style.border = '1px solid rgba(255, 255, 255, 0.125)';
        
        label1.style.color = "#fff";
        label2.style.color = "rgb(156, 163, 175)";
        label3.style.color = "#fff";
        label4.style.color = "#fff";
        label5.style.color = "#fff";
        label6.style.color = "#fff";
        


        emailInput.forEach(function(textbox){

            textbox.style.backgroundColor = "#1F2A37";
            textbox.classList.add('placeholderDark');
            textbox.style.color = "#fff";
            textbox.style.border = "1px solid #4b5663";

            textbox.addEventListener("mouseenter", () => {
                textbox.style.border = "1px solid #2EA44F";
            });

            textbox.addEventListener("mouseleave", () => {
                if(textbox === document.activeElement)
                {
                    textbox.style.border = "1px solid #2EA44F";

                }else{
                    textbox.style.border = "1px solid #4b5663";
                }
            });

            textbox.addEventListener('focus', ()=>{
                textbox.style.backgroundColor = "#374251";
                textbox.style.border = "1px solid #2EA44F";

            });

            textbox.addEventListener('focusout', ()=>{
                textbox.style.backgroundColor = "#1F2A37";
                textbox.style.border = "1px solid #4b5663";
            });
        });

           
        emailIconContainer.forEach(function(container){
            container.style.backgroundColor = "#1F2A37";
            container.style.border = "1px solid #4b5663";
        });

        EmailIcon.forEach(function(icon){
            icon.style.fill = "#fff";

        });


        check.style.backgroundColor = '#1F2A37';
        if(check.checked)
        {
            check.style.borderColor = "#2EA44F";

        }
        else{
            check.style.borderColor = "#4B5663";

        }

        check.addEventListener("mouseenter", ()=>{
            check.style.backgroundColor = "#374251"
        });

        check.addEventListener("mouseleave", ()=>{
            check.style.backgroundColor = "#1F2A37";
        });

        check.addEventListener('change', ()=>{
            console.log(check.checked)

            if(check.checked)
            {
                check.style.borderColor = "#2EA44F";

            }
            else{
                check.style.borderColor = "#4B5663";

            }
            
        })

    }
    else{
        container.style.backgroundColor = '#50E3C2';
        container.style.backgroundImage = "radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%)";
        
        showcase.style.backgroundImage = "none";
        
        card.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
        card.style.border = '1px solid rgba(209, 213, 219, 0.3)';
        
        label1.style.color = "#04060A";
        label2.style.color = "#4B5663";
        label3.style.color = "#4B5663";
        label4.style.color = "#4B5663";
        label5.style.color = "#4B5663";
        label6.style.color = "#4B5663";



        emailInput.forEach(function(textbox){

            textbox.style.backgroundColor = "#FFFFFF";
            textbox.classList.add('placeholderDark');
            textbox.style.color = "#111927";
            textbox.style.border = "1px solid #D1D5DB";

            textbox.addEventListener("mouseenter", () => {
                textbox.style.border = "1px solid #2EA44F";
            });

            textbox.addEventListener("mouseleave", () => {
                if(textbox === document.activeElement)
                {
                    textbox.style.border = "1px solid #9CA3AF";

                }else{
                    textbox.style.border = "1px solid #D1D5DB";
                }
            });

            textbox.addEventListener('focus', ()=>{
                textbox.style.backgroundColor = "#F3F4F6";
                textbox.style.border = "1px solid #2EA44F";

            });

            textbox.addEventListener('focusout', ()=>{
                textbox.style.backgroundColor = "#FFFFFF";
                textbox.style.border = "1px solid #D1D5DB";
            });
        });


        emailIconContainer.forEach(function(container){
            container.style.backgroundColor = "#fff";
            container.style.border = "1px solid #D1D5DB";
        });

        EmailIcon.forEach(function(icon){
            icon.style.fill = "#6B7280";
        });


        if(check.checked)
        {
            check.style.borderColor = "#31A351";

        }
        else{
            check.style.borderColor = "#D1D5DB";

        }

        check.style.backgroundColor = '#FFF';
        

        check.addEventListener("mouseenter", ()=>{
            check.style.backgroundColor = "#E5E7EB"
        });

        check.addEventListener("mouseleave", ()=>{
            check.style.backgroundColor = "#FFF";
        });

        check.addEventListener('change', ()=>{
            console.log(check.checked)

            if(check.checked)
            {
                check.style.borderColor = "#31A351";

            }
            else{
                check.style.borderColor = "#D1D5DB";

            }
            
        })
    }

}