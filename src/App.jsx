function App() {
  const arr = ['Grapes', 'Mango', 'Orange', 'Watermelon'];
  return (
    <div>
      
      {arr.map((fruit,index) => (
        <p className="text-3xl font-bold">{`${index} ${fruit}`}</p>
      ))}

      {/* <p>{arr[0]}</p>
    <p>{arr[1]}</p>
    <p>{arr[2]}</p>
    <p>{arr[3]}</p> */}
    </div>
  );
}

export default App;
