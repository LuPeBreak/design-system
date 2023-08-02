import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})
export const TooltipRoot = styled(Tooltip.Root, {})
export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$3 $4',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
})
