import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import World from 'public/assets/img/world.svg'
import List from 'public/assets/img/list.svg'
import { useTranslation } from 'next-i18next'
import { DisplayMode } from '~@types/api'

interface Props {
  mode: DisplayMode
  setter: (mode: DisplayMode) => void
}

const style: ButtonProps = {
  _hover: {
    opacity: 1,
  },
  display: { base: 'flex', md: 'none' },
  pos: 'absolute',
  bottom: 4,
  left: '50%',
  zIndex: 1000,
  transform: 'translateX(-50%)',
  bgColor: 'white',
}

const DisplayToggler = ({ mode, setter }: Props) => {
  const { t } = useTranslation()

  if (mode === 'list') {
    return (
      <Button {...style} leftIcon={<World />} onClick={() => setter('map')}>
        {t('displayMap')}
      </Button>
    )
  }

  return (
    <Button {...style} leftIcon={<List />} onClick={() => setter('list')}>
      {t('displayList')}
    </Button>
  )
}

export default DisplayToggler
