// const bars = document.getElementsByClassName('.bars');
const barss = document.querySelector(".bars");
const navElements = document.querySelector(".nav-elements");
const crossed = document.querySelector(".crossed");

barss.addEventListener("click", () => {
  crossed.classList.toggle("active");
  navElements.classList.toggle("active");
  document.body.classList.toggle("fixed-screen");
});

const close = () => {
  document.body.classList.remove("fixed-screen");
  crossed.classList.remove("active");
  navElements.classList.remove("active");
};

const listItem = (index, info, link) => {
  let x = `a${index}`;
  x = document.createElement("a");
  x.setAttribute("href", `#${link}`);
  x.textContent = info;
  x.addEventListener("click", () => {
    close();
  });
  return x;
};

const li0 = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");

li0.appendChild(listItem(0, "Portfolio", "card"));
li1.appendChild(listItem(1, "About", "about"));
li2.appendChild(listItem(2, "Contact", "contact"));

const ul = document.createElement("ul");

ul.appendChild(li0);
ul.appendChild(li1);
ul.appendChild(li2);

crossed.innerHTML = "";
crossed.appendChild(ul);

const cls = document.createElement("div");
cls.classList.add("closeArrow");
cls.innerHTML = "&#10006;";
crossed.appendChild(cls);
cls.addEventListener("click", () => {
  close();
});
