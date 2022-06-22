import {FC} from 'react'
import {ListsWidget10} from '../../../_metronic/partials/widgets/lists/ListsWidget10'
import {data} from './data'

type Props = {
  select: (id: number) => void
}
export const OverviewHeader: FC<Props> = ({select}) => {
  return <ListsWidget10 data={data} className='bg-transparent' selectCallback={select} />
}
