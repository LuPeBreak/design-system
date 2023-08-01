import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastRoot {...props}>
        <ToastTitle asChild>
          <Heading css={{ color: '$white' }} size={'sm'}>
            {title}
          </Heading>
        </ToastTitle>
        <ToastDescription asChild>
          <Text css={{ color: '$gray200' }} size={'sm'}>
            {description}
          </Text>
        </ToastDescription>
        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
