import { ContentProps } from '../components/Content'
import { getCardType } from './getCardType'

export const getColumns = (columns: ContentProps['content']) =>
  columns.map(column =>
    column.map(cardType => getCardType(cardType as 'sm' | 'md' | 'lg'))
  )
