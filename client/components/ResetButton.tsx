import React, { useCallback } from 'react'
import { Button } from '@chakra-ui/react'
import { getResetValue } from '~utils/filters'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'

const ResetButton = () => {
  const { t } = useTranslation()
  const { reset } = useFormContext()

  const onClick = useCallback(() => {
    const defaultValues = getResetValue()
    reset(defaultValues)
  }, [])

  return (
    <Button variant="ghost" textDecoration="underline" onClick={onClick} px={0}>
      {t('filters.reset')}
    </Button>
  )
}

export default ResetButton
