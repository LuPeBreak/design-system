import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@lupebreak-ui/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    title: {
      description: 'Toast Title',
      control: 'text',
    },
    description: {
      description: 'Toast text',
      control: 'text',
    },
    open: {
      description: 'Booleans controlling open and close',
    },
    onOpenChange: {
      description: 'Function controlling open state',
    },
  },
} as Meta<ToastProps>

const ControlledToast = ({ onOpenChange, open: _, ...args }: ToastProps) => {
  const [open, isOpen] = useState(false)
  return (
    <Box css={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={() => isOpen(!open)}>Show Toast</Button>
      <Toast open={open} onOpenChange={isOpen} {...args} />
    </Box>
  )
}
ControlledToast.displayName = 'Toast'
export const Primary: StoryObj<ToastProps> = {}

export const Controlled: StoryObj<ToastProps> = {
  render: (args) => <ControlledToast {...args} />,
  // <Toast
  //   open={openState}
  //   onOpenChange={isOpenState}
  //   title="Agendamento realizado"
  //   description="Quarta-feira, 23 de Outubro às 16h"
  // />,
}
