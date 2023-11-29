const slowScroll = (element, target) => {
  element.onscroll = () => {
    const scrolltoTop = document.scrollingElement.scrollTop;

    const xvalue = "center";
    const scrollFactor = 0.3;
    const yValue = scrolltoTop * scrollFactor;
    target.style.backgroundPosition = xvalue + " " + yValue + "px";
  };
};

// creating a prototype that appends elements to the nav bar
const burger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const home = document.createElement("p");
  const Emmanuel = document.createElement("p");
  const Anthony = document.createElement("p");
  const Rachelle = document.createElement("p");
  const Krizette = document.createElement("p");
  const Kervy = document.createElement("p");
  const members = [home, Emmanuel, Anthony, Rachelle, Krizette, Kervy];

  home.textContent = "Home";
  burger.onclick = () => {
    console.log("clicked me");
    members.forEach((e) => nav.append(e));
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
