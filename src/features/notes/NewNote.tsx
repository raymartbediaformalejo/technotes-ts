import { useAppSelector } from "../../hooks/useAppSelector";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";

const NewNote = () => {
  const users = useAppSelector(selectAllUsers);
  console.log("users NewNote: ", users);

  const content = users.length ? (
    <NewNoteForm users={users} />
  ) : (
    <p>Loading...</p>
  );

  return content;
};
export default NewNote;
