const Card = ({title}) => {
  return (
    <>
     <h2>{title}</h2>
    </>
  )
}


const App = () => {
  return (
    <>
      <p>Props (properties) in react native </p>
      <h1>Movie list</h1>
      < Card title={"Star wars"}/>
      < Card title={"The lion King"}/>
      < Card title={"Avata"}/>
    </>
  )
}
export default App
