// Function for Hamburger Menu

const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
    selectElement('.nav-list').classList.toggle('active');
});


// Testimonial Section

     $('.testimonial-pics img').click(function () {
         $(".testimonial-pics img").removeClass("active");
         $(this).addClass("active");

         $(".testimonial").removeClass("active");
         $("#" + $(this).attr("alt")).addClass("active");
     }); 

