const Dog = ({ id, img, name, age }) => {
  return (
    <div>
      <div>{id}</div>
      <div className="dogs">
        <img src={img} alt="dogs" />
        <div>
          <h3>{name}</h3>
          <h5>{age}</h5>
        </div>
        ✖️
      </div>
    </div>
  );
};

export default Dog;
