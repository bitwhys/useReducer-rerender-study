import { BaseCard, LargeCard, SmallCard } from '../components/Cards'

const sizeMapping = {
  sm: SmallCard,
  md: BaseCard,
  lg: LargeCard,
}
export const getCardType = (ct: 'sm' | 'md' | 'lg') => sizeMapping[ct]
