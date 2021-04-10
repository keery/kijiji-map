import React from 'react'
import PriceButton from '~components/Price/PriceButton'
import PricePopover from './PricePopover'

const FilterPrice = () => {
  return (
    <PricePopover>
      <PriceButton />
    </PricePopover>
  )
}

export default FilterPrice
