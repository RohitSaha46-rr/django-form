
function validate(){
    let headddd=document.getElementById('headddd');
    let name1=document.getElementById("name").value;
let email=document.getElementById("email").value;
let no=document.getElementById("no").value;
let role=document.getElementById("role").value;
    if(name1=="" || email=="" || no=="" || role==""){
        
       headddd.innerHTML="Fill all the fields in order to submit";
       
    }
    
    else if(name1!="" || email!="" || no!="" || role!=""){
        headddd.innerHTML="Your Respose has been submitted";
        
    }
}