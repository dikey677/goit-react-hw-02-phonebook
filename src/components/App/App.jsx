import React from "react";
import { nanoid } from 'nanoid'
import Input from "../Input/Input";

class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <form>
        <Input />
      </form>
    )
  }
}

export default App;
