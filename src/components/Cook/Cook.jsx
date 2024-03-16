
const Cook = ({ cookings }) => {
  

  return (
    <div className="border-2 p-2 rounded-lg">
      <h2 className="text-center font-bold text-base-800 text-2xl">
        Want To Cook:{cookings.length}
      </h2>
      <div className="w-2">
        <table className="table" >
          {/* head */}
          <thead>
            <tr > 

              <th>No</th>
              <th>Name</th>
              <th>Time</th>
              <th >Calories</th>
              
              
            </tr>
          </thead>
        
        </table>
      </div>

      <div className="ml-2">
        {cookings.map((cook, idx) => (
          <div key={idx}>
            <div className="mt-5 bg-slate-400 p-2 rounded-lg ">
              <table>
                <tbody>
                  {/* row 1 */}
                  <tr >
                    <th>{idx + 1}.</th>
                    <td >{cook.recipe_name}</td>
                    <td>{cook.preparing_time}</td>
                    <td className="">{cook.calories}</td>
                    <div>
                    <button className="btn btn-success ">Preparing</button>
                    </div>
                  </tr>
                    
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cook;
