import React from 'react'
import { COUNTRIES } from './data'

function Country() {
	const CORRECT_CODE = '123456';
	const [country, setCountry] = React.useState('');
	const [code, setCode] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const isCorrect = code === CORRECT_CODE;
		if (isCorrect) {
			window.alert("You have entered the correct code");
		} else {
			window.alert("You have entered the wrong code");
		}
	}
	const countryNames = Object.entries(COUNTRIES);
	console.log(countryNames);
	return (
		<>
			<h3>Select Country: </h3>
			<form onClick={handleSubmit}>
				<fieldset>
					<legend>Shipping info:</legend>
					<label htmlFor="country">Country:</label>
					<select required id="country" name="country" onChange={event => setCountry(event.target.value)} value={country}>
						<option value="">-Please choose an option--</option>
						<optgroup label="Countries">
							{
								countryNames.map(([id, label]) => (
									<option key={id} value={id}>{label}</option>
								))
							}
						</optgroup>
					</select>


				</fieldset>

				<p className="country-display">
					Selected country: {COUNTRIES[country]}
				</p>

				<label htmlFor="auth-code">
					Enter authorization code:
				</label>
				<div className="row">
					<input
						id="auth-code"
						type="text"
						required={true}
						maxLength={6}
						value={code}
						onChange={(event) => setCode(event.target.value)}
					/>
					<button>Check Code</button>
				</div>

				<button>Submit</button>
			</form>
		</>
	)
}

export default Country