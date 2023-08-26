import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";

import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import { useState } from "react";


const Notes = ({ notes }) => {
  const[showSearch, setShowSearch] = useState(false);
  const[text, setText] = useState('');
  const[filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
      <header className="header notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} placeholder="Keyword....." />}
        <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>
        {showSearch ? <MdClose/> : <CiSearch/>}
        
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="create-notes" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
