// Starting of declear section

let phone = document.getElementById("phone-btn");
let message = document.getElementById("message-btn");
let number = document.getElementById("num-btn");
let send = document.getElementById("show-content");
let general = document.getElementById("sub-final-info-two");
let point = document.getElementById("show-message");
let see = document.getElementById("number");
let dialedButton = document.getElementById("btn1");
let blockButton = document.getElementById("btn2");
let showBlock = document.getElementById("block");
let showNum = document.getElementById("show-num");
let blocked = document.getElementById("block");
let homebtn = document.getElementById("link-home");
let order = document.getElementById("order");
let profilebtn = document.getElementById("link-profile");
let customerbtn = document.getElementById("link-customer");
let messagebtn = document.getElementById("link-message");
let transbtn = document.getElementById("link-transaction");
let orderbtn = document.getElementById("link-order");
let chartbtn = document.getElementById("link-chart");
let entertainbtn = document.getElementById("link-enteraiment");
let newsbtn = document.getElementById("link-news");
let logoutbtn = document.getElementById("link-logout");
let all = document.getElementById("all-content");

let body = document.getElementById("body");
let containertwo = document.getElementById("container-two");

let entertaimentcon = document.getElementById("entertaimentcon");
// let menu = document.getElementById("menucon");
let small = document.getElementById("smallText");
// let logsign = document.getElementById("logsbtn");
let logwrap = document.getElementById("logsignwrap");
let login = document.getElementById("loginbtn");
let sign = document.getElementById("signbtn");
let submit = document.getElementById("iconbtn");
let pagewrap = document.getElementById("pagewrap");
let wrapclose = document.getElementById("wrapclose");
let logsbtn = document.getElementById("logsbtn");
let wrapsign = document.getElementById("wrapsign");
let signpageclose = document.getElementById("sign-page-close");
let closesignpage = document.getElementById("hide");
let closelogin = document.getElementById("closelogin");
let username = document.getElementById("login-input1");
let password = document.getElementById("login-input2");
let next = document.getElementById("next");
let pagewrap1 = document.getElementById("pagewrap1");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let mydetail = document.getElementById(`mydetails`);
let topall = document.getElementById("topall");
let main = document.getElementById("main");
let customerser = document.getElementById("customerser");
let sms = document.getElementById("sms");
let newscon = document.getElementById("newscon");
let chartcon = document.getElementById("chartcon");
let shopping = document.getElementById("newordercon");

// End of declear section

// Starting of ALL ABOUT ORDER PAGE  section

// |||||||||||-----Starting declear section----|||||||

let paytext = document.getElementById("paytext");
let cardlist = document.getElementById("cardlist");
let payclose = document.getElementById("payclose");
let mastercard = document.getElementById("mastercard");
let vervecard = document.getElementById("vervecard");
let visacard = document.getElementById("visacard");
let cardinstructioncon = document.getElementById("cardinstructioncon");
let cardinstructionclose = document.getElementById("cardinstructionclose");
let cardinfocon = document.getElementById("cardinfocon");
let cardinfoclose = document.getElementById("cardinfoclose");
let placeordertext = document.getElementById("placeordertext");
let placeorderclose = document.getElementById("placeorderclose");
let placeordercon = document.getElementById("placeordercon");
let morerequest = document.getElementById("morerequest");
let requestcon = document.getElementById("requestcon");
let requestclose = document.getElementById("requestclose");
let proitup1 = document.getElementById("proitup1");
let proitup2 = document.getElementById("proitup2");
let proitup3 = document.getElementById("proitup3");
let proitup4 = document.getElementById("proitup4");
let proitup5 = document.getElementById("proitup5");
let upprocon = document.getElementById("upprocon");
let upproclose = document.getElementById("upproclose");
let hplist = document.getElementById("hplist");
let dellist = document.getElementById("dellist");
let applelist = document.getElementById("applelist");
let samsunglist = document.getElementById("samsunglist");
let lenovolist = document.getElementById("lenovolist");
// middleproc section
let proitmid1 = document.getElementById("proitmid1");
let proitmid2 = document.getElementById("proitmid2");
let proitmid3 = document.getElementById("proitmid3");
let proitmid4 = document.getElementById("proitmid4");
let proitmid5 = document.getElementById("proitmid5");
let midprocon = document.getElementById("midprocon");
let midproclose = document.getElementById("midproclose");
let headsetlist = document.getElementById("headsetlist");
let powerbanklist = document.getElementById("powerbanklist");
let samsungphonelist = document.getElementById("samsungphonelist");
let iphonelist = document.getElementById("iphonelist");
let nokialist = document.getElementById("nokialist");

