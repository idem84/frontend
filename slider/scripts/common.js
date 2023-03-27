window.onload = function () {
  const faqList = document.getElementById("faqList");

  if (faqList) {
    const h3s = faqList.getElementsByTagName("h3");
    const divs = faqList.getElementsByTagName("div");

    if (h3s) {
      for (let i = 0; i < h3s.length; i++) {
        h3s[i].addEventListener("click", function (event) {
          event.preventDefault();

          if (!divs[i].classList.contains("active")) {
            divs[i].classList.add("active");
            divs[i].style.height = "auto";

            let height = divs[i].clientHeight + "px";

            divs[i].style.height = "0px";

            setTimeout(function () {
              divs[i].style.height = height;
            }, 0);
          } else {
            divs[i].style.height = "0px";

            divs[i].addEventListener(
              "transitionend",
              function () {
                divs[i].classList.remove("active");
              },
              {
                once: true,
              }
            );
          }
        });

        if (i === 0) {
          h3s[i].click();
        }
      }
    }
  }
};