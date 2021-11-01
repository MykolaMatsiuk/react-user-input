import useInput from '../hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = () => {
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: inputFirstNameBlurHandler,
		reset: resetFirstName
	} = useInput(isNotEmpty);

	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: inputLastNameBlurHandler,
		reset: resetLastName
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: inputEmailBlurHandler,
		reset: resetEmail
	} = useInput(isEmail);

	let formIsValid = false;

	if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) return;

		console.log(firstNameValue);
		console.log(lastNameValue);
		console.log(emailValue);

		resetFirstName();
		resetLastName();
		resetEmail();
	};

	const inputFirstNameClasses = firstNameHasError
		? 'form-control invalid'
		: 'form-control';

	const inputLastNameClasses = lastNameHasError
		? 'form-control invalid'
		: 'form-control';

	const inputEmailClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={inputFirstNameClasses}>
					<label htmlFor="first-name">First Name</label>
					<input
						type="text"
						id="first-name"
						value={firstNameValue}
						onChange={firstNameChangeHandler}
						onBlur={inputFirstNameBlurHandler}
					/>
					{firstNameHasError && (
						<p className="error-text">
							First Name must be not empty
						</p>
					)}
				</div>
				<div className={inputLastNameClasses}>
					<label htmlFor="last-name">Last Name</label>
					<input
						type="text"
						id="last-name"
						value={lastNameValue}
						onChange={lastNameChangeHandler}
						onBlur={inputLastNameBlurHandler}
					/>
					{lastNameHasError && (
						<p className="error-text">
							Last Name must be not empty
						</p>
					)}
				</div>
			</div>
			<div className={inputEmailClasses}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					type="text"
					id="email"
					value={emailValue}
					onChange={emailChangeHandler}
					onBlur={inputEmailBlurHandler}
				/>
				{emailHasError && <p className="error-text">Invalid email</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
