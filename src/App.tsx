import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, TaskForm, TasksList } from "./pages";
import Layout from "./layout";
import PrivateRoute from "./hoc/PrivateRouteHOC";
import AuthHOC from "./hoc/AuthHOC";

const App = () => {
  return (
    <AuthHOC>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout>
                  <TasksList />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/manage/:taskId?"
            element={
              <PrivateRoute>
                <Layout>
                  <TaskForm />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthHOC>
  );
};

export default App;
