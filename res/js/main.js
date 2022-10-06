
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const clicker = document.getElementById("clicker");
const autoclicker = document.getElementById("autoclicker")

let numberOfCookies = 0;
let numberOfCookiesOnClick = 1;
let upgradeprice = 50;
let upgradeprice2 = 250;
let autoclickerPrice = 500;
let numberOfCookiesAutoclicker = 0;

cookie.onclick = () => {
    //++ = +1
    numberOfCookies +=numberOfCookiesOnClick;
    counter.innerHTML = `židi: ${numberOfCookies}`;
};

upgrade.onclick = () => {
    if (numberOfCookies >= upgradeprice) {
        numberOfCookies -= upgradeprice;
        upgradeprice *=2;
        upgrade.innerHTML = `Buy upgrade: ${upgradeprice}`;
        counter.innerHTML = `židi: ${numberOfCookies}`;
        numberOfCookiesOnClick++;
    }

}

clicker.onclick = () => {
    if(numberOfCookies >=upgradeprice2){
       numberOfCookies -=upgradeprice2;
       upgradeprice2 *=2;
       clicker.innerHTML = `Buy Clicker: ${upgradeprice2}`
       counter.innerHTML = `židi: ${numberOfCookies}`;
       numberOfCookiesOnClick+=5;
    }
}

autoclicker.onclick = () => {
    if (numberOfCookies >= autoclickerPrice) {
        numberOfCookies >= autoclickerPrice;
        numberOfCookies -= autoclickerPrice
        if (numberOfCookiesAutoclicker ==0)  {
        setInterval(() => {
            numberOfCookies+=numberOfCookiesAutoclicker;
            counter.innerHTML = `židi: ${numberOfCookies}`;
        },500);
    }
    numberOfCookiesAutoclicker++
    autoclickerPrice *=2;
    autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
    counter.innerHTML = `židi: ${numberOfCookies}`;
    }
} 