(function () {
  emailjs.init("ZOZmHl5ph4djkqLv7");
})();

$("#sendMail").click(function (e) {
  e.preventDefault();

  let $btn = $(this);
  let name = $("#name").val().trim();
  let phone = $("#phone").val().trim();
  let email = $("#email").val().trim();
  let subject = $("#subject").val().trim();
  let message = $("#message").val().trim();

  // Simple regex for email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  $(".form-control").removeClass("is-invalid");

  let isValid = true;
  if (!name) {
    $("#name").addClass("is-invalid");
    isValid = false;
  }
  if (!phone) {
    $("#phone").addClass("is-invalid");
    isValid = false;
  }
  if (!email || !emailRegex.test(email)) {
    $("#email").addClass("is-invalid");
    isValid = false;
  }
  if (!subject) {
    $("#subject").addClass("is-invalid");
    isValid = false;
  }
  if (!message) {
    $("#message").addClass("is-invalid");
    isValid = false;
  }
  if (!isValid) return;

  $btn.prop("disabled", true);
  let originalText = $btn.text();
  $btn.text("Sending...");

  var templateParams = {
    name: name,
    phone: phone,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs.send("service_q4j372f", "template_xs6lgif", templateParams)
    .then(function () {
      alert("✅ Message sent successfully!");
    }, function (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again.");
    })
    .finally(function () {
      $btn.prop("disabled", false);
      $btn.text(originalText);
    });
});

$(".form-control").on("input", function () {
  $(this).removeClass("is-invalid");
});