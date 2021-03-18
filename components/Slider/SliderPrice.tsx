import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import { Handle } from './Handle'
import { SliderRail } from './SliderRail'
import { Track } from './Track'

const sliderStyle = {
  position: 'relative',
  width: '100%',
}

const SliderPrice = () => {
  const min = 0
  const max = 10000
  const [range, setRange] = useState([min, max])
  const [] = useState()

  const onUpdate = (value) => {
    console.log(value)
    setRange(value)
  }

  return (
    <Box>
      <Slider
        mode={2}
        step={1}
        domain={[+min, +max]}
        rootStyle={sliderStyle}
        onUpdate={onUpdate}
        values={range}
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
                  domain={[min, max]}
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
    </Box>
  )
}

export default SliderPrice
