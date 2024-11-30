
import languageMap from './languageMap';

function LeftSelection({ value, handleSelection }) {

  return (
    <div><p> {value} </p>
      <select name="languages" id="languages" onChange={handleSelection} value={value}>
        {Object.entries(languageMap).map(([key, value]) => (
          <option>{value}</option>
        ))}
      </select>
    </div>)

}

export default LeftSelection;