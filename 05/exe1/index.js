let userAnswer = prompt("Would you please enter a num from 1 to 7?")

switch (userAnswer) {
	case "1":
		alert("Saturday")
		break

	case "2":
		alert("Sunday")
		break

	case "3":
		alert("Monday")
		break

	case "4":
		alert("Tuesday")
		break

	case "5":
		alert("Wednesday")
		break

	case "6":
		alert("Thursday")
		break

	case "7":
		alert("Friday")
		break

	default:
		alert(
			"Make sure you entered the right input cause otherwise you won't get the expected answer"
		)
}
