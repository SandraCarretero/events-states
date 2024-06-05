import { useState } from 'react';
import { StyledButton, StyledSquare } from './square.style';

const Square = () => {
	const [color, setColor] = useState(true);

	return (
		<StyledSquare color={color}>
			<StyledButton onClick={() => changeColor({ setColor, color })}>
				CLICK
			</StyledButton>
		</StyledSquare>
	);
};

const changeColor = ({ setColor, color }) => {
	setColor(!color);
};

export default Square;
