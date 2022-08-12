import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import NotesDataService from "../services/notes.service";

const NotesList = ({ getNotesId }) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const data = await NotesDataService.getAllNotes();
    console.log(data.docs);
    setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await NotesDataService.deleteNotes(id);
    getNotes();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getNotes}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(notes, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.notes}</td>
        
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getNotesId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default NotesList;