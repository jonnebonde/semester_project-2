




export default function renderNavBar() {
  const { pathname } = document.location;

  const topNavContainer = document.querySelector(".top-nav-container");

  const topNavUl = document.createElement("ul");
  topNavUl.classList.add("navbar-nav", "flex-row");

  const signUpLi = document.createElement("li");
  signUpLi.classList.add("nav-item");

  const signUpLink = document.createElement("a");
  signUpLink.classList.add("navlink", "link-dark", "link-offset-1", "link-underline-opacity-0", "link-underline-opacity-100-hover", "primary-link");
  signUpLink.setAttribute("href", "login-and-signin.html?signup=true");
  signUpLink.textContent = "Sign up";


  if( pathname === "login-and-signin.html?signup=true") {
    signUpLink.classList.add("link-underline-opacity-100");
    signUpLink.setAttribute("aria-current", "page");
  }
  signUpLi.appendChild(signUpLink);


  const loginLi = document.createElement("li");
  loginLi.classList.add("nav-item");

  const loginLink = document.createElement("a");
  loginLink.classList.add("navlink", "link-light", "link-offset-1", "link-underline-opacity-0", "link-underline-opacity-100-hover", "secondary-link");
  loginLink.setAttribute("href", "login-and-signin.html?login=true");
  loginLink.textContent = "Login";

  if( pathname === "login-and-signin.html?login=true") {
    loginLink.classList.add("link-underline-opacity-100");
    loginLink.setAttribute("aria-current", "page");
  }

  loginLi.appendChild(loginLink);

  topNavUl.appendChild(signUpLi);
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

  if( pathname === "index.html") {
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

  const token = false;

  if (token) {

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






