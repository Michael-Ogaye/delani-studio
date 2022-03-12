
// This is the Ui logic
$(document).ready(function(){
    let btna=$('button')
    console.log(btna)
    btna.click(function(e){
        e.preventDefault();
        let fdName= $('input[type=text]').val();
    let email=$('input[type=email]').val();
    let comment=$('textarea').val();
    console.log(fdName,email, comment);

    //feedback trigger
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert(`we are much grateful ${fdName}, we are glad to have your feedback`, 'success')
  })
}


    })

    
    







})