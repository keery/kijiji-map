import React from 'react'
import PriceButton from '~components/Price/PriceButton'
import { useTranslation } from 'next-i18next'
import PricePopover from './PricePopover'

const FilterPrice = () => {
  const { t } = useTranslation()

  return (
    <PricePopover>
      <PriceButton />
    </PricePopover>
  )
}

export default FilterPrice
