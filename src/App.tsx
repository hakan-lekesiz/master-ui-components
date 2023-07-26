import React from "react";
import { getDateFormats } from '@/index'

function App() {
  console.log(getDateFormats({ timestamp: new Date().getTime(), lang: "tr" }))
  return (
    <>
      {/* <Button /> */}

    </>
  )
}

export default App
