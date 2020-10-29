import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css'
import Outstation from './Components/Outstation'
import logo from './assets/images/logo.png'


function App() {
  return (
    <div className="">
      <div className="header text-center mt-2">
        <img src={logo} className="img-fluid"/>
        <h1 className="py-3 ceo-head text-ceocabs">CEOCabs</h1>
        
<hr className="mt-0"/>
      </div>
      
      <Tabs className="mt-2">
        <TabList className="d-flex justify-content-around">
          <Tab>Outstation</Tab>
          <Tab>Rentals</Tab>
        </TabList>
        <hr />
        <TabPanel>
          <Outstation />
        </TabPanel>
        <TabPanel>
          <p>
            Rental
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;