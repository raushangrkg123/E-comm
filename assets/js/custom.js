$(document).ready(function () {
  //<!-------------------video-play-button----------------------->
  $(".popup-vimeo").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    closeOnContentClick: false,
    closeOnBgClick: false,
    iframe: {
      patterns: {
        vimeo: {
          index: '', 
          id: '', 
          src:'/assets/videos/training.mp4', 
        },
      },
      srcAction: "iframe_src",
    },
  });


  //<!-------------------Form-validation-rules----------------------->
  $("#userform").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        digits: true,
      },
      message: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      name: {
        required: "Please enter your name.",
        minlength: "Name must be at least 3 characters long.",
      },
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address.",
      },
      phone: {
        required: "Please enter your phone number.",
        minlength: "Phone number must be 10 digits.",
        maxlength: "Phone number must be 10 digits.",
        digits: "Please enter only digits.",
      },

      message: {
        required: "Please enter your message.",
        minlength: "Message must be at least 10 characters long.",
      },
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
      // Add the `invalid-feedback` class to the error element
      error.addClass("invalid-feedback");
      // Add error element after the input field or textarea
      if (element.prop("type") === "textarea") {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function (element, errorClass, validClass) {
      // Add `is-invalid` class to the element
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element, errorClass, validClass) {
      // Remove `is-invalid` class from the element
      $(element).removeClass("is-invalid");
    },
    // Submit handler
    submitHandler: function (form) {
      // If all fields are valid, submit form
      alert('Form submitted succesfully')
      form.submit();
    },
  });

  // <!-------------------card-section----------------------->
  $(".card").click(function () {
    $(this).toggleClass("bg-info text-primary"); // Example toggle class change
    // Example slide toggle animation
  });

  // <!-------------------success-stories----------------------->
  $("#successstories").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: ".owl-dots",
  });

  // <!-------------------working-process----------------------->

  // Set default state
  $("#talentSeekerBtn").addClass("bg-success text-white");
  $("#jobSeekerBtn").addClass("bg-white text-black");
  $("#jobSeekerContent").hide();

  // Talent Seeker button click event
  $("#talentSeekerBtn").click(function () {
    $(this)
      .removeClass("bg-white text-black")
      .addClass("bg-success text-white");
    $("#jobSeekerBtn")
      .removeClass("bg-success text-white")
      .addClass("bg-white text-black");
    $("#talentSeekerContent").show();
    $("#jobSeekerContent").hide();
  });

  // Job Seeker button click event
  $("#jobSeekerBtn").click(function () {
    $(this)
      .removeClass("bg-white text-black")
      .addClass("bg-success text-white");
    $("#talentSeekerBtn")
      .removeClass("bg-success text-white")
      .addClass("bg-white text-black");
    $("#jobSeekerContent").show();
    $("#talentSeekerContent").hide();
  });

  // <!-- -----------------company-icons----------------------->
  $("#companyicons").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,

        loop: true,
      },
    },
  });

  // ---------practice -------

  // ---------description hero section-------

  $(".description p").hide(3000);

  // ---------card-------

// $(".card").hover(
//   function(){

//     $(this).hide(4000)
//   },
//   function(){
//     $(this).show(3000)
//   }
// );

});
