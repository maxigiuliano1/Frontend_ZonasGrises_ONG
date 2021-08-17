$(document).ready(function(){
    getNovedades();
    getOrganization();
});

function getNovedades(){
    url = "http://localhost:8080/news?size=4&page=0";
    $.get(url, function (response) {
        $.each(response, (i,news) => {  
            for (let i = 0; i < news.length; i++) {
                $('#image'+i).attr({"src":news[i].image});
                $('#name'+i).empty();
                $('#name'+i).append(news[i].name);
                $('#content'+i).empty();
                $('#content'+i).append(news[i].content);
            }
        });
    });
}

function getOrganization() {
    $.get("http://localhost:8080/organization/public",
        function (organization) {
            $('#image-ong').attr({"src":organization.image});           
            $('#title').empty();
            $('#title').append(organization.name);
            $('#linkedin').attr({"href":organization.linkdnUrl});
            $('#instagram').attr({"href":organization.instagramUrl});
            $('#facebook').attr({"href":organization.facebookUrl});
        });
}

let guardarDatos = ()=>{
    datos = {
        firstname: $('#firstname').val(),
        lastname: $('#lastname').val(),
        email: $('#email').val(),
        role: $('#role').val(),
        image: $('#image').val(),
        password: $('#password').val()
    }
    console.log(datos); 
}

function postNews() {
    $('#bot-submit').click(function () {
        var settings = {
            "url": "http://localhost:8080/contacts",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "name": $('#name-form').val(),
                "phone": $('#phone-form').val(),
                "email": $('#email-form').val(),
                "message": $('#message-form').val()
            })
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    });
}