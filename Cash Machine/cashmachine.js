
userBalance = 500
const checkBalance = () => {
    userInput = alert(`Your bank balance is £${userBalance}`)
}

const withdrawl = () => {
    userInput = prompt("How much would you like to withdraw?")
    if (userInput <= userBalance) {
    let newwBalance = userBalance - parseInt(userInput)
    alert(`You have successfully withdrawn £${userInput}\nYour new balance is £${newwBalance}`)
    }
    else {(userInput >= userBalance) 
    alert('You have insufficient funds')
}
}

const depositAmount = () => {
    userInput = prompt("How much would you like to deposit?")
    let newdBalance = userBalance += parseInt(userInput)
    alert(`You have successfully deposited £${userInput}\nYour new balance is £${newdBalance}`)
}

const transactions = (day) => {
    day = prompt(`What day would you like to see the transactions from?\n Monday\n Tuesday\n Wednesday\n Thursday\n Friday\n Saturday\n Sunday`).toLowerCase()
    if (day == `Monday`) {
    alert(`£20 withdrawn - Tesco`)
    }
    else if (day == `Tuesday`) {
    alert (`£100 withdrawn - Sky Bets`)
    }
    else if (day == `Wednesday`) {
    alert (`£4 withdrawn - Morrisons`)
    }
    else if (day == `Thursday`) {
    alert (`£4.99 withdrawn - Starbucks`)
    }
    else if (day == `Friday`) {
    alert (`£1,500 deposited - TalkTalk`) 
    }
    else if (day == `Saturday`) {
    alert (`£5 - Cal`)
    }
    else if (day == `Sunday`) {
    alert (`£70 withdrawn - Church`)
    }
    else {
    alert (`ERROR`)
    }
    }

const optMenu = () => {
    userInput = prompt("Please choose an option:\n1. Check Balance\n2. Withdraw Cash\n3. Deposit Cash\n4. Change PIN\n5. This Weeks Transactions")

    if (userInput == 1) {
        checkBalance()
    } else if (userInput == 2) {
        withdrawl()
    } else if (userInput == 3) {
        depositAmount()
    } else if (userInput == 4) {
        changePin()
    } else if (userInput == 5) {
        transactions()
    }
}

let pinAttempts = 3
let userPin = 1234
const checkPin = () => {
	while (true) {
		userInput = prompt("Welcome to Alton ATM, Please enter your PIN:")
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
