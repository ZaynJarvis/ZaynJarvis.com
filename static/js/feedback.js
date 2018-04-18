let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();
if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}
today = dd + '/' + mm + '/' + yyyy;

$(document).ready(()=>{
    $('#myForm').on('submit',(e)=>{
        e.preventDefault();
        let userName = $('#userName').val();
        let userFeedback = $('#userFeedback').val();

        $.ajax({
            url: "https://api.mlab.com/api/1/databases/zaynfeedback/collections/test?apiKey=awWz2y7VL9sR6uXaXs_CRsAhG-9AXkNo",
            data: JSON.stringify({ 
                "userName":userName,
                "feedback": userFeedback,
                "date": today
            }),
            type: "POST",
            contentType: "application/json",
            success: (data) => {
                getFeedback();
            },
            error: (xhr, status, err) => {console.log(error);}
        });
    })
})

function getFeedback(){
    $.ajax({
        url: "https://api.mlab.com/api/1/databases/zaynfeedback/collections/test?apiKey=awWz2y7VL9sR6uXaXs_CRsAhG-9AXkNo"
    }).done((data) => printMessage(data));
}
getFeedback();

function printMessage(messages){
    let i = 0;
    let vacancy = document.getElementById('message');
    let html ='<blockquote class = "blockquote well text-center">'+
    '<h3>'+messages[i].feedback+'</h3>'+'<footer class="blockquote-footer">'+messages[i].userName+' @ '+messages[i].date+'<cite>'+'</blockquote>';
    let yourName = '';
    for (i = (messages.length-1);i>0;i--){
        console.log(i);
        if(messages[i].feedback!=null && messages[i].feedback!=='')
        {
            if(messages[i].userName==''){
                yourName = 'No One';
            }
            else{
                yourName = messages[i].userName;
            }

            html+= '<blockquote class = "blockquote well text-center">'+
            '<h3>'+messages[i].feedback+'</h3>'+'<footer class="blockquote-footer">'+yourName+' @ '+messages[i].date+'<cite>'+'</blockquote>';
        }
    }
    vacancy.innerHTML = html;
}
