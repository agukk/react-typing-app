import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";

function App() {
  return (
    <DefaultLayout>
      <Router />
    </DefaultLayout>
  );
}

export default App;
