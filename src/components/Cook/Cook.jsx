
const Cook = ({ cookings,handlePreparingButton,CurrentlyCooking}) => {
  
    const totalTime = CurrentlyCooking.reduce((p, c) => p + c.preparing_time, 0);
    const totalCalories = CurrentlyCooking.reduce((p, c) => p + c.calories, 0);
    console.log(totalTime);

  return (
    <div className="lg:border-2 p-2 lg:rounded-lg">
      <h2 className="text-center font-bold lg:text-base-800 text-2xl">
        Want To Cook:{cookings.length}
      </h2>
      <div className="lg:w-2">
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
                    <button onClick={()=>handlePreparingButton(cook.recipe_id, cook)} className="btn btn-success ">Preparing</button>
                    </div>
                  </tr>
                    
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>


     

              <div>
                <hr  className="border-2 mt-2"/>
              <h2 className="text-center font-bold  text-base-800 text-2xl">Currently Cooking:{CurrentlyCooking.length}</h2>



              <div className="lg:w-2">
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
        {CurrentlyCooking.map((cook, idx) => (
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
                    
                    </div>
                  </tr>
                    
                </tbody>
              </table>
            </div>
          </div>
        ))}
          <div className="flex justify-between px-6 mt-12">
            <h3 className="font-bold">Total Time: {totalTime} </h3>
          <h3 className="font-bold">Total Calories: {totalCalories}</h3></div>
      </div>



              </div>
    </div>
  );
};

export default Cook;
