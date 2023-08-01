import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  position: 'relative',
  display: 'inline-flex',
})

export const TooltipCenteredContainer = styled('div', {
  position: 'absolute',
  width: '200px',
  marginLeft: '-100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  left: '50%',
  bottom: 'calc(90%)',
  svg: {
    position: 'relative',
    color: '$black',
    marginTop: -6,
  },
})

export const TooltipBox = styled('div', {
  width: 'max-content',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$black',
  padding: '$3 $4',
  borderRadius: '$xs',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
})
