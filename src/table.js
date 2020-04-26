import React, { Component } from  'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Emp ID</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.BodyData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>{row.emp_id}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

// class Table extends Component {
//   render() {
//     const { TableData } = this.props
//
//     return (
//       <table>
//         <TableHeader />
//         <TableBody BodyData={TableData} />
//       </table>
//     )
//   }
// }

function MakeList (props) {
  const myData = props.TableData;
  var tbl = <table id='t1'> <TableHeader /> <TableBody BodyData={myData} /> </table>;

  return tbl;
}

export default MakeList
