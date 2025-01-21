import { Center, Image } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const PageHeader = ({ imageSrc = '/images/logo/logo.svg' }) => (
	<Center>
		<Image src={imageSrc} alt='logo' maxWidth={32} ignoreFallback />
	</Center>
)

PageHeader.displayName = 'PageHeader'

PageHeader.propTypes = {
	imageSrc: PropTypes.string
}

export default PageHeader
