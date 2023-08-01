import {
  TooltipContainer,
  TooltipBox,
  TooltipCenteredContainer,
} from './styles'
import { Text } from '../Text'
import { CaretDown } from 'phosphor-react'
import { ComponentProps, useState } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipBox> {
  text: string
  active?: boolean
  showOnHover?: boolean
}
export function Tooltip({
  text,
  children,
  active = false,
  showOnHover = false,
  ...props
}: TooltipProps) {
  const [isOnHover, setIsOnHover] = useState(false)
  return (
    <TooltipContainer
      onMouseEnter={() => showOnHover && setIsOnHover(true)}
      onMouseLeave={() => showOnHover && setIsOnHover(false)}
    >
      {children}
      {(active || isOnHover) && (
        <TooltipCenteredContainer>
          <TooltipBox {...props}>
            <Text>{text}</Text>
          </TooltipBox>
          <CaretDown size={17} weight="fill" />
        </TooltipCenteredContainer>
      )}
    </TooltipContainer>
  )
}
Tooltip.displayName = 'Tooltip'
