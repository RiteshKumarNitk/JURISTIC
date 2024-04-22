import { useState } from "react"
import "./App.css"
import Pages from "./components/pages/Pages"
import Disclaimer from "./components/disclaimer/disclaimer"

function App() {
  const [isDisclaimerWatched, setIsDisclaimerWatched] = useState(false)
  if (!isDisclaimerWatched) return <Disclaimer setIsDisclaimerWatched={setIsDisclaimerWatched} />
  else return <Pages />
}

export default App
