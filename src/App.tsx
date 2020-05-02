import React from 'react';
import {Header} from './layouts/Header.layout';
import {Footer} from './layouts/Footer.layout';
import CreateEvent from './components/CreateEvent.component';
import Tasks from './components/Tasks.component';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="section">
        <CreateEvent />
      </div>
      <div className="section">
        <Tasks />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
