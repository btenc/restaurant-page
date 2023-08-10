//creates the header, body area, and footer, then loads the default home page
import loadHome from "./body-pages/home";

function createHeader(){
    const headerContainer = document.createElement("div");
    headerContainer.setAttribute("id","header-container");

    const title = document.createElement("h1");
    title.classList.add("header-text");
    title.textContent = "TenCate's Famous";

    headerContainer.appendChild(title);
    headerContainer.appendChild(createNavigator("Home", "Menu", "Contact"));

    return headerContainer;
}

function createNavigator(str1, str2, str3){
    const navContainer = document.createElement("div");
    navContainer.setAttribute("id","nav-container");

    const navItems = [str1,str2,str3];

    navItems.forEach((item) => {
        const navItem = document.createElement("div");
        navItem.classList.add("nav-item");
        navItem.setAttribute('id',item);
        navItem.textContent = item;
        navItem.addEventListener("click", () => {
            changePage();
        });
        navContainer.appendChild(navItem);
    });
    return navContainer;
}

function createBodyContainer(){
    const bodyContainer = document.createElement("div");
    bodyContainer.setAttribute("id","body-container");

    return bodyContainer;
}

function createFooter(){
    const footerContainer = document.createElement("div");
    footerContainer.setAttribute("id","footer-container");

    const footerText = document.createElement('h2');
    footerText.classList.add("footer-text");
    footerText.textContent = "Copyright © 2023 William TenCate";

    footerContainer.appendChild(footerText);

    return footerContainer;
}

function initialLoad(){
    const body = document.querySelector("#content");
    body.innerHTML = "";
    body.appendChild(createHeader());
    body.appendChild(createBodyContainer());
    body.appendChild(createFooter());
    loadHome();
}

export default initialLoad;