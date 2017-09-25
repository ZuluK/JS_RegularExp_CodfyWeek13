function validateEmail() {
	var mailFormat = /[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
	var useremail = document.getElementById("useremail");
	var results = document.getElementById("results");

	if(useremail.value.match(mailFormat)) {
		results.classsName = "success";
		results.textContent = "the email " + useremail.value + " is valid";

		return;

	} else {
		useremail.focus();
		results.className = "failure";
		results.textcontent = "the email " + useremail.value + " is not vaild, plesae try again";

		return;
	};
};

var validateBtn = document.getElementById('validateBtn');
validateBtn.addEventListener('click', validateEmail, false);
