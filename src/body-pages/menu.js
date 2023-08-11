function loadMenu(){
    const container = document.querySelector("#body-container");
    container.innerHTML = "";

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.classList.add("body-box");

    createMenu(menu, "Mac and Cheese","Pizza Margherita","Steak And Fries", "Stuffed Manicotti","Baked Spaghetti","Pasta Puttanesca");

    container.appendChild(menu);
}

function createMenu(menu, str1, str2, str3, str4, str5, str6){
    const menuItems = [str1,str2,str3,str4, str5, str6];

    menuItems.forEach((item) => {
        const menuItem = document.createElement("div");
        const img = document.createElement("div");
        img.classList.add("food-img");
        menuItem.classList.add("menu-item");
        menuItem.setAttribute('id',item);
        menuItem.textContent = item;
        menuItem.appendChild(img);

        menu.appendChild(menuItem);

    });
}

export default loadMenu;