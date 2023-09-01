interface Props {
  type: string;
  name: string;
  labelText?: string;
  defaultValue?: string;
  required?: boolean;
}

const FormRow = ({ type, name, labelText, defaultValue, required }: Props) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className='form-input'
        defaultValue={defaultValue || ''}
        required={required}
      />
    </div>
  );
};
export default FormRow;
