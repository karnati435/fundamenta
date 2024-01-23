import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { age, name, id, image } = person;
        console.log(name);
        console.log(id);
        console.log(age);
        console.log(image);
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
