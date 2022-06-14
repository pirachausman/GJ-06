import {useState} from 'react'

interface Props {
  electionChangeHandler: (e: any) => void
}
export default function ElectionTypeSelector({electionChangeHandler}: Props) {
  const [selected, setSelected] = useState('GE')
  const changeHandler = (e: any) => {
    setSelected(e.target.value)
    electionChangeHandler(e)
  }
  return (
    <div className='mb-5'>
      <div className='nav-group nav-group-fluid bg-transparent'>
        <label>
          <input
            type='radio'
            className='btn-check'
            name='lok_sabha'
            value='GE'
            checked={selected === 'GE'}
            onChange={changeHandler}
          />
          <span className='btn py-5 btn-color-gray-800 btn-active btn-active-danger'>
            Lok Sabha
          </span>
        </label>

        <label>
          <input
            type='radio'
            className='btn-check'
            name='vidhan_sabha'
            value='AE'
            checked={selected === 'AE'}
            onChange={changeHandler}
          />
          <span className='btn py-5 btn-color-gray-800 btn-active btn-active-danger px-4'>
            Vidhan Sabha
          </span>
        </label>
      </div>
    </div>
  )
}
