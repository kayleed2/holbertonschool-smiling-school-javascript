$(document).ready(function() {
    dynamicQuotes();
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
                            <p class="text-white" id="text" style="font-family: var(--font-ssp-reg);">${data[el].text}</p>
                            <p class="text-white" id="name" style="font-family: var(--font-ssp-bold);">${data[el].name}</p>
                            <span class="font-italic text-white" id="title" style="font-family: var(--font-ssp-reg);">${data[el].title}</span>
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
