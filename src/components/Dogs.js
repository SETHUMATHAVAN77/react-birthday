import Dog from "./Dog";

const Dogs = ({ dogsData }) => {
  return (
    <div>
      {dogsData.map((dog, index) => {
        return <Dog {...dog} key={index} />;
      })}
    </div>
  );
};

export default Dogs;
