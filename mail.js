function SendMSG(e) {
  e.preventDefault();
  let nam_txt = document.querySelector("#name111");
  let email_txt = document.querySelector("#email111");
  let number_txt = document.querySelector("#number111");
  let message_txt = document.querySelector("#message111");
  let body =
    "Name:" +
    nam_txt.value +
    ",  " +
    "email:" +
    email_txt.value +
    ",  " +
    "Number:" +
    number_txt.value +
    ",  " +
    "Message : " +
    message_txt.value;

  let temp = {
    from_name: nam_txt.value,
    to_name: "Ankit Kumar",
    message: body,
  };

  emailjs.send("service_7f7x0ah", "template_pvksrko", temp).then((res) => {
    if (res.status == 200) {
      success();
    } else {
      failure();
    }
  });

  nam_txt.value = "";
  email_txt.value = "";
  number_txt.value = "";
  message_txt.value = "";
}

function success() {
  alert(
    "Thank you for submitting your form. Your information has been received, and I will be in touch with you shortly. Your time and interest are greatly appreciated"
  );
  // let thank = document.querySelector(".msg-pop-up");
  // thank.style.display = "block";
  // setTimeout(() => {
  // //   thank.style.display = "none";
  // }, 2000);
}

function failure() {
  alert("Your message couldn't sent. Please try after some time.");
  // let fail = document.querySelector(".failed-msgpop");
  // fail.style.display = "block";
  // setTimeout(() => {
  //   fail.style.display = "none";
  // }, 2000);
}
