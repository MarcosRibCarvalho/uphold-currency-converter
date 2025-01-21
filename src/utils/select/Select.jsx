import { TriangleDownIcon } from '@chakra-ui/icons'
import { Flex, HStack, Image, useTheme } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import ReactSelect, { components } from 'react-select'
import SmallText from 'ui/text/SmallText'
import { getCustomStyles } from 'utils/select/styles'

const CustomOption = ({ children, options, ...props }) => {
	const { value, currencyImg } = options

	return (
		<components.Option {...props}>
			<Image src={currencyImg} alt={value} />
			{children}
		</components.Option>
	)
}

CustomOption.propTypes = {
	children: PropTypes.node,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			currencyImg: PropTypes.string.isRequired
		})
	).isRequired
}

const MenuList = ({ children, ...menuProps }) => (
	<components.MenuList {...menuProps}>
		{children}
		{menuProps.selectProps.loadMoreButton && (
			<Flex justifyContent='center'>{menuProps.selectProps.loadMoreButton}</Flex>
		)}
	</components.MenuList>
)

MenuList.propTypes = {
	children: PropTypes.node
}

const Select = ({ loadMoreButton = null, ...props }) => {
	const appTheme = useTheme()

	const customComponents = {
		...{ MenuList },
		Option: CustomOption,
		IndicatorSeparator: () => null,
		DropdownIndicator: () => <TriangleDownIcon boxSize={2} />
	}

	const formatOptionLabel = ({ value, currencyImg }) => (
		<HStack w='100%'>
			<Image maxW={4} maxH={4} src={currencyImg} />
			<SmallText>{value}</SmallText>
		</HStack>
	)

	return (
		<ReactSelect
			styles={getCustomStyles(appTheme)}
			components={customComponents}
			loadMoreButton={loadMoreButton || undefined}
			formatOptionLabel={formatOptionLabel}
			{...props}
		/>
	)
}

Select.propTypes = {
	loadMoreButton: PropTypes.node,
	option: PropTypes.func
}

export default Select
