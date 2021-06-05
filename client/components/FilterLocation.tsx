import React, { useMemo } from 'react'
import { useTheme } from '@chakra-ui/react'
import ReactSelect from 'react-select'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { useLocation } from '~hooks/useLocation'

const getPicto = (type) => {
  switch (type) {
    case 'region':
      return 'region.svg'
    case 'city':
      return 'city.svg'
    case 'country':
      return 'canada.svg'
    default:
      return 'pin.svg'
  }
}

const getStyle = (theme, location) => {
  const before = {
    content: '""',
    display: 'inline-block',
  }

  return {
    menu: (styles) => ({
      ...styles,
      width: '400px',
      borderRadius: theme.radii.xl,
      overflow: 'hidden',
      paddingTop: '10px',
      paddingBottom: '10px',
      boxShadow: 'none',
      border: '1px solid',
      borderColor: theme.colors.gray['300'],
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      display: Boolean(location) ? 'none' : 'flex',
    }),
    placeholder: (styles) => ({
      ...styles,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '95%',
      textOverflow: 'ellipsis',
    }),
    menuList: (styles) => ({
      ...styles,
      overflowX: 'hidden',
    }),
    singleValue: (styles) => ({
      ...styles,
      fontFamily: location.value === 0 ? 'mabry medium' : 'mabry',
      color: location.value === 0 ? theme.colors.gray['300'] : 'black',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    control: (styles) => {
      return {
        ...styles,
        ...theme.layerStyles.filter,
        borderRadius: theme.radii.xl,
        backgroundColor: 'white',
        width: '350px',
        paddingRight: 10,
        paddingLeft: 10,
        ':hover': {
          borderColor: theme.colors.inputHover,
        },
        ':before': {
          ...before,
          height: '35px',
          width: '35px',
          backgroundImage: ``,
          color: 'white',
          background: `url(/assets/img/${getPicto(
            location?.type,
          )}) center no-repeat, ${theme.gradient.blueViolet}`,
          backgroundSize: '40%, contain',
          borderRadius: '100%',
          marginRight: '5px',
        },
      }
    },
    option: (styles, { data, isSelected }) => {
      return {
        ...styles,
        textTransform: 'capitalize',
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        paddingLeft: '30px',
        backgroundColor: isSelected
          ? theme.colors.blue['500']
          : styles.backgroundColor,
        ':before': {
          ...before,
          width: '45px',
          height: '45px',
          padding: '10px',
          marginRight: '10px',
          background: `url(/assets/img/${getPicto(
            data.type,
          )}) center no-repeat, ${theme.gradient.blueViolet}`,
          backgroundSize: '40%, contain',
          borderRadius: '8px',
          backgroundColor: isSelected
            ? theme.colors.blue['200']
            : theme.colors.gray['100'],
          border: '1px solid',
          borderColor: isSelected
            ? theme.colors.blue['500']
            : theme.colors.gray['200'],
        },
      }
    },
  }
}
const FilterLocation = () => {
  const { control, setValue } = useFormContext()
  const { data: location, isLoading } = useLocation()
  const { t } = useTranslation('location')
  const theme = useTheme()
  const { field } = useController({
    name: 'location',
    control,
  })

  const styles = useMemo(
    () => getStyle(theme, field.value),
    [theme, field.value],
  )

  const onChange = (data) => {
    if (!data) {
      setValue('bounds', null)
    }
    field.onChange(data || '')
  }

  return (
    <ReactSelect
      name="location"
      placeholder={t('common:filters.location.placeholder')}
      options={location}
      value={isLoading ? false : field.value}
      styles={styles}
      onChange={onChange}
      isClearable
      menuPlacement="auto"
    />
  )
}

export default FilterLocation
