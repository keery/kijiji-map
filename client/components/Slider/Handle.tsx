import { Fragment } from 'react'
import { Circle, Icon, Divider } from '@chakra-ui/react'
import { MdDragHandle } from 'react-icons/md'

export function Handle({
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) {
  return (
    <Fragment>
      <Circle
        {...getHandleProps(id)}
        size="27px"
        pos="absolute"
        left={`${percent}%`}
        transform="translate(-50%, -50%)"
        zIndex={5}
        cursor="pointer"
        border="1px solid"
        borderColor="gray.400"
        backgroundColor="white"
        display="flex"
        p="5px"
      >
        <Divider transform="rotate(90deg)" />
        <Divider transform="rotate(90deg)" />
        <Divider transform="rotate(90deg)" />
      </Circle>
      <div
        role="slider"
        style={{
          left: `${percent}%`,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: '#333',
        }}
      />
    </Fragment>
  )
}
