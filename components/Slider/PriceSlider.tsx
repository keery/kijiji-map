import React from 'react'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import throttle from 'lodash.throttle'
import { useFormContext } from 'react-hook-form'
import { DEFAULT_MAX_PRICE, DEFAULT_MIN_PRICE } from '~constants'
import { Handle } from './Handle'
import { SliderRail } from './SliderRail'
import { Track } from './Track'

interface ISliderPrice {}
const sliderStyle = {
  position: 'relative',
  width: '100%',
}

const SliderPrice = (props: ISliderPrice) => {
  const { setValue } = useFormContext()

  const onUpdate = (value) => {
    setValue('min', value[0])
    setValue('max', value[1])
  }

  return (
    <Slider
      mode={2}
      step={10}
      domain={[+DEFAULT_MIN_PRICE, +DEFAULT_MAX_PRICE]}
      rootStyle={sliderStyle}
      onUpdate={throttle(onUpdate, 150)}
      values={[+DEFAULT_MIN_PRICE, +DEFAULT_MAX_PRICE]}
    >
      <Rail>
        {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
      </Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <>
            {handles.map((handle) => (
              <Handle
                key={handle.id}
                handle={handle}
                domain={[DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE]}
                getHandleProps={getHandleProps}
              />
            ))}
          </>
        )}
      </Handles>
      <Tracks right={false} left={false}>
        {({ tracks, getTrackProps }) => (
          <>
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </>
        )}
      </Tracks>
    </Slider>
  )
}

export default SliderPrice
