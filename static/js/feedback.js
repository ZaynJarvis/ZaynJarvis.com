var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}
today = dd + '/' + mm + '/' + yyyy;
document.getElementById('myForm').addEventListener('submit',saveFeedback)
var x = localStorage.getItem('message');
if(x!==null){
    printMessage();
}
function saveFeedback(e){
    e.preventDefault();
    var userName = document.getElementById('userName').value;
    var userFeedback = document.getElementById('userFeedback').value;
    var message = {
        name:userName,
        feedback:userFeedback,
        date:today
    }
    if(message.feedback==''){
        return false;
    }
    if(localStorage.getItem('message')===null){
        var messages = [];
        messages.push(message);
        localStorage.setItem('message',JSON.stringify(messages));
    }
    else{
        var messages = JSON.parse(localStorage.getItem('message'));
        messages.push(message);
        localStorage.setItem('message',JSON.stringify(messages));
    }
    document.getElementById('myForm').reset();
    printMessage();
}

function printMessage(){
    var messages = JSON.parse(localStorage.getItem('message'));
    var i = 0;
    console.log(messages);
    var vacancy = document.getElementById('message');
    var html ='<blockquote class = "blockquote well text-center">'+
    '<h3>'+messages[i].feedback+'</h3>'+'<footer class="blockquote-footer">'+messages[i].name+' @ '+messages[i].date+'<cite>'+'</blockquote>';
    var yourName = '';

    for (i = (messages.length-1);i>0;i--){
        console.log(i);
        if(messages[i].feedback!=null && messages[i].feedback!=='')
        {
            if(messages[i].name==''){
                yourName = 'No One';
            }
            else{
                yourName = messages[i].name;
            }

            html+= '<blockquote class = "blockquote well text-center">'+
            '<h3>'+messages[i].feedback+'</h3>'+'<footer class="blockquote-footer">'+yourName+' @ '+messages[i].date+'<cite>'+'</blockquote>';
        }
    }
    vacancy.innerHTML = html;
}
