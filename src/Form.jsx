import React from 'react'

function Form() {
	const [searchTerm, setSearchTerm] = React.useState('cats');
	const [
		selectedOption,
		setSelectedOption
	] = React.useState('red');
	const [
		value,
		setValue
	] = React.useState('no');

	return (
		<>
			<form>
				<label htmlFor="search-input">
					Search:
				</label>
				<input
					type="text"
					id="search-input"
					value={searchTerm}
					onChange={event => setSearchTerm(event.target.value)}
				/>
				<fieldset>
					<legend>
						What is your favourite color?
					</legend>
					<select
						value={selectedOption}
						onChange={event => {
							setSelectedOption(event.target.value)
						}}
					>
						<option value="red">
							Red
						</option>
						<option value="green">
							Green
						</option>
						<option value="blue">
							Blue
						</option>
					</select>
					<legend>Do you agree?</legend>

					<input
						type="radio"
						name="agreed-to-terms"
						id="agreed-yes"
						value="yes"
						checked={value === "yes"}
						onChange={event => {
							setValue(event.target.value)
						}}
					/>
					{' '}
					<label htmlFor="agreed-yes">
						Yes
					</label>
					<br />

					<input
						type="radio"
						name="agreed-to-terms"
						id="agreed-no"
						value="no"
						checked={value === "no"}
						onChange={event => {
							setValue(event.target.value)
						}}
					/>
					{' '}
					<label htmlFor="agreed-no">
						No
					</label>
				</fieldset>

				<p>
					Selected value:
					<br />
					{selectedOption}
				</p>

			</form>
			<p>
				Search term: {searchTerm}
			</p>
		</>
	)
}

export default Form