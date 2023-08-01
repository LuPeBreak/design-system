import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = styled(Toast.Provider, {})
export const ToastRoot = styled(Toast.Root, {
  padding: '$3 $5',
  backgroundColor: '$gray800',

  border: '1px solid $gray600',
  borderRadius: '$sm',

  display: 'grid',
  gridTemplateAreas: '"title close " "description close"',
  gridTemplateColumns: 'auto max-content',
  gap: '$1',
})
export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  display: 'flex',
  minWidth: '$80',
  justifyContent: 'flex-start',
})
export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  minWidth: '$80',
  display: 'flex',
  justifyContent: 'flex-start',
})
export const ToastClose = styled(Toast.Close, {
  gridArea: 'close',
  color: '$gray200',
})
export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
})
