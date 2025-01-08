function myFunction(){
    let x= "Hello ";
    let y = document.getElementById('fname').value;
    let z=', how are you doing?'
    let msg = x + y + z ;
    console.log(msg);
    const output = document.getElementById('msgOutput');
    output.innerHTML= msg;
}