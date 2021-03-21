import React, { useMemo } from 'react'
import { Flex, Text, Tooltip } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import Valid from 'public/assets/img/valid.svg'
import Times from 'public/assets/img/times.svg'

interface IAttributeCard {
  name: string
  value: string | number
  icon: JSX.Element
  displayBoolean?: boolean
}

const AttributeCard = ({
  name,
  value,
  icon,
  displayBoolean = false,
}: IAttributeCard) => {
  const { t } = useTranslation('common')
  const { display_value, tooltip } = useMemo(() => {
    if (!displayBoolean)
      return {
        display_value: value,
        tooltip: t(`ad.attribute.${name}`, { nb: value }),
      }
    return {
      tooltip: value ? t(`ad.attribute.${name}`) : t(`ad.attribute.${name}No`),
      display_value: value ? <Valid /> : <Times color="red" />,
    }
  }, [value, displayBoolean])

  return (
    <Tooltip label={tooltip}>
      <Flex alignItems="center">
        <Text pr={2}>{display_value}</Text>
        {icon}
      </Flex>
    </Tooltip>
  )
}

export default AttributeCard
