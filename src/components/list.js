import React from "react";

const List = ({ person, removePerson }) => {
  return (
    <div>
      <h1>{person.length} Birthdays Remaining</h1>
      {person.map((persons) => {
        const { id, img, name, age } = persons;

        return (
          <div className="dogs" key={id}>
            <img src={img} alt="dog" />
            <div>
              <h3>{name}</h3>
              <h5>{age}</h5>
            </div>
            <button
              type="button"
              className="button"
              onClick={() => removePerson(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
