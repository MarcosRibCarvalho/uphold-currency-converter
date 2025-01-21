const getCustomStyles = ({ radii, colors }) => {
	return {
		option: (styles) => ({
			...styles,
			borderRadius: radii.xl,
			color: colors.black,
			minHeight: '20px',
			backgroundColor: '#FFFFFF',
			'&:hover': {
				borderRadius: 0,
				backgroundColor: '#F3F3F3'
			}
		}),
		control: (base) => {
			return {
				...base,
				border: 0,
				borderRadius: '40px',
				paddingRight: '10px',
				fontSize: '15px'
			}
		}
	}
}

export { getCustomStyles }
