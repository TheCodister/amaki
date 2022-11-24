import React, { useState } from 'react';
import {Login} from "./pages"

const App = () => {
  const [auth, setAuth] = useState(false)

  if(!auth){
    return (
      <main>
        <Login setAuth={setAuth}/>
      </main>
    )
  }

  return (
    <main>
      Welcome
    </main>
  );
}

export default App;
