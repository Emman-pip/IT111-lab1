const slowScroll = (element, target) => {
  element.onscroll = () => {
    const scrolltoTop = document.scrollingElement.scrollTop;

    const xvalue = "center";
    const scrollFactor = 0.3;
    const yValue = scrolltoTop * scrollFactor;
    target.style.backgroundPosition = xvalue + " " + yValue + "px";
  };
};

const burger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("a");
  const home = document.createElement("p");
  home.textContent = "Home";
  burger.onclick = () => {
    console.log("clicked me");
    nav.appendChild(home);
  };
};

(() => {
  alert("WAG BUKSAN, NAKAMAMATAY!!!");
  slowScroll(
    document.querySelector("body"),
    document.querySelector(".groupName")
  );
  burger();
})();
