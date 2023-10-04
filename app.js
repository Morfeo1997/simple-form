

function inputValidation(){
	const name = document.querySelector('#first-name');
	const lastName = document.querySelector('#last-name');
	const email = document.querySelector('#email');
	const password = document.querySelector('#password');
	const inputName = name.value;
	const inputLastName = lastName.value;
	const inputEmail = email.value;
	const inputPassword = password.value;
	const errorContent = document.querySelectorAll('.error');

	if (inputName.trim() === '' || inputLastName.trim() === '' || inputEmail.trim() === '' || inputPassword.trim() === ''){
		errorContent.forEach(function(errorElement) {
            errorElement.classList.remove('hide');
            errorElement.classList.add('show');
			name.classList.remove('normal-item');
			lastName.classList.remove('normal-item');
			email.classList.remove('normal-item');
			password.classList.remove('normal-item');

			name.classList.add('error-item');
			lastName.classList.add('error-item');
			email.classList.add('error-item');
			password.classList.add('error-item');
        });
        
	}

}