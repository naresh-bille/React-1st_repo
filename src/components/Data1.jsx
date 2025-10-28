
import Data from "../assets/Data.json";

function Data1() {
    console.log(Data);
  return (
    <div className="data-container">
      
      {Data.users.map((item) => (
        <div key={item.id} className="data-card">
          <p><strong>ID:</strong> {item.id}</p>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Email:</strong> {item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Data1;
