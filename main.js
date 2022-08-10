// problem 1: function to get degree from radian
function radianToDegree(radian) {
    // check the input if its number or not
    if (typeof radian != 'number') {
        return "Please Enter a valid Number"
    }
    else {
        const pi = Math.PI;
        let result = radian * (180 / pi);
        return result.toFixed(2);
    }
}

// console.log(radianToDegree(10));
// console.log(radianToDegree(25));
// console.log(radianToDegree(199));

// -------------------------------------



// problem 2: function to get the file type: is javascript or not
function isJavaScriptFile(fileName) {

    // check the valid filename(valid files will have an extension)
    if (fileName.indexOf('.') === -1) {
        return "Please Enter a valid file name"
    }
    else {
        let result = fileName.endsWith('.js');
        return result;
    }
}

// console.log(isJavaScriptFile("app.js"))
// console.log(isJavaScriptFile("js.png"))
// console.log(isJavaScriptFile("images.js.png"))
// console.log(isJavaScriptFile("images.png.js"))


// -------------------------------------


// problem 3: get oilPrice
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    // check the input if its number or not
    if (typeof dieselQuantity != 'number' || typeof petrolQuantity != 'number' || typeof octaneQuantity != 'number') {
        return "please enter a valid number";
    }
    else {
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        let result = (dieselQuantity * dieselPrice) + (petrolQuantity * petrolPrice) + (octaneQuantity * octanePrice);
        return result;
    }
}

// console.log(oilPrice(1, 1, 1));
// console.log(oilPrice(30, 20, 10));
// console.log(oilPrice(1, 0, 2));
// console.log(oilPrice(0, 2, 3));


// -------------------------------------


// problem 4: get public Bus Fare
function publicBusFare(passengers) {

    // check the input if its number or not
    if (typeof passengers != 'number') {
        return "Please Enter a valid Number";
    }
    else {
        let microBus = passengers % 50;
        let publicBus = microBus % 11;
        const publicBusFare = 250;
        let totalFare = publicBus * publicBusFare;
        return totalFare;
    }
}

// console.log(publicBusFare(50));
// console.log(publicBusFare(55));
// console.log(publicBusFare(112));
// console.log(publicBusFare(235));
// console.log(publicBusFare(365));


// -------------------------------------


// problem 5: check if 2 peoples are friend or not

function isBestFriend(person1, person2) {
    // check the input if valid object or not
    if (typeof person1 != 'object' || typeof person2 != 'object') {
        return "Please Enter a valid Object";
    }
    else {
        if (person1.name === person2.friend && person2.name === person1.friend) {
            return true;
        } else {
            return false;
        }
    }
}

// let person1 = { name: 'John', friend: 'Doe' };
// let person2 = { name: 'Doe', friend: 'John' };

// let person1 = { name: 'abul', friend: 'babul' };
// let person2 = { name: 'babul', friend: 'kabul' };

// console.log(isBestFriend(person1, person2));