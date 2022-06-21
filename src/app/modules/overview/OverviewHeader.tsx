import {FC} from 'react'
import {ListsWidget10} from '../../../_metronic/partials/widgets/lists/ListsWidget10'

export const data = [
  {title: 'Total number of contestants', subtitle: '2022 & 2017'},
  {title: 'Total number of women contestants', subtitle: '2022 & 2017'},
  {title: 'Total number of political parties', subtitle: '2022 & 2017'},
  {title: 'Total number of rerunning incumbents', subtitle: '2022 & 2017'},
  {title: 'Total number of turncoats', subtitle: '2022 & 2017'},
  {title: 'Total number of rerunning contestants', subtitle: '2022 & 2017'},
  {title: 'Average age of contestants', subtitle: '2022 & 2017'},
  {title: 'Parties contested and represented', subtitle: '2017'},
  {title: 'Ratio of first time MLAs', subtitle: '2017'},
  {title: 'Party-wise first time MLAs', subtitle: '2017'},
  {title: 'Turncoats', subtitle: '2017'},
  {title: 'Turncoats by party', subtitle: '2017'},
  {title: 'Voter Turnout', subtitle: '2017'},
  {title: 'Constituencies', subtitle: ''},
  {title: 'Representation by Gender', subtitle: '2017'},
  {title: 'Party Seat Share', subtitle: '2017'},
  {title: 'Seat Share across States (INC & BJP)', subtitle: '2017'},
]

type Props = {
  select: (id: number) => void
}
export const OverviewHeader: FC<Props> = ({select}) => {
  return <ListsWidget10 data={data} className='bg-transparent' selectCallback={select} />
}