// downlast section
let downprocon = document.getElementById("downprocon");
let downproclose = document.getElementById("downproclose");
let proitlast1 = document.getElementById("proitlast1");
let proitlast2 = document.getElementById("proitlast2");
let proitlast3 = document.getElementById("proitlast3");
let proitlast4 = document.getElementById("proitlast4");
let proitlast5 = document.getElementById("proitlast5");
let printerlist = document.getElementById("printerlist");
let lglist = document.getElementById("lglist");
let airconlist = document.getElementById("airconlist");
let friglist = document.getElementById("friglist");
let smartlist = document.getElementById("smartlist");
// |||||||||||-----Ending declear section----|||||||
// ||||---Starting of command Selection---|||||
// downlast section
downproclose.addEventListener("click", () => {
  downprocon.style.display = "none";
});
proitlast1.addEventListener("click", () => {
  downprocon.style.display = "block ";
  printerlist.style.display = "flex";
  lglist.style.display = "none";
  airconlist.style.display = "none";
  friglist.style.display = "none";
  smartlist.style.display = "none";
});
proitlast2.addEventListener("click", () => {
  downprocon.style.display = "block ";
  printerlist.style.display = "none";
  lglist.style.display = "flex";
  airconlist.style.display = "none";
  friglist.style.display = "none";
  smartlist.style.display = "none";
});
proitlast3.addEventListener("click", () => {
  downprocon.style.display = "block ";
  printerlist.style.display = "none";
  lglist.style.display = "none";
  airconlist.style.display = "flex";
  friglist.style.display = "none";
  smartlist.style.display = "none";
});
proitlast4.addEventListener("click", () => {
  downprocon.style.display = "block ";
  printerlist.style.display = "none";
  lglist.style.display = "none";
  airconlist.style.display = "none";
  friglist.style.display = "flex";
  smartlist.style.display = "none";
});
proitlast5.addEventListener("click", () => {
  downprocon.style.display = "block ";
  printerlist.style.display = "none";
  lglist.style.display = "none";
  airconlist.style.display = "none";
  friglist.style.display = "none";
  smartlist.style.display = "flex";
});
// middle section
midproclose.addEventListener("click", () => {
  midprocon.style.display = "none";
});
proitmid1.addEventListener("click", () => {
  midprocon.style.display = "block";
  headsetlist.style.display = "flex";
  powerbanklist.style.display = "none";
  samsungphonelist.style.display = "none";
  iphonelist.style.display = "none";
  nokialist.style.display = "none";
});
proitmid2.addEventListener("click", () => {
  midprocon.style.display = "block";
  headsetlist.style.display = "none";
  powerbanklist.style.display = "flex";
  samsungphonelist.style.display = "none";
  iphonelist.style.display = "none";
  nokialist.style.display = "none";
});
proitmid3.addEventListener("click", () => {
  midprocon.style.display = "block";
  headsetlist.style.display = "none";
  powerbanklist.style.display = "none";
  samsungphonelist.style.display = "flex";
  iphonelist.style.display = "none";
  nokialist.style.display = "none";
});
proitmid4.addEventListener("click", () => {
  midprocon.style.display = "block";
  headsetlist.style.display = "none";
  powerbanklist.style.display = "none";
  samsungphonelist.style.display = "none";
  iphonelist.style.display = "flex";
  nokialist.style.display = "none";
});
proitmid5.addEventListener("click", () => {
  midprocon.style.display = "block";
  headsetlist.style.display = "none";
  powerbanklist.style.display = "none";
  samsungphonelist.style.display = "none";
  iphonelist.style.display = "none";
  nokialist.style.display = "flex";
});

