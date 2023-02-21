// From DisplayPost
let baseUrl, backEndData, img;
<>
{backEndData.length === 0? <img src={img} alt="" className="text mx-auto" />: <>
<h1 className="text-4xl mt-10 text-center">Display Data</h1>
  <table className="text  border-collapse border border-slate-40 mt-5" align="center">
<thead className="text">
      <tr>
            <th className="ext-lg border border-slate-300 bg-slate-200 px-6 py-2">S/N</th>
            <th className="ext-lg border border-slate-300 bg-slate-200 px-6 py-2">Title</th>
            <th className="ext-lg border border-slate-300 bg-slate-200 px-6 py-2">More</th>
            <th className="ext-lg border border-slate-300 bg-slate-200 px-6 py-2">Time</th>
            <th className="ext-lg border border-slate-300 bg-slate-200 px-6 py-2">Actions</th>
      </tr>
</thead>
<tbody className="text">
{backEndData.map((val, index) => (
      <tr className="text-center text-sm bg-slate-50" key={index}>
                  <td className="text-lg border border-slate-300 px-5 py-2 ">
                      {index+1}
                  </td>
                  <td className="text-lg border border-slate-300 px-2 py-2 ">
                      {val.title}
                  </td>
                  <td className="text-lg border border-slate-300 px-5 py-2 ">
                      {val.more}
                  </td>
                  <td className="text-lg border border-slate-300 px-5 py-2 ">
                      {val.time.substring(0, 10)} 
                  </td>
                  <img src={`${baseUrl}/postImage/${val.file}` } alt="databaseImage" className="text w-32" /> 
            <td className="text-lg border border-slate-300 px-5 py-2  flex">
                              <button className="mx-1 hover:bg-yellow-600 bg-yellow-400 px-4 py-1 rounded hover:text-white md:text-xl font-mono font-bold hover:scale-105" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" >Edit</button>
                              <button className="mx-1 hover:bg-red-700 bg-red-500 px-4 py-1 rounded text-white md:text-xl font-mono font-bold hover:scale-105">Delete</button>
                  </td>
                  {/* <td className="text">
                      <img src={`http://localhost:5000/asset/postImage/${backEndData.file}`} alt="" className="text" />
                  </td> */}
            </tr>

)) }
  
</tbody>
</table>
</>}</>