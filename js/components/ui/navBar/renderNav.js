import { getUserInfoFromStorage } from "../../../utils/storage/userStorage.js";



/* const token = getUserInfoFromStorage().token; */
const token = false;



console.log(token);



export default function renderNavBar() {
  const { pathname } = document.location;

  const currentUrl = new URLSearchParams(window.location.search);

  const register = currentUrl.get("register");


  const topNavContainer = document.querySelector(".top-nav-container");

  const topNavUl = document.createElement("ul");
  topNavUl.classList.add("navbar-nav", "flex-row");

  const registerLi = document.createElement("li");
  registerLi.classList.add("nav-item");

  const registerLink = document.createElement("a");
  registerLink.classList.add("navlink", "link-dark", "link-offset-1", "link-underline-opacity-0", "link-underline-opacity-100-hover", "primary-link");
  registerLink.setAttribute("href", "login-and-register.html?register=true");
  registerLink.textContent = "Register";


  if(register === "true") {
    registerLink.classList.add("link-underline-opacity-100");
    registerLink.setAttribute("aria-current", "page");
  }
  registerLi.appendChild(registerLink);


  const loginLi = document.createElement("li");
  loginLi.classList.add("nav-item");

  const loginLink = document.createElement("a");
  loginLink.classList.add("navlink", "link-light", "link-offset-1", "link-underline-opacity-0", "link-underline-opacity-100-hover", "secondary-link");
  loginLink.setAttribute("href", "login-and-register.html?register=false");
  loginLink.textContent = "Login";

  if(register === "false") {
    loginLink.classList.add("link-underline-opacity-100");
    loginLink.setAttribute("aria-current", "page");
  }

  loginLi.appendChild(loginLink);

  topNavUl.appendChild(registerLi);
  topNavUl.appendChild(loginLi);

  topNavContainer.appendChild(topNavUl);


  const bottomNavContainer = document.querySelector(".bottom-nav-container");

  const bottomNavUl = document.createElement("ul");
  bottomNavUl.classList.add("navbar-nav", "flex-row", "justify-content-between", "gap-5");

  const homeLi = document.createElement("li");
  homeLi.classList.add("nav-item");

  const homeLink = document.createElement("a");
  homeLink.classList.add("navlink", "link-light", "link-offset-1", "link-underline-opacity-0", "link-underline-opacity-100-hover");
  homeLink.setAttribute("href", "index.html");
  homeLink.textContent = "Home";



  if( pathname === "/index.html") {
    	
    

    homeLink.classList.add("link-underline-opacity-100");
    homeLink.setAttribute("aria-current", "page");
  }

  homeLi.appendChild(homeLink);

  const buyLi = document.createElement("li");
  buyLi.classList.add("nav-item");

  const buyLink = document.createElement("a");
  buyLink.classList.add("navlink", "link-light", "link-offset-1", "link-underline-opacity-0", "link-underline-opacity-100-hover");
  buyLink.setAttribute("href", "listings.html");
  buyLink.textContent = "Buy";

  if( pathname === "listings.html") {
    buyLink.classList.add("link-underline-opacity-100");
    buyLink.setAttribute("aria-current", "page");
  }

  buyLi.appendChild(buyLink);

  
  bottomNavUl.appendChild(homeLi);
  bottomNavUl.appendChild(buyLi);

  bottomNavContainer.appendChild(bottomNavUl);



  if (token) {
    console.log("token");


    const sellLi = document.createElement("li");
    sellLi.classList.add("nav-item");

    const sellLink = document.createElement("a");
    sellLink.classList.add("navlink", "text-light");
    sellLink.setAttribute("href", "sell.html");
    sellLink.textContent = "Sell";

    if( pathname === "sell.html") {
      sellLink.classList.add("active-class");
      sellLink.setAttribute("aria-current", "page");
    }

    bottomNavUl.removeChild(buyLi)

    sellLi.appendChild(sellLink);
    
    
    bottomNavUl.appendChild(sellLi);
    bottomNavUl.appendChild(buyLi);
  }



}






