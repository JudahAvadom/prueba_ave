import { useState } from "react"

function App() {
  // State
  const [password, setPassword] = useState("")
  const [isUppercase, setIsUppercase] = useState(false)
  const [isLowercase, setISLowercase] = useState(false)
  const [isNumber, setIsNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [enableButton,setEnableButton] = useState(false)

  // The regexps
  const Uppercase = /([A-Z])+/g
  const lowercase = /([a-z])+/g
  const number = /([0-9])+/g

  /**
   * This function eval the password witch each regexps
   * @param event 
   */
  const handleChange = (event : any) => {
    setPassword(event.target.value);
    setISLowercase(lowercase.test(password))
    setIsUppercase(Uppercase.test(password))
    setIsNumber(number.test(password))
    if (password.length >= 7) {
      setCharacters(true)
    } else {
      setCharacters(false)
    }
    if (isUppercase && isLowercase && isNumber && characters) {
      setEnableButton(true)
    } else {
      setEnableButton(false)
    }
  }
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <h2 className="text-2xl font-medium">Insert a Password</h2>
        <input 
          type="password" 
          name="password" 
          value={password}
          placeholder="Password"
          className="p-2 border-neutral-500 border-2 rounded-lg outline-none active:border-neutral-700"
          onChange={handleChange} 
        />
        <button 
          className={`my-2 py-1 rounded-lg text-white text-lg ${enableButton ? "bg-green-500" : "bg-green-300"}`}
          disabled={enableButton}
        >
          Submit
        </button>
      </div>
      <div>
        <span>Password must contain the following</span>
        <nav>
          <ul>
            <li>
              {isLowercase ? <span className="text-green-600">✓  A lowercase letter</span> : <span className="text-red-600">x  A lowercasee letter</span>}
            </li>
            <li>
              {isUppercase ? <span className="text-green-600">✓  A capital (Uppercase) letter</span> : <span className="text-red-600">x  A capital (Uppercase) letter</span>}
            </li>
            <li>
              {isNumber ? <span className="text-green-600">✓  A number</span> : <span className="text-red-600">x  A number</span>}
            </li>
            <li>
              {characters ? <span className="text-green-600">✓  Minimum 8 characters</span> : <span className="text-red-600">x  Minimum 8 characters</span>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default App
