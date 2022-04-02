function loadText(){
    var xhr= new XMLHttpRequest();
    
    xhr.open('GET', 'sample.txt', true);
    
    // console.log('READYSTATE: ', xhr.readyState);
    
    xhr.onprogress = function(){
        // console.log('READYSTATE: ', xhr.readyState);
    }
    
    xhr.onload = function(){
        // console.log('READYSTATE: ', xhr.readyState);
        if(this.status==200){
            //console.log(this.responseText);
            document.getElementById('text').innerHTML=this.responseText;
        }
    }
    xhr.onerror = function(){
        console.log('request error...');
    }
    xhr.send();
}
function displayAjaxtxt(){
    var txt = document.getElementById('hideAjax');
    if (txt.style.display === 'none') {
        txt.style.display = 'block';
    } else {
        txt.style.display = 'none';
    }
}

function changeValue(){
    var currentText = document.getElementById('button');
    if(currentText.value=="Get Text File")
    currentText.value="Close Text File";
    else currentText.value="Get Text File";
}
// const button= document.getElementById('button')
//     button.addEventListener('click', loadText);
    
    
    function getAjaxUser(){
        const userBtn = document.getElementById('hideAjaxUser');
        if (userBtn.style.display === 'none') {
            userBtn.style.display = 'block';
        } else {
            userBtn.style.display = 'none';
        }
    }
    
    function getAjaxUsers(){
        var usersBtn = document.getElementById('hideAjaxUsers');
        if (usersBtn.style.display === 'none') {
            usersBtn.style.display = 'block';
        } else {
            usersBtn.style.display = 'none';
        }
    }
    
    
    
    function getAjaxTxt(){
        loadText();
        displayAjaxtxt();
        changeValue();
    }
    
    const uBtn= document.getElementById('button1');
    uBtn.addEventListener('click', loadUser);
    const usBtn= document.getElementById('button2');
    usBtn.addEventListener('click', loadUsers);
    
    function loadUser(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'user.json', true);
        
        xhr.onload = function(){
            if(this.status == 200){
                var user = JSON.parse(this.responseText);
                var output = '';
                    output += '<ul style="list-style-type:none">' +
                    '<li>ID: ' + user.id+'</li>' +
                    '<li>Name: ' + user.name+'</li>' +
                    '<li>Email: ' + user.email+'</li>'+
                    '</ul>';
                    
                    document.getElementById('user').innerHTML = output;
                }
            }
            xhr.send();
            }
        function loadUsers(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'users.json', true);

            xhr.onload = function(){
                if(this.status == 200){
                    var users = JSON.parse(this.responseText);
                   
                    var output = '';

                   for(var i in users){

                   
                    output += '<ul style="list-style-type:none">' +
                    '<li>ID: ' + users[i].id+'</li>' +
                    '<li>Name: ' + users[i].name+'</li>' +
                    '<li>Email: ' + users[i].email+'</li>'+
                    '</ul>';
                }
                    document.getElementById('users').innerHTML = output;
                }
            }
            xhr.send();
            }

//credits to Frank Roosen
fetch('generated.json')
.then(
  function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {

      data.forEach(function (element) {

        document.getElementById("personen").innerHTML += "<li>" + element.age + " " + element.name + "</li>";
      });
    });
  }
)