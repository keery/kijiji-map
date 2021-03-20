import React from 'react'
import PriceButton from '~components/Location/LocationButton'
import { useTranslation } from 'next-i18next'

const FilterLocation = () => {
  const { t } = useTranslation()

  return (
    <PricePopover>
      <PriceButton />
    </PricePopover>
  )
}

export default FilterLocation
