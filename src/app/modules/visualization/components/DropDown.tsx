type Props = {
  options: any[]
  onChange: (e: any) => void
  selected: string
}
export default function DropDown({options, onChange, selected}: Props) {
  return (
    <select
      className='form-select form-select-solid flex-grow-1 border-0'
      data-control='select2'
      data-placeholder='select'
      onChange={onChange}
      value={selected}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
