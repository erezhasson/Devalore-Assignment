import Button from "../Components/UI/Button/Button";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        justifyContent: "center",
        marginBottom: "25px",
      }}
    >
      <a href="/pets">
        <Button>Browse All Pets</Button>
      </a>
      <a href="/add-pet">
        <Button>Add New Pet</Button>
      </a>
    </div>
  );
};

export default Home;
