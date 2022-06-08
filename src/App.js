import { Provider } from "react-redux";
import MyRouter from "./router";
import store from "./store";
import Header from "./component/Header";

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <MyRouter></MyRouter>
    </Provider>
  );
}

export default App;
