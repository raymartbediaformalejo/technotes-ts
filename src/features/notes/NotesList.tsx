import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectAllNotes } from "./notesApiSlice";

const NotesList = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery(undefined, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  const allNote = useAppSelector(selectAllNotes);
  console.log("allNote: ", allNote);

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError && error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      content = <p className="errmsg">{`${JSON.parse(errMsg).message}`}</p>;
    } else {
      content = <p className="errmsg">{error.message}</p>;
    }
  }

  if (isSuccess) {
    const { ids } = notes;

    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId as string} />)
      : null;

    content = (
      <table className="table table--notes">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th note__status">
              Username
            </th>
            <th scope="col" className="table__th note__created">
              Created
            </th>
            <th scope="col" className="table__th note__updated">
              Updated
            </th>
            <th scope="col" className="table__th note__title">
              Title
            </th>
            <th scope="col" className="table__th note__username">
              Owner
            </th>
            <th scope="col" className="table__th note__edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
};
export default NotesList;
