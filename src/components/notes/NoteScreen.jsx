import NotesAppBar from './NotesAppBar';
const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Titulo de la entrada"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          name="entrada"
          id="entrada"
          cols="30"
          rows="10"
          className="notes__textarea"
          placeholder="Que tienes para contar?"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://media.istockphoto.com/photos/picture-of-a-young-border-collie-puppy-running-picture-id1192458666?k=20&m=1192458666&s=612x612&w=0&h=EUg_g8c3qDEuRicJULNxiAYqmrcYQCchznZrWlPZdmI="
            alt="imagen entrada"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
