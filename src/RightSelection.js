
import languageMap from './languageMap';

function RightSelection({ value2, handleSelection2 }) {

  return (
    <div><p> {value2} </p>
      <select name="languages" id="languages" onChange={handleSelection2} value={value2}>
        {Object.entries(languageMap).map(([key, value]) => (
          <option>{value}</option>
        ))}
      </select>
    </div>)

}

export default RightSelection;