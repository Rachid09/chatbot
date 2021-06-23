$(document).ready(function () {
  $(".submit-btn").on("click", addUserMessage);
  $("#user-input").on("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      addUserMessage();
    }
  });
});

var addUserMessage = function () {
  console.log("asdasdas");
  var usermessage = $("#user-input").val();
  if (usermessage == undefined || usermessage == null || usermessage == "")
    return;
  addMessage(usermessage, false);
  $("#user-input").val("");
};

var addMessage = function (message, bot) {
  $(".chatbot-box--body").animate(
    {
      scrollTop: $(".chatbot-box--body").get(0).scrollHeight,
    },
    1000
  );
  MessageClass = "user-message";
  messageHolderPosition = "message-holder-right";

  botClass = "bot-message";
  messageHolderbotPosition = "message-holder-left";

  $(".chatbot-box--body")
    .find(".messages-holder")
    .append(
      '<li class="' +
        MessageClass +
        '">' +
        '<div class="' +
        messageHolderPosition +
        '">' +
        '<div class="message">' +
        message +
        " </div>"
    );

  $.get("/get", { msg: message }).done(function (data) {
    if (data) {
      $(".chatbot-box--body")
        .find(".messages-holder")
        .append(
          '<li class="' +
            botClass +
            '">' +  
            '<div class="' +
            messageHolderbotPosition +
            '">' +
            '<div class="message">' +
            data +
            " </div>"
        );
    }
    var botHtml = '<p class="botText"><span>' + data + "</span></p>";
    $("#chatbot-box--body").append(botHtml);
    document;
    // .getElementById("userInput")
    // .scrollIntoView({ block: "start", behavior: "smooth" });
  });
};
