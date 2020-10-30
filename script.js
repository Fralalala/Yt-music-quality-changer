//For some reason, I'm getting the element too early so I had to use a setTimeout.
//Somehow the 0 ms delay is long enough for me to get the description

//For some reason again, the code doesnt work after refreshing the pages to check if it work.
//SO I had to put an actual number in the setTimeout

setTimeout(() => {
  //#region Info Checking

  //The Video Title
  const videoTitle = document.getElementById("info-contents").firstChild
    .childNodes[1].childNodes[3].textContent;

  const videoDescription = document.getElementById("description").textContent; //The main description

  //Show More Btn
  let moreBtn = document.getElementById("meta-contents").firstChild
    .childNodes[1].lastChild.childNodes[7];

  moreBtn.click();

  //The other half of the description which sometimes is not present
  const videoLowerDescription = document.getElementById("collapsible")
    .textContent;
  //#endregion

  let isSecondDescriptionPresent = videoLowerDescription == "" ? false : true;

  let regex = /lyrics|song|music|lyric/i;

  let isMusicBySecondDescription = isSecondDescriptionPresent
    ? regex.test(videoLowerDescription)
    : false;

  let isMusicByTitle = regex.test(videoTitle);

  let isMusicByDescription = regex.test(videoDescription);

  let adSkipBtn = document.getElementsByClassName("ytp-ad-skip-button-slot");

  const isAdOnDisplay = adSkipBtn.length != 0;

  if (isAdOnDisplay) {
    adSkipBtn = adSkipBtn[0].firstChild.firstChild;

    adBtn.click();
  }

  setTimeout(() => {
    setQuality(
      isMusicByDescription,
      isMusicBySecondDescription,
      isMusicByTitle
    );
  }, 500);
}, 6000);

setInterval;

const setQuality = (...args) => {
  if (args.includes(true)) {
    let btn = document.getElementsByClassName("ytp-settings-button")[0]; //settings button

    btn.click();

    let btn2 = document.getElementsByClassName("ytp-menuitem"); //popup from settings
    btn2 = btn2[btn2.length - 1];

    btn2.click();

    let btn3 = document.getElementsByClassName("ytp-popup")[1].lastChild // popup from popup which contains the quality
      .lastChild;

    btn3 = btn3.childNodes[btn3.childElementCount - 2]; // -2 of len since 144p is always 2nd to the last

    btn3.click();
  }
};
