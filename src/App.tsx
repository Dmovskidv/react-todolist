import { Outlet } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Layout from "./layout";

const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Outlet />
      </Layout>
    </AuthProvider>
  );
};

export default App;
