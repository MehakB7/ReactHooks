import './App.css';
import { examples } from './component';
import { useState } from 'react';
import Heading from './layout/Heading';
import Sidebar from './layout/Sidebar';
import Section from './layout/Section';

function App() {
  const [seleted, setSelect] = useState("");
  const selectedItem = examples.find(item => item.title === seleted);


  const onSelect = (value) => {
    setSelect(value)
  }


  return (
    <div className="App">
      <Sidebar options={examples.map(item => item.title)} seleted={seleted} onSelect={onSelect} />
      <div style={{ justifySelf: "center" }}>
        <Heading title={selectedItem?.title || ""} desc={selectedItem?.desc || ""} />
        {selectedItem && <Section>{selectedItem.component}</Section>}
      </div>

    </div>
  );
}

export default App;
