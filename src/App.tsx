import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./app/components/home/Home";
import "./index.css";
import { Provider } from "react-redux"
import { store } from "./redux/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* 
            1. кастомить поиск по странице
            2. блок приветствия где в карусель добавить технологии которые изучаю
            3. мои проекты 
            4. мои скилы 
            5. обомне 
            6. мои контакты          
            */}
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
