import './App.css';
import Counter from './components/Counter/Counter';
import AsyncCounter from './components/AsyncCounter/AsyncCounter';
import TestAxios from './components/TestAxios/TestAxios';
function App() {
  return (
    <>
      <TestAxios url = "https://api.github.com/users/siva010928" />
    </>
  );
}

export default App;
