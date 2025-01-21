import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const CurrencyConverterFrame = ({ children }) => (
	<Box px={{ base: 4, md: 10, lg: 12 }} py={{ base: 6, lg: 8 }}>
		{children}
	</Box>
)

CurrencyConverterFrame.propTypes = {
	children: PropTypes.node.isRequired
}

export default CurrencyConverterFrame
