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
let save = "";
let load = "";

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
    message();
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

/* save string is in the format:
    xmoneyxmilesxspeedxupgradeSpeedxlacesxbearingsxwheelsx */
// generate save string
document.getElementById("save").onclick = function(){
    save += "x";
    save += money;
    save += "x";
    save += miles;
    save += "x";
    save += speed;
    save += "x";
    save += upgradeSpeed;
    save += "x";
    save += laces;
    save += "x";
    save += bearings;
    save += "x";
    save += wheels;
    save += "x";
    window.alert("Save this string somewhere safe to reload your progress from this point:\n" + save);
    save = "";
}

// receive save string input
document.getElementById("load").onclick = function(){
    load = prompt("Enter a save string:");
    let text;
    let bad = true;
    let saveMoney = "";
    let saveMiles = "";
    let saveSpeed = "";
    let saveUpgradeSpeed = "";
    let saveLaces = "";
    let saveBearings = "";
    let saveWheels = "";
    // check for good string
    if (load != null && load != "")
    {
        let count = 0;
        let flag = false;
        for (var i = 0; i < load.length; i++)
        {
            // correct number of 'x's
            if (load.charAt(i) === "x")
            {
                count ++;
            }
            // no random characters in variables, only digits or periods
            else if (parseInt(load.charAt(i)) != load.charAt(i) && load.charAt(i) != ".")
            {
                flag = true;
            }
        }
        // good string
        if (count === 8 && flag === false)
        {
            bad = false;
        }
    }
    // no user input received
    if (load == null || load == "") {
        text = "No save string entered.";
        alert(text);
        return;
    }
    // good string entered
    else if (bad === false) {
        /* save string is in the format:
            xmoneyxmilesxspeedxupgradeSpeedxlacesxbearingsxwheelsx */
        // parse string for variables
        // remove the first 'x'
        load = load.slice(1);
        let i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the money from string
        saveMoney += load.slice(0, i);
        if (saveMoney.length < 1)
        {
            bad = true;
        }
        // remove the money and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the miles from string
        saveMiles += load.slice(0, i);
        if (saveMiles.length < 1)
        {
            bad = true;
        }
        // remove the miles and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the speed from string
        saveSpeed += load.slice(0, i);
        if (saveSpeed.length < 1)
        {
            bad = true;
        }
        // remove the speed and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the upgradeSpeed from string
        saveUpgradeSpeed += load.slice(0, i);
        if (saveUpgradeSpeed.length < 1)
        {
            bad = true;
        }
        // remove the upgradeSpeed and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the laces from string
        saveLaces += load.slice(0, i);
        if (saveLaces.length < 1)
        {
            bad = true;
        }
        // remove the laces and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the bearings from string
        saveBearings += load.slice(0, i);
        if (saveBearings.length < 1)
        {
            bad = true;
        }
        // remove the bearings and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the wheels from string
        saveWheels += load.slice(0, i);
        if (saveWheels.length < 1)
        {
            bad = true;
        }
        // remove the wheels and last 'x'
        load = load.slice(i+1);
        i = 0;
        if (load.length > 0)
        {
            bad = true;
        }
    }
    // bad string entered
    if (bad) {
        text = "Error in entered save string."
        alert(text);
        return;
    }
    // set all values to saved values and update pricing for upgrades
    money = Number(saveMoney);
    miles = Number(saveMiles);
    speed = Number(saveSpeed);
    upgradeSpeed = Number(saveUpgradeSpeed);
    laces = Number(saveLaces);
    bearings = Number(saveBearings);
    wheels = Number(saveWheels);
    lacePrice = 1 + (1 * laces);
    bearingPrice = 1 + (1 * bearings);
    wheelPrice = 1 + (1 * wheels);
    // update html
    document.getElementById("dollars").innerHTML = money;
    if (money > 0)
    {
        // Display money earned
        document.getElementById("money").removeAttribute('hidden');
        working = true;
    }
    document.getElementById("count").innerHTML = miles;
    // Display jobs available
    if (miles >= 1) /*10*/{
        document.getElementById("rink").removeAttribute('hidden');
        // Display money earned
        document.getElementById("money").removeAttribute('hidden');
    }
    if (miles >= 2) //50
        document.getElementById("sonic").removeAttribute('hidden');
    if (miles >= 3) //100
        document.getElementById("coach").removeAttribute('hidden');
    document.getElementById("lacePrice").innerHTML = (lacePrice);
    document.getElementById("bearingPrice").innerHTML = (bearingPrice);
    document.getElementById("wheelPrice").innerHTML = (wheelPrice);
    text = "Save game loaded";
    alert(text);
}

function message(){
    if (miles === 0.1)
        document.getElementById("message").innerHTML = "";
    if (miles === 1)
        document.getElementById("message").innerHTML = "<br><br>Start working to earn income!";
    if (miles > 1 && working)
        document.getElementById("message").innerHTML = "<br><br>Purchase an upgrade to skate faster!";
    if (laces > 0 || wheels > 0 || bearings > 0)
        document.getElementById("message").innerHTML = "";
    if (miles >= 10)
        document.getElementById("message").innerHTML = "<br><br>You're really rolling now, keep it up!";
    if (miles >= 15)
        document.getElementById("message").innerHTML = "";
    if (money >= 10)
        document.getElementById("message").innerHTML = "<br><br>You've worked hard, enjoy spending it!";
    if (money >= 25)
        document.getElementById("message").innerHTML = "";
}
