function validate()
{
    var luser=document.getElementById("luser");
    var user=document.getElementById("user");
    var regx=/^[5-9][a-z]{8}0$/;
    if(regx.test(user.value))
    {
        luser.innerHTML="Valid";
        luser.style.visibility="visible";
        luser.style.color="yellowgreen";
    }
    else
    {
        luser.innerHTML="Invalid";
        luser.style.visibility="visible";
        luser.style.color="red";
    }
}