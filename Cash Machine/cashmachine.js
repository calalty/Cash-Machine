// Provide a user with a personal identification number, called a pin, which is made up of 4 numbers. The user will use this number to login into the virtual javascript ATM. No need for a ATM card, the pin number will enable user to login with just the pin.
// The user should be able to deposit, withdraw, transfer between checking and saving accounts and logout
// The code should have basic input testing and error handling
// The user shouldn’t be able to enter letters
// The user shouldn’t be able to withdraw negative money
// The user shouldn’t be able to transfer/withdraw more than he/she has
// Input fields don’t accept unexpected characters

let userBalance = 5000
const checkBalance = () => {
    userInput = alert(`Your bank balance is £${userBalance}`)
    optMenu()
}

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

const depositAmount = () => {
    userInput = prompt("How much would you like to deposit?")
    let newdBalance = userBalance += parseInt(userInput)
    alert(`You have successfully deposited £${userInput}\nYour new balance is £${newdBalance}`)
    optMenu()
    return newdBalance
}

const logout = () => {
    alert("Thankyou for using Altons Atm, Goodbye.")
    exit
}


const optMenu = () => {
    userInput = prompt("Please choose an option:\n1. Check Balance\n2. Withdraw Cash\n3. Deposit Cash\n4. Change PIN\n5. LOGOUT")

    if (userInput == 1) {
        checkBalance()
    } else if (userInput == 2) {
        withdrawl()
    } else if (userInput == 3) {
        depositAmount()
    } else if (userInput == 4) {
        changePin()
    } else if (userInput == 5) {
        logout()
    }
}

let pinAttempts = 3
let userPin = 1234
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
