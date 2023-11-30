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
  const home = document.createElement("a");
  const Emmanuel = document.createElement("a");
  const Anthony = document.createElement("a");
  const Rachelle = document.createElement("a");
  const Krizette = document.createElement("a");
  const Kervy = document.createElement("a");
  const names = [
    "Home",
    "Emmanuel",
    "Anthony",
    "Rachelle",
    "Krizette",
    "Kervin",
  ];
  const members = [home, Emmanuel, Anthony, Rachelle, Krizette, Kervy];
  const links = [
    "./index.html",
    "./emmanuel.html",
    "./anthony.html",
    "./rach.html",
    "./kriz.html",
    "./kervin.html",
  ];
  let clicks = 0;
  burger.onclick = () => {
    clicks++;
    if (clicks % 2 === 1) {
      console.log("clicked me");
      for (let i = 0; i < members.length; i++) {
        members[i].href = links[i];
        const memberName = names[i];
        members[i].textContent = memberName;
        nav.append(members[i]);
        nav.style = "gap:1rem;";
      }
      return;
    }
    for (let i = 0; i < members.length; i++) {
      nav.removeChild(members[i]);
      nav.style = "gap:0;";
    }
  };
};

(() => {
  console.log("WAG BUKSAN, NAKAMAMATAY!!!");
  slowScroll(
    document.querySelector("body"),
    document.querySelector(".groupName")
  );
  burger();
})();
