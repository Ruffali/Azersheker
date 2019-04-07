 $(document).ready(function () {
    // Zoom Image Start
    function zoomImgFunc(){
        let zoomImg = document.querySelector("#zoomImg .imgDiv img")
        var ImgClose = $("#zoomImg .imgDiv .imgclose");
        var zoomImgBold = $("#zoomImg .imgDiv .content .bold");
        var zoomImgNormal = $("#zoomImg .imgDiv .content .normal");
    
    
        $("#qendler .qendler").click(function(){
            let src = $(this).children(".card").children(".card-img-top").attr("src");
            let bold = $(this).children(".card").children(".card-body").children(".bold").html();
            let normal = $(this).children(".card").children(".card-body").children(".normal").html();
        
            zoomImg.setAttribute("src", src)
            zoomImgBold.html(bold);
            zoomImgNormal.html(normal);
            $("#zoomImg").fadeIn(500)
        })
        $(".zoom").click(function(){
            let src = $(this).children("img").attr("src");
        
            zoomImg.setAttribute("src", src)
            $("#zoomImg").fadeIn(500)
        })
    
        ImgClose.click(function () {
            $("#zoomImg").fadeOut(500)
            // zoomImg.setAttribute("src", "")
            // zoomImgBold.html("");
            // zoomImgNormal.html("");
        })
    }
    zoomImgFunc();
    // Zoom Image End

    // Search Start
    function search(){
        $('a[href="#search"]').on('click', function(event) {                    
            $('#search').addClass('open');
            $('#search > form > input[type="search"]').focus();
        });            
        $('#search, #search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
            }
        }); 
    }
    search();
    // Search End

    // carousel Start
    function carousel() {
    var owl = document.querySelectorAll("#carousel .owl-dots .owl-dot span");
    for (var i = 0; i < owl.length; i++) {
        owl[i].addEventListener("click", function () {
            alert()
        })
    }
    $('#carousel .owl-carousel').owlCarousel({
        // animateIn: "fadeIn",
        // animateOut: "fadeOut",
        loop: true,
        // margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: false,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
        var owla = $('#carousel .owl-carousel');

        $('#carousel .row .col-md-6 .customNextBtn').click(function () {
            owla.trigger('next.owl.carousel');
        })
        $('#carousel .row .col-md-6 .customPrevBtn').click(function () {
            owla.trigger('prev.owl.carousel');
        });
     
    
        $(document).keydown(function (event) {
            if (event.keyCode == 39) {
                owla.trigger('next.owl.carousel');
            }
            if (event.keyCode == 37) {
                owla.trigger('prev.owl.carousel');
            }
        });
    
    }
    carousel()
    // carousel End
});






        

    
    
    