import { theme as chakraTheme, extendTheme } from '@chakra-ui/react'

const global = {
	'html, body': {
		color: '#000000',
		bg: undefined,
		borderColor: '#e0e0e5'
	},
	'*': {
		fontFamily: 'Roboto'
	}
}

const theme = extendTheme({
	...chakraTheme,
	global
})

export default theme
