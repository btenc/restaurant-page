function loadHome(){
    const container = document.querySelector("#body-container");
    container.innerHTML = "";

    const homeInfoBox = document.createElement("div");
    homeInfoBox.classList.add("home-box");
    homeInfoBox.classList.add("body-box");

    const para1 = document.createElement('p');
    para1.textContent = '"This is the best restaurant in the world!" - Me';

    const img = document.createElement("div");
    img.classList.add("home-page-image");

    const para2 = document.createElement('p');
    para2.textContent = "Come try our world famous cuisine."

    homeInfoBox.appendChild(para1);
    homeInfoBox.appendChild(img);
    homeInfoBox.appendChild(para2);

    container.appendChild(homeInfoBox);
}

export default loadHome;
