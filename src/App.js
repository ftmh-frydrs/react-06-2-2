import "./App.css";
import formInputs from './formInputs.json';

const renderTextField = input => {
  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label><br/>
      <input className="border rounded w-[80%] p-2 text-gray-900" type="text" id={input.name} name={input.name} required={input.required} placeholder={input.placeholder} />
    </div>
  );
}

const renderEmailField = input => {
  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label><br/>
      <input className="border rounded w-[80%] p-2 text-gray-900" type="email" id={input.name} name={input.name} required={input.required} placeholder={input.placeholder} />
    </div>
  );
}

const renderPasswordField = input => {
  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label><br/>
      <input className="border rounded w-[80%] p-2 text-gray-900" type="password" id={input.name} name={input.name} required={input.required} placeholder={input.placeholder} />
    </div>
  );
}

const renderSelectField = input => {
  const options = input.options.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="m-2" key={input.id}>
      <label className="p-3">{input.label}</label><br/>
      <select className="border rounded w-[80%] p-2 text-gray-900" id={input.name} name={input.name} required={input.required}>
        {options}
      </select>
    </div>
  );
}

const renderRadioField = input => {
  const radioOptions = input.options.map(option => (
    <div className="m-2" key={option.value}>
      <input type="radio" id={option.value} name={input.name} value={option.value} />
      <label>{option.label}</label>
    </div>
  ));

  return (
    <div className="m-2" key={input.id}>
      <label>{input.label}</label><br/>
      <div className="flex">{radioOptions}</div>
    </div>
  );
}

const renderForm = inputs => {
  const formFields = inputs.map(input => {
    switch (input.type) {
      case 'text':
        return renderTextField(input);
      case 'email':
        return renderEmailField(input);
      case 'password':
        return renderPasswordField(input);
      case 'select':
        return renderSelectField(input);
      case 'radio':
        return renderRadioField(input);
      default:
        return null;
    }
  });

  return (
    <form>
      {formFields}
    </form>
  );
}

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="w-[25%] h-auto bg-slate-500 p-4 rounded-lg">
        {renderForm(formInputs)}
      </div>
    </div>
  );
}

export default App;
