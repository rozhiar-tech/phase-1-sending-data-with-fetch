// Add your code here

function submitData(userName, userEmail) {
    let formData = {
        name: `${userName}`,
        email: `${userEmail}`
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
        
    }).then((response) => {
        // console.log(response.json);
        return response.json();
    }).then((object) => {
        console.log(object);
        document.body.innerHTML = object.id;

    
    }).catch((err) =>{
        document.body.innerHTML = err.message;

    });
    
    
    };

    // submitData('Steve', 'hello@gmail.com')