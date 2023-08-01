import { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps, Text } from '@lupebreak-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    text: '26 de Outubro - Disponível',
    children: <Text>26</Text>,
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
  args: { active: true },
}
export const onHover: StoryObj<TooltipProps> = {
  args: {
    showOnHover: true,
  },
}

export const Inactive: StoryObj<TooltipProps> = {}
