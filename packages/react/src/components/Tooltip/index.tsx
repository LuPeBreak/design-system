import {
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
} from './styles'
import { Text } from '../Text'
import { ComponentProps } from 'react'
import { TooltipPortal, TooltipTrigger } from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof TooltipRoot> {
  text: string
  active?: boolean
  showOnHover?: boolean
}
export function Tooltip({ text, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <Text>{text}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}
Tooltip.displayName = 'Tooltip'
