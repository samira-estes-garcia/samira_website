console.log("is connected");

//click outside of success-modal to close the popup
function closeSuccessModal() {
  $("body").on("click", () => {
    $(".success-modal").css("display", "none");
  });
}

//capture form info and send vals to email address
let $contactForm = $("#contact-form");
$contactForm.submit(function (e) {
  e.preventDefault();
  $.ajax({
    url: "https://formspree.io/xdowzdkp",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json",
    beforeSend: function () {
      $contactForm.append(
        '<div class="alert alert--loading">Sending message…</div>'
      );
    },
    success: function (data) {
      $contactForm.find(".alert--loading").hide();
      // $contactForm.append(
      //   '<div class="success-modal animated fadeIn"><img src="assetsicons/success-img.svg" alt="You successfully submitted the form!" /></div>'
      // );
      $(".success-modal").show();
      closeSuccessModal();
      $contactForm.trigger("reset");
    },
    error: function (err) {
      $contactForm.find(".alert--loading").hide();
      $contactForm.append(
        '<div class="error-modal"><div class="modal-content error-modal-content">ERROR! Oops, there was an error.</div><div class="close">x image</div></div>'
      );
    },
  });
});

//scroll to top
$(".up-icon").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "1000");
});
