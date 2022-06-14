import {useEffect, useRef, useState} from 'react'
import {visualizationVarOptions} from '../VisualizationData'
import {
  fetchStates,
  fetchVisualizationOptions,
  fetchVisualizationType,
} from '../VisualizationDataRequests'
import {ElectionTypes} from '../VisualizationTypes'
import DropDown from './DropDown'
import ElectionTypeSelector from './ElectionTypeSelector'

export default function ElectionForm() {
  const electionChangeHandler = async (e: any) => {
    setElectionType(e.target.value)
    setSelectedState('')
    setVariable('')
  }
  const stateChangeHandler = (e: any) => {
    setSelectedState(e.target.value)
  }
  const variableChangeHandler = async (e: any) => {
    const options = fetchVisualizationOptions(e.target.value)
    setVisualizationOptions(options)
    setVariable(e.target.value)
    setVisualizationOption('')
  }
  const visualizationChangeHandler = async (e: any) => {
    setVisualizationOption(e.target.value)
    visualizationType.current = fetchVisualizationType(e.target.value)
  }

  const [states, setStates] = useState<any[]>([])
  const [visualizationOptions, setVisualizationOptions] = useState<any[]>([])
  const variableOptions = useRef(visualizationVarOptions)
  const [electionType, setElectionType] = useState(ElectionTypes.LOKSABHA)
  const [selectedState, setSelectedState] = useState('')
  const [variable, setVariable] = useState('')
  const [visualizationOption, setVisualizationOption] = useState('')
  const visualizationType = useRef('')

  const showACSegment = () =>
    electionType === ElectionTypes.LOKSABHA &&
    visualizationOption !== '' &&
    visualizationOption !== 'voterTurnoutChart' &&
    visualizationOption !== 'voterTurnoutMap' &&
    variable !== '' &&
    variable !== 'Candidate' &&
    variable !== 'ADR'

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
      {selectedState && (
        <div className='d-flex flex-row pt-4 border-top border-gray-800 pb-6'>
          <div style={{flexBasis: '100%'}} className='flex-grow-1 align-items-end d-flex'>
            <label className='form-label text-gray-500 fs-4'>Variable</label>
          </div>
          <DropDown
            options={variableOptions.current}
            onChange={variableChangeHandler}
            selected={variable}
          />
        </div>
      )}
      {variable && (
        <div className='d-flex flex-row pt-4 border-top border-gray-800 pb-6'>
          <div style={{flexBasis: '100%'}} className='flex-grow-1 align-items-end d-flex'>
            <label className='form-label text-gray-500 fs-4'>Visualization</label>
          </div>
          <DropDown
            options={visualizationOptions}
            onChange={visualizationChangeHandler}
            selected={visualizationOption}
          />
        </div>
      )}
      {showACSegment() && (
        <div className='form-check form-check-custom border-top form-check-solid pt-4'>
          <input className='form-check-input' type='checkbox' id='flexCheckDefault' />
          <label className='form-check-label text-gray-500 fs-6'>Show AC Segments</label>
        </div>
      )}
    </>
  )
}
