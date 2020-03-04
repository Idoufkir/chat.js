//function1 (user1)

function Add1() {
    var message = document.getElementById("send_text");

        var convers = document.getElementById("conversation");
        var outp = document.createElement("p");

        outp.setAttribute('class','messages1')

        var outpmaster = document.createTextNode(message.value);

            outp.appendChild(outpmaster);       
            convers.appendChild(outp);
}

//function2 (user2)

function Add2() {
    var message = document.getElementById("send_text");

        var convers = document.getElementById("conversation");
        var outp = document.createElement("p");

        outp.setAttribute('class','messages2 bubble--alt')

        var outpmaster = document.createTextNode(message.value);

        outp.appendChild(outpmaster);       
        convers.appendChild(outp);       
    
}

//Time

/*
var deviceTime = document.querySelector('.messages1 .messages2 .time');
var messageTime = document.querySelectorAll('.messages1 .messages2 .time');

deviceTime.innerHTML = moment().format('h:mm');

setInterval(function() {
	deviceTime.innerHTML = moment().format('h:mm');
}, 1000);

for (var i = 0; i < messageTime.length; i++) {
	messageTime[i].innerHTML = moment().format('h:mm A');
}

*/