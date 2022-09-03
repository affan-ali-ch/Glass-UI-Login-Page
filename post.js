const SubmitButton = document.getElementById("submit");

SubmitButton.addEventListener("click", Login);


async function Login(event) {
    event.preventDefault();
    const email = document.getElementById('exampleInputEmailCard1').value;
    const password = document.getElementById('exampleInputPasswordCard1').value;

    if(email == "" || password == ""){
        alert('Please Fill All the Fields');
        return;
    }

    const result = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((res) => res.json()).catch((e) => {
        alert(e);
    });


    if (result.status === 'OK'){
        alert('User Logged In');
        return;
    }
    else{
        alert(result.error);
        return;
    }

}