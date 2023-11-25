import { useParams } from "react-router-dom";
import { selectNoteById } from "./notesApiSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectAllUsers } from "../users/usersApiSlice";
import EditNoteForm from "./EditNoteForm";

const EditNote = () => {
  const { id } = useParams();

  const note = useAppSelector((state) => selectNoteById(state, id as string));
  const users = useAppSelector(selectAllUsers);

  const content =
    note && users ? (
      <EditNoteForm note={note} users={users} />
    ) : (
      <p>Loading...</p>
    );

  return content;
};
export default EditNote;
