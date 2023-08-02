import { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps, Text, Button } from '@lupebreak-ui/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    text: '26 de Outubro - Disponível',
    children: <Text>26</Text>,
  },
  argTypes: {
    children: {
      control: { type: null },
      description: 'Any React node that will trigger the tooltip',
    },
    text: {
      description: 'Tooltip text',
      control: 'text',
    },
    open: {
      description: 'Boolean controlling open and close',
      control: 'boolean',
      defaultValue: true,
    },
    onOpenChange: {
      description: 'Function controlling open state',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            marginTop: '$10',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}

const ControlledToolTip = ({
  onOpenChange,
  open: _,
  ...args
}: TooltipProps) => {
  const [open, isOpen] = useState(false)
  return (
    <Box css={{ display: 'flex', justifyContent: 'center' }}>
      <Tooltip open={open} {...args}>
        <Button onClick={() => isOpen(!open)}>Show Tooltip</Button>
      </Tooltip>
    </Box>
  )
}
ControlledToolTip.displayName = 'Toast'

export const Controlled: StoryObj<TooltipProps> = {
  args: {
    text: 'This is a controlled tooltip',
    open: true,
  },
  render: (args) => <ControlledToolTip open={args.open} {...args} />,
}
