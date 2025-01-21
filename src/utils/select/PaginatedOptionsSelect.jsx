import _ from 'lodash'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Select from './Select'

const PaginatedOptionsSelect = ({ options: initialOptions, value = null, onChange, ...props }) => {
	const [selectedOption, setSelectedOption] = useState()
	const [options, setOptions] = useState(initialOptions)

	useEffect(() => {
		setOptions(initialOptions)
	}, [initialOptions])

	useEffect(() => {
		if (selectedOption && !options.some((elem) => elem.value === selectedOption.value)) {
			setOptions((oldOptions) => [selectedOption, ...oldOptions])
		}
	}, [selectedOption, options])

	return (
		<Select
			options={options}
			onChange={(v) => {
				onChange(v)
				setSelectedOption(v)
			}}
			value={options.find((option) => _.isEqual(option.value, value)) || null}
			{...props}
		/>
	)
}

PaginatedOptionsSelect.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onChange: PropTypes.func.isRequired
}

export default PaginatedOptionsSelect
