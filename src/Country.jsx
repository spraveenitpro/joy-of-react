import React from 'react'
import { COUNTRIES } from './data'

function Country() {
	const [country, setCountry] = React.useState('');
	const countryNames = Object.entries(COUNTRIES);
	console.log(countryNames);
	return (
		<>
			<h3>Select Country: </h3>
			<form>
				<fieldset>
					<legend>Shipping info:</legend>
					<label htmlFor="country">Country:</label>
					<select required id="country" name="country" onChange={event => setCountry(event.target.value)} value={country}>
						<option value="">--Please choose an option--</option>
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

				<button>Submit</button>
			</form>
		</>
	)
}

export default Country