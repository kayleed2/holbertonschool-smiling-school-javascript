$(document).ready(function() {
    dynamicQuotes();
    createCard();
    createCardTwo();
    dynamicVideos();
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const dynamicQuotes = () => {
    $.ajax({
        method: "GET",
        url: "https://smileschool-api.hbtn.info/quotes",
        dataType: "json",
        beforeSend: function() {
            $(".loader").show();
        },
        success: function(data) {
        if ($("#quotes").children().length == 1) {
            for (el in data) {
                $("#quotes").append(`
                <div class="carousel-item active">
                    <div class="d-block d-flex" id="carol" style="height: 11rem;">
                        <img src="${data[el].pic_url}" id="pic_url" class="rounded-circle mr-3" alt="">
                        <div>
                            <p class="text-white" id="text" style="font-family: let(--font-ssp-reg);">${data[el].text}</p>
                            <p class="text-white" id="name" style="font-family: let(--font-ssp-bold);">${data[el].name}</p>
                            <span class="font-italic text-white" id="title" style="font-family: let(--font-ssp-reg);">${data[el].title}</span>
                        </div>
                    </div>
                </div>`);
                }
                if ($('#quotes .carousel-item.active').eq(1)) {
                    $('#quotes .carousel-item').eq(1).removeClass("active");
                }
            }
        },
        complete: function() {
            $(".loader").hide();
        }
    })
}

const createCard = () => {
    $.ajax({
        method: "GET",
        url: "https://smileschool-api.hbtn.info/popular-tutorials",
        dataType: "json",
        beforeSend: function() {
            $(".loader").show();
        },
        success: function(data) {
            for (el in data) {
                $(`#popular`).append(`
            <div class="carousel-item" id="card">
                <div class="card col-md-3 border-0 p-0 m-1" id="${el}">
                    <video src="" poster="${data[el].thumb_url}"></video>
                    <div class="playbtn">
                        <a href="" class="img-fluid w-25"><img class="img-fluid" src="./images-2/play.png" alt=""></a>
                    </div>
    <div class="card-body">
        <h5 class="card-title" style="font-family: let(--font-ssp-bold);">${data[el].title}</h5>
        <p class="card-text">${data[el]["sub-title"]}</p>
        <div class="d-flex mt-3 align-items-center">
            <img src="${data[el].author_pic_url}" class="rounded-circle img-fluid w-25" alt="">
            <p class="ml-2 mb-0 small" style="font-family: let(--font-ssp-semibold); color: #C271FF;">${data[el].author}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="d-flex w-25">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_off.png" class="img-fluid w-25" alt="">
            </div>
            <p class="m-0" style="font-family: let(--font-ssp-semibold); color: #C271FF;">${data[el].duration}</p>
        </div>
    </div>
    </div>
    </div>`)};
    $('.popular-video-container .carousel-item:first').addClass('active');
    $('.popular-video-container .carousel .carousel-item').each(function(){
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
              }
            
            next.children(':first-child').clone().appendTo($(this));
          }
        });    
    },
    complete: function() {
        $(".loader").hide();
    }
})
}

