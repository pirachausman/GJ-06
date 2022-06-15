import {useEffect, useState} from 'react'
import {fetchAssemblies, fetchStates} from '../visualization/VisualizationDataRequests'
import {ElectionTypes} from '../visualization/VisualizationTypes'
import DropDown from '../visualization/components/DropDown'
import ElectionTypeSelector from '../visualization/components/ElectionTypeSelector'
import {ListsWidget9, ListType} from '../../../_metronic/partials/widgets/lists/ListsWidget9'
import {BrowseFormType} from './BrowseTypes'

type Props = {
  onFormChange: (formData: BrowseFormType) => void
}

export default function BrowseForm({onFormChange}: Props) {
  const electionChangeHandler = async (e: any) => {
    setElectionType(e.target.value)
    setSelectedState('')
    setAssemblies([])
  }
  const stateChangeHandler = (e: any) => {
    setSelectedState(e.target.value)
    let assemblies_ = fetchAssemblies(electionType, e.target.value)
    setAssemblies(assemblies_)
    //onFormChange()
  }
  const segmentChangeHandler = (e: any) => {
    setSegment(!segment)
  }
  const assemblyChecked = (e: any) => {
    let selectAll: ListType | undefined = assemblies.find((a) => a.id === '0')
    let selected_: boolean = false
    if (e.target.value === '0' && selectAll) selected_ = !selectAll.selected
    const newAssemblies = assemblies.map((assembly) => {
      let selected: boolean = selected_
      if (e.target.value !== '0' && selected === false) {
        if (assembly.id === e.target.value) selected = !assembly.selected
        else selected = assembly.selected
      }
      return {
        ...assembly,
        selected,
      }
    })
    setAssemblies(newAssemblies)
  }
  const [states, setStates] = useState<any[]>([])
  const [electionType, setElectionType] = useState(ElectionTypes.LOKSABHA)
  const [selectedState, setSelectedState] = useState('')
  const [segment, setSegment] = useState(false)
  const [assemblies, setAssemblies] = useState<ListType[]>([])
  const showACSegment = () => electionType === ElectionTypes.LOKSABHA
  useEffect(() => {
    fetchStates(electionType).then(setStates)
  }, [electionType])

  return (
    <>
      <ElectionTypeSelector electionChangeHandler={electionChangeHandler} />
      <div className='d-flex flex-row pt-15 border-gray-800 pb-6'>
        <div style={{flexBasis: '100%'}} className='flex-grow-1 align-items-end d-flex'>
          <label className='form-label text-gray-500 fs-4'>State</label>
        </div>
        <DropDown options={states} onChange={stateChangeHandler} selected={selectedState} />
      </div>

      {showACSegment() && (
        <div className='form-check form-check-custom border-top form-check-solid pt-4'>
          <input
            className='form-check-input'
            type='checkbox'
            id='flexCheckDefault'
            checked={segment}
            onChange={segmentChangeHandler}
          />
          <label className='form-check-label text-gray-500 fs-6'>Show AC Segments</label>
        </div>
      )}

      <ListsWidget9 className='mb-5 bg-transparent' data={assemblies} onChange={assemblyChecked} />
    </>
  )
}
