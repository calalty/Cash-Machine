// Provide a user with a personal identification number, called a pin, which is made up of 4 numbers. The user will use this number to login into the virtual javascript ATM. No need for a ATM card, the pin number will enable user to login with just the pin.
// The user should be able to deposit, withdraw, transfer between checking and saving accounts and logout
// The code should have basic input testing and error handling
// The user shouldn’t be able to enter letters
// The user shouldn’t be able to withdraw negative money
// The user shouldn’t be able to transfer/withdraw more than he/she has
// Input fields don’t accept unexpected characters

// Check User Balance 

let userBalance = 5000
const checkBalance = () => {
    userInput = alert(`Your bank balance is £${userBalance}`)
    optMenu()
}

// Withdraw Cash

const withdrawl = () => {
    userInput = prompt("How much would you like to withdraw?")
    if (userInput <= userBalance) {
    let newwBalance = userBalance - parseInt(userInput)
    alert(`You have successfully withdrawn £${userInput}\nYour new balance is £${newwBalance}`)
    optMenu()
    return newwBalance
    }
    else {(userInput >= userBalance) 
    alert('You have insufficient funds')
    optMenu()
}
}

// Deposit Cash

const depositAmount = () => {
    userInput = prompt("How much would you like to deposit?")
    let newdBalance = userBalance += parseInt(userInput)
    alert(`You have successfully deposited £${userInput}\nYour new balance is £${newdBalance}`)
    optMenu()
    return newdBalance
}

// Logout of ATM 

const logout = () => {
    alert("Thankyou for using Altons Atm, Goodbye.")
    exit
}

// Change Pin

const changePin = () => {
    userPin = prompt("Enter New Pin:")
    alert("PIN CHANGED")
    optMenu()
    return userPin
}

// Options Menu

const optMenu = () => {
    userInput = prompt("Please choose an option:\n1. Check Balance\n2. Withdraw Cash\n3. Deposit Cash\n4. Change PIN\n5. Logout.")

    if (userInput == 1) {
        checkBalance()
    } else if (userInput == 2) {
        withdrawl()
    } else if (userInput == 3) {
        depositAmount()
    } else if (userInput == 4) {
        pinValidation()
    } else if (userInput == 5) {
        logout()
    }
}

// Pin validation FOR Changing Pin

let pinAttempts = 3
let userPin = 1234
const pinValidation = () => {
    while (true) {
    userInput = prompt("Please Enter Your Pin:")
    if (userInput == userPin) {
        changePin()
    } else if (pinAttempts < 0) {
        alert("Maximum Attempts, Pin Change Failed")
        optMenu()
    } else if (userInput != userPin) {
        pinAttempts -= 1
        alert(`You have ${pinAttempts+1} attempts left.`)
        return pinValidation()

}
}
}


// Log into ATM

const checkPin = () => {
	while (true) {
		userInput = prompt("Welcome to Altons ATM, Please enter your PIN:")
		if (userInput == userPin) {
			optMenu()
		} else if (pinAttempts < 0) {
			alert("ACCOUNT LOCKED")
			return;
		} else if (userInput != userPin) {
			pinAttempts -= 1
			alert(`You have ${pinAttempts+1} attempts left.`);
			return checkPin(); // need to return your recursive function call
		}
	}
}
checkPin()

// const transactions = (day) => {
//     day = prompt(`What day would you like to see the transactions from?\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday\n Saturday\n Sunday`)
//     if (day == `Monday`) {
//     alert(`£20 withdrawn - Tesco`)
//     }
//     else if (day == `Tuesday`) {
//     alert (`£100 withdrawn - Sky Bets`)
//     }
//     else if (day == `Wednesday`) {
//     alert (`£4 withdrawn - Morrisons`)
//     }
//     else if (day == `Thursday`) {
//     alert (`£4.99 withdrawn - Starbucks`)
//     }
//     else if (day == `Friday`) {
//     alert (`£1,500 deposited - TalkTalk`) 
//     }
//     else if (day == `Saturday`) {
//     alert (`£5 - Cal`)
//     }
//     else if (day == `Sunday`) {
//     alert (`£70 withdrawn - Church`)
//     }
//     else {
//     alert (`ERROR`)
//     }
// }

// const changePin = () => {
//     newPin = userInput
//     userInput = prompt("Enter New Pin:")
//     if (userInput == newPin) {
//     alert("PIN CHANGED")
//     optMenu()
//     return
//     }
//     else if (newPin != userInput) {
//     alert("INVALID")
//     }
// }


