$(document).ready(function() {
    dynamicQuotes();
    createCard();
    createCardTwo();
});

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