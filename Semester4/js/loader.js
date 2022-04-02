    $("#pop").mouseover(function() {
        $(this).children(".popup").show();
    }).mouseout(function() {
        $(this).children(".popup").hide();
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });
    



  




