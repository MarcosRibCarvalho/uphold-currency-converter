import { Stack } from '@chakra-ui/react'
import PropTypes from 'prop-types'

import SectionStackElement from 'utils/layout/SectionStackElement'

const SectionStack = ({ children, ...props }) => (
	<Stack spacing={8} {...props}>
		{children}
	</Stack>
)

SectionStack.Element = SectionStackElement

SectionStack.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default SectionStack
