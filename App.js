import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNotes from "./pages/CreateNotes";
import EditNotes from "./pages/EditNotes";
import dummyNotes from "./dummy_notes";

import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/create-notes"
            element={<CreateNotes setNotes={setNotes} />}
          />
          <Route path="/edit-notes/:id" element={<EditNotes notes={notes} setNotes={setNotes}/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