proitup1.addEventListener("click", () => {
  upprocon.style.display = "block";
  hplist.style.display = "flex";
  dellist.style.display = "none";
  applelist.style.display = "none";
  samsunglist.style.display = "none";
  lenovolist.style.display = "none";
});
proitup2.addEventListener("click", () => {
  upprocon.style.display = "block";
  hplist.style.display = "none";
  dellist.style.display = "flex";
  applelist.style.display = "none";
  samsunglist.style.display = "none";
  lenovolist.style.display = "none";
});
proitup3.addEventListener("click", () => {
  upprocon.style.display = "block";
  hplist.style.display = "none";
  dellist.style.display = "none";
  applelist.style.display = "flex";
  samsunglist.style.display = "none";
  lenovolist.style.display = "none";
});
proitup4.addEventListener("click", () => {
  upprocon.style.display = "block";
  samsunglist.style.display = "flex";
  hplist.style.display = "none";
  dellist.style.display = "none";
  applelist.style.display = "none";
  lenovolist.style.display = "none";
});
proitup5.addEventListener("click", () => {
  upprocon.style.display = "block";
  samsunglist.style.display = "none";
  hplist.style.display = "none";
  dellist.style.display = "none";
  applelist.style.display = "none";
  lenovolist.style.display = "flex";
});

upproclose.addEventListener("click", () => {
  upprocon.style.display = "none";
});

morerequest.addEventListener("click", () => {
  requestcon.style.display = "block";
});
requestclose.addEventListener("click", () => {
  requestcon.style.display = "none";
});
placeordertext.addEventListener("click", () => {
  placeordercon.style.display = "block";
});
placeorderclose.addEventListener("click", () => {
  placeordercon.style.display = "none";
});

paytext.addEventListener("click", () => {
  cardlist.style.display = "block";
});
payclose.addEventListener("click", () => {
  cardlist.style.display = "none";
});
mastercard.addEventListener("click", () => {
  cardinfocon.style.display = "block";
});
vervecard.addEventListener("click", () => {
  cardinfocon.style.display = "block";
});
visacard.addEventListener("click", () => {
  cardinfocon.style.display = "block";
});
cardinfoclose.addEventListener("click", () => {
  cardinfocon.style.display = "none";
});
let hover = false;
cardinfocon.addEventListener("mouseover", () => {
  if (hover !== true) {
    cardinstructioncon.style.display = "block";
  }
  hover = true;
});
cardinstructionclose.addEventListener("click", () => {
  cardinstructioncon.style.display = "none";
});
let change = document.getElementById("change");
// |||---Ending of command section---|||
// Ending of ALL ABOUT ORDER section

// Starting of  Command section
change.addEventListener("click", () => {
  alert("Hello! Welcome to our world of Coding");
});
phone.style.borderBottom = "green solid 4px";
phone.style.color = "green";
showNum.style.display = "block";
blocked.style.display = "none";
homebtn.style.borderBottom = "4px solid green";
homebtn.style.paddingBottom = "10px";
dialedButton.style.borderBottom = "4px solid green";
signpageclose.style.display = "none";
pagewrap.style.display = `none`;
logwrap.style.display = "none";
closelogin.style.display = "none";
dialedButton.style.color = "green";
submit.addEventListener("click", function () {
  empty();
  comfirm();
});

function empty() {
  if ((username.value = " ")) {
    alert("Please! Fill the space provided");
  } else if ((password.value = " ")) {
    alert("Please! Fill the space provided");
  } else {
    alert("Sorry! The input you Entered is not correct");
  }
}

// empty();
// function comfirm() {
//   if (username.value != password.value) {
//     alert("Sorry! The Username and Passeword Entrered is not correct");
//   } else {
//     alert("Loading...");
//   }
// }

//this section is  online for now