const createCardTwo = () => {
    $.ajax({
        method: "GET",
        url: "https://smileschool-api.hbtn.info/latest-videos",
        dataType: "json",
        beforeSend: function() {
            $(".loader").show();
        },
        success: function(data) {
            for (el in data) {
                $(`#latest`).append(`
            <div class="carousel-item" id="card">
                <div class="card col-md-3 border-0 p-0 m-1" id="${el}">
                    <video src="" poster="${data[el].thumb_url}"></video>
                    <div class="playbtn">
                        <a href="" class="img-fluid w-25"><img class="img-fluid" src="./images-2/play.png" alt=""></a>
                    </div>
    <div class="card-body">
        <h5 class="card-title" style="font-family: let(--font-ssp-bold);">${data[el].title}</h5>
        <p class="card-text">${data[el]["sub-title"]}">
            <img src="${data[el].author_pic_url}" class="rounded-circle img-fluid w-25" alt="">
            <p class="ml-2 mb-0 small" style="font-family: let(--font-ssp-semibold); color: #C271FF;">${data[el].author}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="d-flex w-25">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                <img src="./images-2/star_off.png" class="img-fluid w-25" alt="">
            </div>
            <p class="m-0" style="font-family: let(--font-ssp-semibold); color: #C271FF;">${data[el].duration}</p>
        </div>
    </div>
    </div>
    </div>`)};
    $('.latest-video-container .carousel-item:first').addClass('active');
    $('.latest-video-container .carousel .carousel-item').each(function(){
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
              }
            
            next.children(':first-child').clone().appendTo($(this));
          }
        });    
    },
    complete: function() {
        $(".loader").hide();
    }
})
}

const dynamicVideos = () => {
    $.ajax({
        method: "GET",
        url: "https://smileschool-api.hbtn.info/courses",
        data: {
            q: $("#searchfield").val(),
            topic: $("#drops").val(),
            sort: $("#drops2").val()
        },
        dataType: "json",
        beforeSend: function() {
            $(".loader").show();
        },
        success: function(data) {
        for (i of data.topics) {
            $('#drops').append(` <button class="dropdown-item" onclick="useSearch()" type="button">${capitalizeFirstLetter(i)}</button>`)
        }
        for (i of data.sorts) {
            $('#drops2').append(` <button class="dropdown-item" onclick="useSearch()" type="button">${capitalizeFirstLetter(i.replaceAll('_', ' '))}</button>`)
        }
        $('#drops .dropdown-item').click(function() {
            let text = $(this).text();
            $('#place').html(capitalizeFirstLetter(text));
        })
        $('#drops2 .dropdown-item').click(function() {
            let text = $(this).text();
            $('#sort').html(capitalizeFirstLetter(text));
        })
        },
        complete: function() {
            $(".loader").hide();
        }
     })
}

const useSearch = () => {
    $.ajax({
        method: "GET",
        url: "https://smileschool-api.hbtn.info/courses",
        data: {
            q: $('[type=search]').val(),
            topic: $('#place').text(),
            sort: $("#sort").text()
        },
        dataType: "json",
        beforeSend: function() {
            $(".loader").show();
        },
        success: function(data) {
        $("#videos").empty();
        let key = capitalizeFirstLetter(data.q);
        let topic = capitalizeFirstLetter(data.topic);
        for (el of data.courses) {
            if (topic == el.topic && $.inArray(key, el.keywords != -1)) {
                    $("#videos").append(`
                    <div class="card border-0 p-1">
                    <video src="" poster="${el.thumb_url}"></video>
                    <div class="playbtn">
                        <a href="" class="img-fluid w-25"><img class="img-fluid" src="./images-2/play.png" alt=""></a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" style="font-family: var(--font-ssp-bold);">${el.title}</h5>
                        <p class="card-text">${el["sub-title"]}</p>
                        <div class="d-flex mt-3 align-items-center">
                            <img src="${el.author_pic_url}" class="rounded-circle img-fluid w-25" alt="">
                            <p class="ml-2 mb-0 small" style="font-family: var(--font-ssp-semibold); color: #C271FF;">${el.author}</p>
                        </div>
                        <div class="d-flex align-items-center mt-3">
                            <div class="d-flex w-25">
                                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                                <img src="./images-2/star_on.png" class="img-fluid w-25" alt="">
                                <img src="./images-2/star_off.png" class="img-fluid w-25" alt="">
                            </div>
                            <p class="m-0" style="font-family: var(--font-ssp-semibold); color: #C271FF;">${el.duration}</p>
                        </div>
                    </div>
                </div>`);
            }
        }
        },
        complete: function() {
            $(".loader").hide();
        }
    })
}
