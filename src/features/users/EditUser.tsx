import { useParams } from "react-router-dom";
import { selectUserById } from "./usersApiSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import EditUserForm from "./EditUserForm";

const EditUser = () => {
  const { id } = useParams();

  const user = useAppSelector((state) => selectUserById(state, id as string));

  const content = user ? <EditUserForm user={user} /> : <p>Loading...</p>;

  return content;
};

export default EditUser;