newsbtn.addEventListener(
  "mouseover",
  () => {
    newscon.style.display = "flex";
    entertaimentcon.style.display = "none";
    chartcon.style.display = "none";
    chartbtn.style.borderBottom = "none";
    newsbtn.style.borderBottom = "4px solid green";
    main.style.display = "none";
    topall.style.display = "none";
    customerser.style.display = "none";
    customerbtn.style.borderBottom = "none";
    orderbtn.style.borderBottom = "none";
    sms.style.display = "none";
    sms.style.borderBottom = "none";
    shopping.style.display = "none";
  },
  newsbtn.addEventListener("mouseleave", () => {
    newsbtn.style.borderBottom = "none";
  })
);
entertainbtn.addEventListener(
  "mouseover",
  () => {
    entertaimentcon.style.display = "flex";
    chartcon.style.display = "none";
    chartbtn.style.borderBottom = "none";
    entertainbtn.style.borderBottom = "4px solid green";
    main.style.display = "none";
    topall.style.display = "none";
    customerser.style.display = "none";
    customerbtn.style.borderBottom = "none";
    orderbtn.style.borderBottom = "none";
    sms.style.display = "none";
    sms.style.borderBottom = "none";
    newscon.style.display = "none";
    shopping.style.display = "none";
  },
  entertainbtn.addEventListener("mouseleave", () => {
    entertainbtn.style.borderBottom = "none";
  })
);

chartbtn.addEventListener(
  "mousemove",
  () => {
    chartcon.style.display = "flex";
    entertaimentcon.style.display = "none";
    chartbtn.style.borderBottom = "4px solid green";
    main.style.display = "none";
    shopping.style.display = "none";
    topall.style.display = "none";
    customerser.style.display = "none";
    customerbtn.style.borderBottom = "none";
    orderbtn.style.borderBottom = "none";
    sms.style.display = "none";
    sms.style.borderBottom = "none";
    newscon.style.display = "none";
  },
  chartbtn.addEventListener("mouseleave", () => {
    chartbtn.style.borderBottom = "none";
  })
);

orderbtn.addEventListener("mouseover", () => {
  shopping.style.display = "flex";
  orderbtn.style.borderBottom = "4px solid green";
  main.style.display = "none";
  topall.style.display = "none";
  newscon.style.display = "none";
  customerser.style.display = "none";
  customerbtn.style.borderBottom = "none";
  sms.style.display = "none";
  chartcon.style.display = "none";
  sms.style.borderBottom = "none";
});
homebtn.addEventListener(
  "mouseover",
  function () {
    main.style.display = "block";
    topall.style.display = "none";
    customerser.style.display = "none";
    customerbtn.style.borderBottom = "none";
    homebtn.style.borderBottom = "4px solid green";
    sms.style.display = "none";
    sms.style.borderBottom = "none";
    profilebtn.style.borderBottom = "none";
    newscon.style.display = "none";
    shopping.style.display = "none";
  },
  homebtn.addEventListener("mouseleave", function () {
    main.style.display = "block";
    topall.style.display = "none";
  })
);

profilebtn.addEventListener(
  "mouseover",
  function () {
    main.style.display = "none";
    homebtn.style.borderBottom = "none";
    profilebtn.style.borderBottom = "4px solid green";
    topall.style.display = "flex";
    customerser.style.display = "none";
    customerbtn.style.borderBottom = "none";
    newscon.style.display = "none";
    shopping.style.display = "none";
  },
  profilebtn.addEventListener("mouseleave", function () {
    main.style.display = "none";
    homebtn.style.borderBottom = "none";
    profilebtn.style.borderBottom = "4px solid green";
    topall.style.display = "block";
    customerser.style.display = "none";
  })
);

customerbtn.addEventListener(
  "mouseover",
  function () {
    main.style.display = "none";
    homebtn.style.borderBottom = "none";
    profilebtn.style.borderBottom = "none";
    customerbtn.style.borderBottom = "4px solid green";
    topall.style.display = "none";
    customerser.style.display = "flex";
    sms.style.display = "none";
    newscon.style.display = "none";
    shopping.style.display = "none";
  },
  customerbtn.addEventListener("mouseleave", function () {
    main.style.display = "none";
    homebtn.style.borderBottom = "none";
    profilebtn.style.borderBottom = "none";
    topall.style.display = "none";
    customerser.style.display = "flex";
  })
);

