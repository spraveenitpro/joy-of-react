import React from "react";
function Gradient() {
	const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);

	const colorStops = colors.join(", ");
	const backgroundImage = `linear-gradient(${colorStops})`;
    let poppedColors = [];

	const addColor = () => {
		if (colors.length >= 5) return;
		const newArray = [...colors];

        if ( poppedColors.length > 0 ) {

            newArray = poppedColors.pop();
            setColors(newArray);
            console.log("clicked!");
        } else {
            newArray.push("#FFD500");
            setColors(newArray);
            console.log("clicked!");
        }
	};

	const removeColor = () => {
		if (colors.length <= 2) return;
		const newArray = [...colors];
		poppedColors = newArray.pop();
		setColors(newArray);
		console.log(poppedColors);
	}

	return (
		<div className="wrapper">
			<div className="actions">
				<button onClick={removeColor}>Remove color</button>
				<button onClick={addColor}>Add color</button>
			</div>

			<div
				className="gradient-preview"
				style={{
					backgroundImage
				}}
			/>

			<div className="colors">
				{colors.map((color, index) => {
					const colorId = `color-${index}`;
					return (
						<div key={colorId} className="color-wrapper">
							<label htmlFor={colorId}>Color {index + 1}:</label>
							<div className="input-wrapper">
								<input id={colorId} type="color" value={color} onChange={(event) => {
									const nextColors = [...colors];
									nextColors[index] = event.target.value;
									setColors(nextColors);
								}} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Gradient;
