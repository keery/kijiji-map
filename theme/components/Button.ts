const Button = {
  baseStyle: {
    fontWeight: '500',
    borderRadius: 'xl',
    lineHeight: 1,
    background: 'linear-gradient(to right, #8CA6DB, #B993D6)',
    _hover: {
      textDecoration: 'none',
    },
  },
  defaultProps: {
    colorScheme: 'white',
  },
  sizes: {
    md: {
      fontSize: '14px',
      letterSpacing: '.5px',
    },
    sm: {
      fontWeight: '400',
      borderRadius: 'sm',
      fontSize: '12px',
      px: '16px',
      letterSpacing: '.4px',
    },
    lg: {
      height: '52px',
    },
  },
}

export default Button