messagebtn.addEventListener(
  "mouseover",
  function () {
    main.style.display = "none";
    homebtn.style.borderBottom = "none";
    profilebtn.style.borderBottom = "none";
    topall.style.display = "none";
    customerser.style.display = "none";
    customerbtn.style.borderBottom = "none";
    sms.style.display = "block";
    messagebtn.style.borderBottom = "4px solid green";
    orderbtn.style.borderBottom = "none";
    newscon.style.display = "none";
    shopping.style.display = "none";
  },
  messagebtn.addEventListener("mouseleave", function () {
    messagebtn.style.borderBottom = "none";
  })
);

// the above section is offline for now

signpageclose.addEventListener("mouseover", function () {
  signpageclose.style.cursor = "pointer";
  closesignpage.style.display = "block";
});
signpageclose.addEventListener("mouseleave", function () {
  // signpageclose.style.cursor = "pointer";
  closesignpage.style.display = "none";
});

signpageclose.addEventListener("click", function () {
  wrapsign.style.display = "none";
  signpageclose.style.display = "none";
});

// starting of signin section
sign.addEventListener("click", function () {
  wrapsign.style.display = "block";
  pagewrap.style.display = "none";
  signpageclose.style.display = "block";
  logwrap.style.display = "none";
});
// Ending of signin section

// starting of login page section
login.addEventListener("click", function () {
  pagewrap.style.display = `block`;
  logwrap.style.display = "none";
  wrapsign.style.display = "none";
});

wrapclose.addEventListener("click", function () {
  pagewrap.style.display = "none";
  // logwrap.style.display = "block";
  signpageclose.style.display = "none";
});
wrapclose.addEventListener("mouseover", function () {
  // pagewrap.style.display = "none";
  // logwrap.style.display = "block";
  // signpageclose.style.display = "none";
  closelogin.style.display = "block";
});
wrapclose.addEventListener("mouseleave", function () {
  // pagewrap.style.display = "none";
  // logwrap.style.display = "block";
  // signpageclose.style.display = "none";
  closelogin.style.display = "none";
});

small.addEventListener("click", function () {
  logwrap.style.display = "block";
});

// Ending of login page section

dialedButton.addEventListener("mousedown", function () {
  blocked.style.display = "none";
  showNum.style.display = "block";
  dialedButton.style.borderBottom = "4px solid green";
  blockButton.style.borderBottom = "none";
  blockButton.style.color = "black";
  dialedButton.style.color = "green";
});

blockButton.addEventListener("mousedown", function () {
  showBlock.style.display = "block";
  showNum.style.display = "none";
  dialedButton.style.borderBottom = "none";
  blockButton.style.borderBottom = "4px solid green";
  blockButton.style.color = "green";
  dialedButton.style.color = "black";
});

phone.addEventListener(
  "click",
  function () {
    send.style.display = "block";
    phone.style.borderBottom = "green solid 4px";
    phone.style.color = "green";
    message.style.borderBottom = "none";
    message.style.color = "black";
    number.style.borderBottom = "none";
    number.style.color = "black";
    point.style.display = "none";
    see.style.display = "none";
  }
  // phone.addEventListener("click", function () {})
);
// phone.addEventListener("dblclick", function () {
//   send.style.display = "none";
//   phone.style.borderBottom = "none";
// });
message.addEventListener("click", function () {
  point.style.display = "block";
  message.style.borderBottom = "3px solid green";
  number.style.borderBottom = "none";
  message.style.color = "green";
  phone.style.borderBottom = "none";
  phone.style.color = "black";
  number.style.color = "black";
  send.style.display = "none";
  see.style.display = "none";
});
number.addEventListener(
  "click",
  function () {
    see.style.display = "block";
    number.style.borderBottom = "3px solid green";
    number.style.color = "green";
    message.style.borderBottom = "none";
    message.style.color = "black";
    phone.style.borderBottom = "none";
    phone.style.color = "black";
    point.style.display = "none";
    send.style.display = "none";
  }
  // number.addEventListener("dblclick", function () {
  //   see.style.display = "none";

  // })
);

/** This section is for sidebar Links functions  **/

// Ending of sidebar section
// test section on css

// Ending of the clicked button section
function testing() {
  moreprocon3.style.display = "block";
  middlepro1.style.display = "none";
  middlepro2.style.display = "none";
  middlepro3.style.display = "none";
  middlepro4.style.display = "none";
  middlepro5.style.display = "flex";
}
