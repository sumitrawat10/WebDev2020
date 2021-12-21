import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  // https://programmingwithmosh.com/react/multiple-css-classes-react/
  function classList(classes) {
    return Object.entries(classes)
      .filter(entry => entry[1])
      .map(entry => entry[0])
      .join(" ");
  }

  return (
    <div
      className={classList({
        note: true,
        "note--blocked": props.blocked === true
      })}
    >
      <h1>{props.blocked ? "Error" : props.title || "Empty note"}</h1>
      <p>{props.blocked ? "Too many entries." : props.content || "📋"}</p>
      {!props.blocked && (
        <button onClick={handleClick}>
          <DeleteForeverIcon />
        </button>
      )}
    </div>
  );
}

export default Note;
