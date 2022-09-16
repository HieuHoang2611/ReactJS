import { Outlet,useNavigate, Link } from "react-router-dom";

export default function Employee (){
  let navigate = useNavigate(); 
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    return (
      <>
        <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>
                  <button onClick={() =>navigate (`expenses/${index}`)}>
                    Detail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    <div>
      <Outlet /> 
    </div>

      </>
    )
}