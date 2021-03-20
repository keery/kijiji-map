import React, { useMemo } from 'react'
import { useTheme } from '@chakra-ui/react'
import ReactSelect from 'react-select'
import { useController } from 'react-hook-form'
import { locations, provinces } from '~filters'
import { useTranslation } from 'next-i18next'

const getPicto = (value) => {
  if (provinces.includes(value)) {
    return 'city.svg'
  } else if (value === 0) {
    return 'canada.svg'
  }
  return 'pin.svg'
}

const getStyle = (theme) => {
  const before = {
    content: '""',
    display: 'inline-block',
  }

  return {
    menu: (styles, { getValue }) => ({
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
    menuList: (styles) => ({
      ...styles,
      overflowX: 'hidden',
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
        width: '250px',
        paddingRight: 10,
        paddingLeft: 10,
        ':before': {
          ...before,
          height: '35px',
          width: '35px',
          backgroundImage: ``,
          color: 'white',
          background: `url(/assets/img/pin.svg) center no-repeat, ${theme.gradient.blueViolet}`,
          borderRadius: '100%',
          marginRight: '5px',
        },
        ':hover': {
          borderColor: theme.colors.gray['300'],
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
          marginRight: '10px',
          background: `url(/assets/img/${getPicto(
            data.value,
          )}) center no-repeat, ${theme.gradient.blueViolet}`,
          borderRadius: theme.radii.lg,
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
const FilterLocation = ({ control }) => {
  const { t } = useTranslation('location')
  const theme = useTheme()
  const { field } = useController({
    name: 'location',
    control,
  })

  const options = useMemo(
    () =>
      locations.map((location) => ({
        value: location.value,
        label: t(location.label),
      })),
    [t],
  )

  const styles = useMemo(() => getStyle(theme), [theme])

  const onChange = (data) => {
    field.onChange(data?.value || '')
  }

  return (
    <ReactSelect
      name="location"
      placeholder={t('common:filters.location.placeholder')}
      options={options}
      styles={styles}
      onChange={onChange}
      isClearable
      menuPlacement="auto"
    />
  )
}

export default FilterLocation
