let miles = 0;
let speed = 0.1;
let money = 0;
let income = 0;
let working = false;
let laces = 0;
let bearings = 0;
let wheels = 0;
let lacePrice = 1;
let bearingPrice = 5;
let wheelPrice = 10;
let upgradeSpeed = 0;

// call interval function every 10 seconds
let myInterval = setInterval(update, 10000)

// Counter
// Track distance traveled
document.getElementById("skate").onclick = function(){
    // removes floating point math issue
    miles = (miles * 10 + speed * 10) / 10;
    document.getElementById("count").innerHTML = miles;
    // Display jobs available
    if (miles === 1) /*10*/{
        document.getElementById("rink").removeAttribute('hidden');
        // Display money earned
        document.getElementById("money").removeAttribute('hidden');
    }
    if (miles === 2) //50
        document.getElementById("sonic").removeAttribute('hidden');
    if (miles === 3) //100
        document.getElementById("coach").removeAttribute('hidden');
}

// Jobs
// Work for money
// Roller Rink
document.getElementById("rink").onclick = function(){
    // start working, set income
    income = 0.6;
    working = true;
}
// Sonic
document.getElementById("sonic").onclick = function(){
    // start working, set income
    income = 1.2;
    working = true;
}
// Coach
document.getElementById("coach").onclick = function(){
    // start working, set income
    income = 6;
    working = true;
}

// Upgrades
// Purchase upgrades to skates to change skating speed
// Laces
document.getElementById("laces").onclick = function(){
    if (money < lacePrice)
        return;
    // purchase upgrade, increase speed
    speed += 0.1;
    laces += 1;
    // Update money based on cost
    money -= lacePrice;
    // Update cost of upgrade
    lacePrice += 1;
    document.getElementById("lacePrice").innerHTML = (lacePrice);
    document.getElementById("dollars").innerHTML = money;
}
// Bearings
document.getElementById("bearings").onclick = function(){
    if (money < bearingPrice)
        return;
    // purchase upgrade, increase speed
    upgradeSpeed += 0.1;
    bearings += 1;
    // Update money based on cost
    money -= bearingPrice;
    // Update cost of upgrade
    bearingPrice += 1;
    document.getElementById("bearingPrice").innerHTML = (bearingPrice);
    document.getElementById("dollars").innerHTML = money;
}
// Wheels
document.getElementById("wheels").onclick = function(){
    if (money < wheelPrice)
        return;
    // purchase upgrade, increase speed
    upgradeSpeed += 0.1;
    wheels += 1;
    // Update money based on cost
    money -= wheelPrice;
    // Update cost of upgrade
    wheelPrice += 1;
    document.getElementById("wheelPrice").innerHTML = (wheelPrice);
    document.getElementById("dollars").innerHTML = money;
}

function update() {
    // update money for income
    if (working)
        document.getElementById("dollars").innerHTML = (money = (money * 100 + (income * 100 / 6)) / 100);
    // update distance for passive upgrades
    document.getElementById("count").innerHTML = (miles = (miles * 10 + upgradeSpeed * 100) / 10);
}