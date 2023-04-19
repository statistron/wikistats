// API: https://github.com/statistron/wikistats
// Random quotes API

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  async function refreshQuote() {
    var url = "https://api.statistron.xyz/v1/wikistats?q=bulk";
    fetch(url)
      .then((response) => response.json())
      .then((jsonstat) => {
        console.log(jsonstat);

        //Check if div quote exists, if it does, remove it to display the next set of quotes

        var isdivquote = document.getElementsByClassName("div-quote");
        if (isdivquote.length > 0) {
          document.querySelectorAll(".div-quote").forEach((el) => el.remove());
        }

        // loop through the objects in the response array

        for (var i = 0; i < jsonstat.length; i += 1) {
          var div = document.createElement("div");

          div.className = "div-quote";

          div.innerHTML =
            '<figure class="quote"><blockquote>' +
            jsonstat[i].quote +
            "</blockquote><figcaption> &mdash;<cite>" +
            jsonstat[i].source +
            "</cite>  </figcaption></figure> <br>";

          document.body.appendChild(div);
        }
      });
  }
  button.addEventListener("click", refreshQuote);

  // call refreshQuote
  refreshQuote();
});