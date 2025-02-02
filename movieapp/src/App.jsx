const Card = ({ title, ReleaseDate, Rating }) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <h4>{ReleaseDate}</h4>
        <h5>{Rating}</h5>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <p>Props (properties) in react native </p>
      <h1>Movie list</h1>
      <div className="Card_con">
        <Card title={"Star wars"} ReleaseDate={"2022"} Rating={7.8} />
        <Card title={"The lion King"} ReleaseDate={"2024"} />
        <Card title={"Avatar"} ReleaseDate={"2018"} />
      </div>
    </>
  );
};
export default App;
