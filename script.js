const submit = document.querySelector('button');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');

submit.addEventListener('click',()=>{

    //Using jQuery AJAX

    console.log("------------THIS IS USING Jquery AJAX REQUEST--------------");

    console.log(usernameField.value);
    console.log(passwordField.value);

    $.post('https://xcifytest.azurewebsites.net/home/login',{
        UserName:usernameField.value,
        Password:passwordField.value,
    },
    function(response){
        if(response.ErrCode === 1){
            alert("Incorrect password and credentials, login failed");
        }
        else{
            alert("Welcome user");
            window.location.href = "https://xcifytest.azurewebsites.net/home/helloworld";
        }
    })

    // Using Fetch Request//

    // I kept recieving a CORS error, could I please know how to resolve it. Thanks in advance. Really wanted to do it using FETCH

    /* 
    const checkUser = async() =>{

        const User = {
            'UserName':`${usernameField.value}`,
            'Password':`${passwordField.value}`
        };
        
        try{
            
            console.log(User.UserName);
            console.log(User.Password);
            const res = await fetch('https://xcifytest.azurewebsites.net/home/login',{
                method:'POST',
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(User),
                redirect:"follow"
            });
            const data = await res.json();
            
            if(data.ErrCode === 1){
                alert("Invalid credentials, login failed");
            }

        }

        catch(err){
            console.error(err);
        }


    }

    checkUser();

    */ 
})