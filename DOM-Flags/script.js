

let mainFrame = document.getElementById("main-frame");
mainFrame.classList = "flex p-0";


//             1st One

let redColor = document.createElement("div");
redColor.classList = "bg-red-500 w-60 h-20";

let whiteColor = document.createElement("div");
whiteColor.classList = "w-60 h-20";

let indonesia = document.createElement("div");
indonesia.classList = "border-2 w-61 h-40 m-20";
indonesia.appendChild(redColor);
indonesia.appendChild(whiteColor);



//             2nd One


let germany = document.createElement("div");
germany.classList = "w-60.5 h-40.2 m-20 border-2"


let blackColor = document.createElement("div");
blackColor.classList = "bg-black w-60 h-13";

let germanredColor = document.createElement("div");
germanredColor.classList = "bg-red-750 w-60 h-13";

let yellowColor = document.createElement("div");
yellowColor.classList = "bg-yellow-300 w-60 h-13";


germany.appendChild(blackColor);
germany.appendChild(germanredColor);
germany.appendChild(yellowColor);




//             3rd One


let bulgaria = document.createElement("div");
bulgaria.classList = "w-60.8 h-40.2 m-20 border-2"



let bulgariawhiteColor = document.createElement("div");
bulgariawhiteColor.classList = "w-60 h-13";

let bulgariaGreenColor = document.createElement("div");
bulgariaGreenColor.classList = "bg-green-500 w-60 h-13";

let bulgariaredColor = document.createElement("div");
bulgariaredColor.classList = "bg-red-500 w-60 h-13";

bulgaria.appendChild(bulgariawhiteColor);
bulgaria.appendChild(bulgariaGreenColor);
bulgaria.appendChild(bulgariaredColor);


//             4th One


let mainFrame2 = document.getElementById("main-frame-2");
mainFrame2.classList = "flex p-0";


let poland = document.createElement("div");
poland.classList = "border-2 w-61 h-40.5 m-20";

let polandredColor = document.createElement("div");
polandredColor.classList = "bg-red-500 w-60 h-20";

let polandwhiteColor = document.createElement("div");
polandwhiteColor.classList = "w-60 h-20";


poland.appendChild(polandwhiteColor);
poland.appendChild(polandredColor);



//             5th One


let nether = document.createElement("div");
nether.classList = "w-60.8 h-40 m-20 border-2"


let netherMaroonColor = document.createElement("div");
netherMaroonColor.classList = "w-60 h-13 bg-red-700";

let netherwhiteColor = document.createElement("div");
netherwhiteColor.classList = "w-60 h-13";

let netherBlueColor = document.createElement("div");
netherBlueColor.classList = "bg-blue-800 w-60 h-13";

nether.appendChild(netherMaroonColor);
nether.appendChild(netherwhiteColor);
nether.appendChild(netherBlueColor);



//             6th One


let argentina = document.createElement("div");
argentina.classList = "w-60.8 h-40 m-20 border-2"


let argentinaBlueColor = document.createElement("div");
argentinaBlueColor.classList = "bg-blue-300 w-60 h-13"


let argentinawhiteColor = document.createElement("div");
argentinawhiteColor.classList = "w-60 h-13 flex justify-center items-center";

let argentinaYellowDisc=document.createElement("div");
argentinaYellowDisc.classList="rounded-full bg-yellow-300 w-10 h-10";

argentinawhiteColor.appendChild(argentinaYellowDisc);

let argentinaBlueColor2 = document.createElement("div");
argentinaBlueColor2.classList = "bg-blue-300 w-60 h-13"


argentina.appendChild(argentinaBlueColor);
argentina.appendChild(argentinawhiteColor);
argentina.appendChild(argentinaBlueColor2);




//             7th One


let mainFrame3 = document.getElementById("main-frame-3");
mainFrame3.classList = "flex p-0";


let morocco=document.createElement("div");
morocco.classList="bg-red-800 w-60 h-40 m-20 border-2 flex justify-center items-center";


let moroccoGreenDisc=document.createElement("div");
moroccoGreenDisc.classList="bg-green-800 rounded-full w-10 h-10"
morocco.appendChild(moroccoGreenDisc);


//             8th One

let tunesia=document.createElement("div");
tunesia.classList="bg-red-600 w-60 h-40 m-20 border-2 flex justify-center items-center";

let tunesiaWhiteDisc=document.createElement("div");
tunesiaWhiteDisc.classList="bg-white rounded-full w-10 h-10";

tunesia.appendChild(tunesiaWhiteDisc);



mainFrame.appendChild(indonesia);
mainFrame.appendChild(germany);
mainFrame.appendChild(bulgaria);



mainFrame2.appendChild(poland);
mainFrame2.appendChild(nether);
mainFrame2.appendChild(argentina);



mainFrame3.appendChild(morocco);
mainFrame3.appendChild(tunesia);