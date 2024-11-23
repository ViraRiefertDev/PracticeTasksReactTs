import './styles.css';

function Input({ name, type, placeholder, label, id }) {
  return (
    <div className='input-wrapper'>
      <label className='input-label' htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type} name={name} placeholder={placeholder} />
    </div>
  );
}

export default Input;
