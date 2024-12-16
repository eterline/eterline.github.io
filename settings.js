
// =============== Inital logo area ===============

const logo = document.getElementById("site-logo");

const blinkLogo = async () => {
    const initialWidth = logo.offsetWidth;

    logo.style.width = `${initialWidth}px`;

    while (true) {
        logo.innerText = "Eterline";
        await new Promise(resolve => setTimeout(resolve, 1000));
        logo.innerText = "Eterline_";
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
};

const logoOnLoad = (time) => {
    const initialText = logo.innerText;

    for (let i = 0; i <= initialText.length; i++) {
        setTimeout(() => {logo.innerText = initialText.slice(0, i) + "|";}, (i * (time/initialText.length)));
    }

    setTimeout(() => {
        logo.innerText = initialText;
    }, (initialText.length + 1) * (time/initialText.length));
}

logoOnLoad(1000);
blinkLogo();

// =============== Page info area ===============

const settingsURL = "/settings.json";

const settings = (async () => {
    const response = await fetch(settingsURL);
    return response.ok ?  response.json() : {};
})();

const setContacts = (contactsMap) => {
    for (let id in contactsMap) {
        const contactElement = document.getElementById(id);
        contactElement.setAttribute('href', contactsMap[id]);
    }
};

const setNavCases = (navParamsMap, navClassName) => {
    const navs = document.getElementsByClassName(navClassName);

    const createCase = (caseName, caseLink, caseLogo = "") => {
        const Ncase = document.createElement("a");

        Ncase.setAttribute('href', caseLink);
        Ncase.innerHTML = `<div class="nav-case text-center">${caseLogo} ${caseName}</div>`;

        return Ncase;
    }

    for (let nav of navs) {
        for (let p of navParamsMap) {
            nav.append(createCase(p["name"], p["link"], p["logo"]));
        }
    }
}

settings.then((resolvedSettings) => {
    setNavCases(resolvedSettings["site-nav"], "site-nav");
    setContacts(resolvedSettings["contacts"]);
});

