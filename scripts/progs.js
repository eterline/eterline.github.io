const fetchDataURL = "../uploads/uploads-data.json";

const iconList = {
    "iso":          "../images/progs/windows.png",
    "iso-legacy":   "../images/progs/windows.png",
    "utils":        "../images/progs/download.png"
}

const printSoft = async (elemID) => {
    const ISOs = document.getElementById(elemID);

    let response = await fetch(fetchDataURL);

    if (response.ok) {
        let res = await response.json();

        for (const obj of res[elemID]) {
            const ISOcontainer = document.createElement("a");
            ISOcontainer.className = "prog-case-link";
            ISOcontainer.href = "/uploads/" + obj["file"];
    
            ISOcontainer.innerHTML = `
            <div class="prog-case">
                <img class="prog-case-icon m-3 self-center" src="${iconList[elemID]}">
                <H1 class="m-3 font-bold"> ${obj["name"]} </H1>
                <br>
                ${obj["description"]}
                <br>
                📎
            </div>
            `;
    
            ISOs.append(ISOcontainer);
        }
    }
}

printSoft("utils");
printSoft("iso");
printSoft("iso-legacy");