window.onload = function () {
  setTimeout(function () {
    PopUp();
  }, 1000);
};

async function PopUp() {
  const firstBotMessage = document.querySelector(".first");
  console.log(firstBotMessage);

  const { value: name } = await Swal.fire({
    title: "من فضلك ادخل اسمك",
    input: "text",
    //   inputLabel: "Your IP address",
    //   inputValue: inputValue,
    showCancelButton: true,
    inputPlaceholder: "رشيد",
    inputValidator: (value) => {
      if (value) {
        const messageBot = `<div class="message-holder-left">
                    <div class="message">${value} اهلا بك </div>
                  </div>`;
        firstBotMessage.insertAdjacentHTML("afterbegin", messageBot);
      }
    },
  });
}

// if (ipAddress) {
//   Swal.fire(`Your IP address is ${ipAddress}`);
// }
