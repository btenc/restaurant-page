function loadContact(){
    const container = document.querySelector("#body-container");
    container.innerHTML = "";

    const contactInfoBox = document.createElement("div");
    contactInfoBox.classList.add("contact-box");
    contactInfoBox.classList.add("body-box");

    const para1 = document.createElement('p');
    para1.textContent = 'Restaurant: 166th Ave, Brooklyn, NY';

    const para2 = document.createElement('p');
    para2.textContent = "Phone: 201-321-7654";

    contactInfoBox.appendChild(para1);
    contactInfoBox.appendChild(para2);

    container.appendChild(contactInfoBox);
}

export default loadContact;