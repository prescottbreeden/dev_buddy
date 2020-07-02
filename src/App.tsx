import React from "react";
import { Header } from "./layouts/Header.layout";
import { Footer } from "./layouts/Footer.layout";
import Tasks from "./components/Tasks.component";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NotePad from "./components/NotePad.component";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Tasks />
        <NotePad />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
