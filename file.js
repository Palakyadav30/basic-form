const password =document.getElementById('password')
const username=document.getElementById('username')

document.getElementById('form').addEventListener('submit',(event)=>{
    event.preventDefault()
    valid=true

    const password_value=password.value
    const username_value=username.value

    if(username_value.length<5 || password_value<12){
        alert('the form has not been submited:\ n- A field is not valid.')
        valid=false
    }

    if(valid)
       alert('the form has been completed.\n we will procced with the sending.')
})