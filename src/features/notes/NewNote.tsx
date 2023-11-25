import { useAppSelector } from "../../hooks/useAppSelector";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";

const NewNote = () => {
  const users = useAppSelector(selectAllUsers);
  console.log("users NewNote: ", users);
  if (!users?.length) return <p>Not Currently Available</p>;
  const content = <NewNoteForm users={users} />;

  return content;
};
export default NewNote;
