let miles = 0;
let speed = 0.1;
let money = 0;
let income = 0;
let working = false;
let laces = 0;
let bearings = 0;
let wheels = 0;
let plates = 0;
let boots = 0;
let kneepads = 0;
let helmet = 0;
let elbowPads = 0;
let trucks = 0;
let cushions = 0;
let lacePrice = 1;
let bearingPrice = 5;
let wheelPrice = 10;
let platePrice = 15;
let bootPrice = 25;
let kneepadPrice = 50;
let helmetPrice = 50;
let elbowPadPrice = 75;
let truckPrice = 90;
let cushionPrice = 100;
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
    if (miles === 5) /*5*/{
        document.getElementById("rink").removeAttribute('hidden');
    }
    if (miles >= 10) //10
        document.getElementById("sonic").removeAttribute('hidden');
    if (miles >= 15) //15
        document.getElementById("coach").removeAttribute('hidden');
    if (miles >= 20) //20
        document.getElementById("party").removeAttribute('hidden');
    if (miles >= 25) //25
        document.getElementById("freestyle").removeAttribute('hidden');
    if (miles >= 50) //50
        document.getElementById("derby").removeAttribute('hidden');
    if (miles >= 75) //75
        document.getElementById("manager").removeAttribute('hidden');
    if (miles >= 100) //100
        document.getElementById("influencer").removeAttribute('hidden');
    if (miles >= 150) //150
        document.getElementById("xGames").removeAttribute('hidden');
    if (miles >= 200) //200
        document.getElementById("olympics").removeAttribute('hidden');
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
// Party
document.getElementById("party").onclick = function(){
    // start working, set income
    income = 12;
    working = true;
}
// Freestyle
document.getElementById("freestyle").onclick = function(){
    // start working, set income
    income = 18;
    working = true;
}
// Derby
document.getElementById("derby").onclick = function(){
    // start working, set income
    income = 24;
    working = true;
}
// Manager
document.getElementById("manager").onclick = function(){
    // start working, set income
    income = 30;
    working = true;
}
// Influencer
document.getElementById("influencer").onclick = function(){
    // start working, set income
    income = 36;
    working = true;
}
// XGames
document.getElementById("xGames").onclick = function(){
    // start working, set income
    income = 42;
    working = true;
}
// Olympics
document.getElementById("olympics").onclick = function(){
    // start working, set income
    income = 48;
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
    money = (money * 10 - lacePrice * 10) / 10;
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
    money = (money * 10 - bearingPrice * 10) / 10;
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
    money = (money * 10 - wheelPrice * 10) / 10;
    // Update cost of upgrade
    wheelPrice += 1;
    document.getElementById("wheelPrice").innerHTML = (wheelPrice);
    document.getElementById("dollars").innerHTML = money;
}
// Plates
document.getElementById("plates").onclick = function(){
    if (money < platePrice)
        return;
    // purchase upgrade, increase speed
    upgradeSpeed += 0.1;
    plates += 1;
    // Update money based on cost
    money = (money * 10 - platePrice * 10) / 10;
    // Update cost of upgrade
    platePrice += 1;
    document.getElementById("platePrice").innerHTML = (platePrice);
    document.getElementById("dollars").innerHTML = money;
}
// Boots
document.getElementById("boots").onclick = function(){
    if (money < bootPrice)
        return;
    // purchase upgrade, increase speed
    upgradeSpeed += 0.1;
    boots += 1;
    // Update money based on cost
    money = (money * 10 - bootPrice * 10) / 10;
    // Update cost of upgrade
    bootPrice += 1;
    document.getElementById("bootPrice").innerHTML = (bootPrice);
    document.getElementById("dollars").innerHTML = money;
}
// Kneepads
document.getElementById("kneepads").onclick = function(){
    if (money < kneepadPrice)
        return;
    // purchase upgrade, increase speed
    speed += 0.5;
    kneepads += 1;
    // Update money based on cost
    money = (money * 10 - kneepadPrice * 10) / 10;
    // Update cost of upgrade
    kneepadPrice += 1;
    document.getElementById("kneepadPrice").innerHTML = (kneepadPrice);
    document.getElementById("dollars").innerHTML = money;
}
// Helmet
document.getElementById("helmet").onclick = function(){
    if (money < helmetPrice)
        return;
    // purchase upgrade, increase speed
    upgradeSpeed += 0.1;
    helmet += 1;
    // Update money based on cost
    money = (money * 10 - helmetPrice * 10) / 10;
    // Update cost of upgrade
    helmetPrice += 1;
    document.getElementById("helmetPrice").innerHTML = (helmetPrice);
    document.getElementById("dollars").innerHTML = money;
}
// Elbow pads
document.getElementById("elbowPads").onclick = function(){
    if (money < elbowPadPrice)
        return;
    // purchase upgrade, increase speed
    upgradeSpeed += 0.1;
    elbowPads += 1;
    // Update money based on cost
    money = (money * 10 - elbowPadPrice * 10) / 10;
    // Update cost of upgrade
    elbowPadPrice += 1;
    document.getElementById("elbowPadPrice").innerHTML = (elbowPadPrice);
    document.getElementById("dollars").innerHTML = money;
}
// Trucks
document.getElementById("trucks").onclick = function(){
    if (money < truckPrice)
        return;
    // purchase upgrade, increase speed
    upgradeSpeed += 0.1;
    trucks += 1;
    // Update money based on cost
    money = (money * 10 - truckPrice * 10) / 10;
    // Update cost of upgrade
    truckPrice += 1;
    document.getElementById("truckPrice").innerHTML = (truckPrice);
    document.getElementById("dollars").innerHTML = money;
}
// Cushions
document.getElementById("cushions").onclick = function(){
    if (money < cushionPrice)
        return;
    // purchase upgrade, increase speed
    speed += 1.0;
    cushions += 1;
    // Update money based on cost
    money = (money * 10 - cushionPrice * 10) / 10;
    // Update cost of upgrade
    cushionPrice += 1;
    document.getElementById("cushionPrice").innerHTML = (cushionPrice);
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
    save += plates;
    save += "x";
    save += boots;
    save += "x";
    save += kneepads;
    save += "x";
    save += helmet;
    save += "x";
    save += elbowPads;
    save += "x";
    save += trucks;
    save += "x";
    save += cushions;
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
    let savePlates = "";
    let saveBoots = "";
    let saveKneepads = "";
    let saveHelmet = "";
    let saveElbowPads = "";
    let saveTrucks = "";
    let saveCushions = "";
    
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
        if (count === 15 && flag === false)
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
            xmoneyxmilesxspeedxupgradeSpeedxlacesxbearingsxwheelsxplates
            xbootsxkneepadsxhelmetxelbowPadsxtrucksxcushionsx */
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
        // remove the wheels and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the plates from string
        savePlates += load.slice(0, i);
        if (savePlates.length < 1)
        {
            bad = true;
        }
        // remove the plates and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the boots from string
        saveBoots += load.slice(0, i);
        if (saveBoots.length < 1)
        {
            bad = true;
        }
        // remove the boots and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the kneepads from string
        saveKneepads += load.slice(0, i);
        if (saveKneepads.length < 1)
        {
            bad = true;
        }
        // remove the kneepads and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the helmet from string
        saveHelmet += load.slice(0, i);
        if (saveHelmet.length < 1)
        {
            bad = true;
        }
        // remove the helmet and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the elbow pads from string
        saveElbowPads += load.slice(0, i);
        if (saveElbowPads.length < 1)
        {
            bad = true;
        }
        // remove the elbow pads and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the trucks from string
        saveTrucks += load.slice(0, i);
        if (saveTrucks.length < 1)
        {
            bad = true;
        }
        // remove the trucks and next 'x'
        load = load.slice(i+1);
        i = 0;
        while (load.charAt(i) != 'x')
        {
            i++;
        }
        // hold the cushions from string
        saveCushions += load.slice(0, i);
        if (saveCushions.length < 1)
        {
            bad = true;
        }
        // remove the cushions and last 'x'
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
    plates = Number(savePlates);
    boots = Number(saveBoots);
    kneepads = Number(saveKneepads);
    helmet = Number(saveHelmet);
    elbowPads = Number(saveElbowPads);
    trucks = Number(saveTrucks);
    cushions = Number(saveCushions);
    lacePrice = 1 + (1 * laces);
    bearingPrice = 5 + (1 * bearings);
    wheelPrice = 10 + (1 * wheels);
    platePrice = 15 + (1 * plates);
    bootPrice = 25 + (1 * boots);
    kneepadPrice = 50 + (1 * kneepads);
    helmetPrice = 50 + (1 * helmet);
    elbowPadPrice = 75 + (1 * elbowPads);
    truckPrice = 90 + (1 * trucks);
    cushionPrice = 100 + (1 * cushions);
    // update html
    document.getElementById("dollars").innerHTML = money;
    if (money > 0)
    {
        working = true;
    }
    document.getElementById("count").innerHTML = miles;
    // Display jobs available
    if (miles >= 1) /*10*/{
        document.getElementById("rink").removeAttribute('hidden');
    }
    if (miles >= 2) //50
        document.getElementById("sonic").removeAttribute('hidden');
    if (miles >= 3) //100
        document.getElementById("coach").removeAttribute('hidden');
    if (miles >= 4) //20
        document.getElementById("party").removeAttribute('hidden');
    if (miles >= 5) //25
        document.getElementById("freestyle").removeAttribute('hidden');
    if (miles >= 6) //50
        document.getElementById("derby").removeAttribute('hidden');
    if (miles >= 7) //75
        document.getElementById("manager").removeAttribute('hidden');
    if (miles >= 8) //100
        document.getElementById("influencer").removeAttribute('hidden');
    if (miles >= 9) //150
        document.getElementById("xGames").removeAttribute('hidden');
    if (miles >= 10) //200
        document.getElementById("olympics").removeAttribute('hidden');
    document.getElementById("lacePrice").innerHTML = (lacePrice);
    document.getElementById("bearingPrice").innerHTML = (bearingPrice);
    document.getElementById("wheelPrice").innerHTML = (wheelPrice);
    document.getElementById("platePrice").innerHTML = (platePrice);
    document.getElementById("bootPrice").innerHTML = (bootPrice);
    document.getElementById("kneepadPrice").innerHTML = (kneepadPrice);
    document.getElementById("helmetPrice").innerHTML = (helmetPrice);
    document.getElementById("elbowPadPrice").innerHTML = (elbowPadPrice);
    document.getElementById("truckPrice").innerHTML = (truckPrice);
    document.getElementById("cushionPrice").innerHTML = (cushionPrice);
    text = "Save game loaded";
    alert(text);
}

function message(){
    if (miles === 0.1)
        document.getElementById("message").innerHTML = "";
    if (miles === 5)
        document.getElementById("message").innerHTML = "<br><br>Start working to earn income!";
    if (miles > 15 && working)
        document.getElementById("message").innerHTML = "<br><br>Purchase an upgrade to skate faster!";
    if (laces > 0 || wheels > 0 || bearings > 0 || laces > 0 || wheels > 0 || bearings > 0)
        document.getElementById("message").innerHTML = "";
    if (miles >= 10)
        document.getElementById("message").innerHTML = "<br><br>You're really rolling now, keep it up!";
    if (miles >= 15)
        document.getElementById("message").innerHTML = "";
    if (money >= 50)
        document.getElementById("message").innerHTML = "<br><br>You've worked hard, enjoy spending it!";
    if (money >= 75)
        document.getElementById("message").innerHTML = "";
}
