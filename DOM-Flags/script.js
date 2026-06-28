

let mainFrame = document.getElementById("main-frame");
mainFrame.classList = "flex flex-col border-2 border-solid p-10 m-10 justify-center items-center";

let flagBox = document.createElement("div");
flagBox.classList = " p-4"

function getIndiaFlag() {
    let indiaFlag = document.createElement("div");
    indiaFlag.classList = "w-61 h-31 border-2 border-solid m-4";


    let indianOrange = document.createElement("div");
    indianOrange.classList = "bg-orange-500 w-60.2 h-10";

    let indianWhite = document.createElement("div");
    indianWhite.classList = "w-60.2 h-10 justify-items-center";

    let blueDisc = document.createElement("div");
    blueDisc.classList = "rounded-full bg-blue-600 w-10 h-10"

    indianWhite.appendChild(blueDisc);

    let indianGreen = document.createElement("div");
    indianGreen.classList = "w-60.2 h-10 bg-green-500";

    indiaFlag.appendChild(indianOrange);
    indiaFlag.appendChild(indianWhite);
    indiaFlag.appendChild(indianGreen);

    return indiaFlag;
}

function getCanadaFlag() {
    let canadaFlag = document.createElement("div");
    canadaFlag.classList = "w-60.8 h-30.8 border-2 flex m-4";

    let canadaRed = document.createElement("div");
    canadaRed.classList = "w-20 h-30 bg-red-600";

    let canadaWhite = document.createElement("div");
    canadaWhite.classList = "w-20 h-30 flex justify-center items-center";

    let canadaSymbol = document.createElement("div");
    canadaSymbol.classList = "rounded-full w-10 h-10 bg-red-600";

    canadaWhite.appendChild(canadaSymbol);

    let canadaRed2 = document.createElement("div");
    canadaRed2.classList = "w-20 h-30 bg-red-600";

    canadaFlag.appendChild(canadaRed);
    canadaFlag.appendChild(canadaWhite);
    canadaFlag.appendChild(canadaRed2);

    return canadaFlag;
}

function getGermanyFlag() {
    let germanyFlag = document.createElement("div");
    germanyFlag.classList = "w-61 h-31 border-2 border-solid m-4";


    let germanyBlack = document.createElement("div");
    germanyBlack.classList = "bg-black w-60.2 h-10";

    let germanyRed = document.createElement("div");
    germanyRed.classList = "w-60.2 h-10 bg-red-700";


    let germanyYellow = document.createElement("div");
    germanyYellow.classList = "w-60.2 h-10 bg-yellow-300";

    germanyFlag.appendChild(germanyBlack);
    germanyFlag.appendChild(germanyRed);
    germanyFlag.appendChild(germanyYellow);

    return germanyFlag;
}

function getFrenchFlag() {
    let frenchFlag = document.createElement("div");
    frenchFlag.classList = "w-60.8 h-30.8 flex border-2 m-4";

    let frenchBlue = document.createElement("div");
    frenchBlue.classList = "bg-blue-800 h-30 w-20";

    let frenchWhite = document.createElement("div");
    frenchWhite.classList = "h-30 w-20";

    let frenchRed = document.createElement("div");
    frenchRed.classList = "bg-red-700 w-20 h-30";


    frenchFlag.appendChild(frenchBlue);
    frenchFlag.appendChild(frenchWhite);
    frenchFlag.appendChild(frenchRed);

    return frenchFlag;
}

function getItalyFlag() {
    let italyFlag = document.createElement("div");
    italyFlag.classList = "w-60.8 h-30.8 flex border-2 m-4";

    let italyGreen = document.createElement("div");
    italyGreen.classList = "w-20 h-30 bg-green-700";

    let italyWhite = document.createElement("div");
    italyWhite.classList = "w-20 h-30";

    let italyRed = document.createElement("div");
    italyRed.classList = "bg-red-800 w-20 h-30";

    italyFlag.appendChild(italyGreen);
    italyFlag.appendChild(italyWhite);
    italyFlag.appendChild(italyRed);

    return italyFlag;
}

function getJapanFlag() {
    let japanFlag = document.createElement("div");
    japanFlag.classList = "border-2 m-4 w-60.8 h-30.8"

    let japanWhite = document.createElement("div");
    japanWhite.classList = "w-60 h-30 flex justify-center items-center";

    let redDisc = document.createElement("div");
    redDisc.classList = "bg-red-600 rounded-full w-15 h-15"

    japanWhite.appendChild(redDisc);

    japanFlag.appendChild(japanWhite);
    return japanFlag;
}

function getSwitzerFlag() {
    let swizzFlag = document.createElement("div");
    swizzFlag.classList = "m-4 border-2 w-60.8 h-30.8";

    let swizzRed = document.createElement("div");
    swizzRed.classList = "bg-red-600 w-60 h-30 flex justify-center items-center";

    let whiteDisc = document.createElement("div");
    whiteDisc.classList = "bg-white w-15 h-15 rounded-full";

    swizzRed.appendChild(whiteDisc);

    swizzFlag.appendChild(swizzRed);

    return swizzFlag;
}

function getEuFlag() {
    let euFlag = document.createElement("div");
    euFlag.classList = "m-4 w-60.8 h-30.8 border-2";

    let euBlue = document.createElement("div");
    euBlue.classList = "bg-blue-500 w-60 h-30 flex justify-center items-center";

    let whiteDisc = document.createElement("div");
    whiteDisc.classList = "bg-white w-15 h-15 rounded-full";

    euBlue.appendChild(whiteDisc);

    euFlag.appendChild(euBlue);
    return euFlag;
}

let searchContainer = document.createElement("div");
searchContainer.classList = "flex";


let countryName;
flagBox.appendChild(getIndiaFlag());
let inputBar = document.createElement("input");
inputBar.classList = "w-50 h-10 border-2 m-2";

let searchButton = document.createElement("button");
searchButton.classList = "w-30 h-10 bg-green-300 m-2 rounded-sm";
searchButton.innerText = "Search Country";
searchButton.addEventListener("click", () => {
    let country = inputBar.value.toLowerCase();
    inputBar.value = "";
    countryName = country;
    flagBox.innerHTML = "";
    if (countryName == "canada") {
        flagBox.appendChild(getCanadaFlag());
    }
    else if (countryName == "germany") {
        flagBox.appendChild(getGermanyFlag());
    }
    else if (countryName == "france") {
        flagBox.appendChild(getFrenchFlag());

    }
    else if (countryName == "italy") {
        flagBox.appendChild(getItalyFlag());

    }
    else if (countryName == "japan") {
        flagBox.appendChild(getJapanFlag());

    }
    else if (countryName == "switzerland") {
        flagBox.appendChild(getSwitzerFlag());

    }
    else if (countryName == "eu") {
        flagBox.appendChild(getEuFlag());

    }
    else {
        flagBox.appendChild(getIndiaFlag());

    }
});

searchContainer.appendChild(inputBar);
searchContainer.appendChild(searchButton);

mainFrame.appendChild(searchContainer);
mainFrame.appendChild(flagBox);