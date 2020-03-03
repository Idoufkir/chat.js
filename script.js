//function1 (user1)

function Add1() {
    var message = document.getElementById("send_text");

        var convers = document.getElementById("conversation");
        var outp = document.createElement("p");
        var outpmaster = document.createTextNode(message.value);

            outp.appendChild(outpmaster);       
            convers.appendChild(outp);
}

//function2 (user2)

function Add2() {
    var message = document.getElementById("send_text");

        var convers = document.getElementById("conversation");
        var outp = document.createElement("p");

        outp.setAttribute('class','messages')

        var outpmaster = document.createTextNode(message.value);

        outp.appendChild(outpmaster);       
        convers.appendChild(outp);       
    
}
