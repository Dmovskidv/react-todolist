import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigateHome = () => navigate("/react-todolist/");
  const navigateLogin = () => navigate("/react-todolist/login");
  const navigateForm = (taskId?: string) =>
    navigate(`/react-todolist/manage/${taskId || ""}`);

  return {
    navigateHome,
    navigateLogin,
    navigateForm,
  };
};

export default useAppNavigation;
