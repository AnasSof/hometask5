import React from "react";

function Table({ columns, data, tableDescriptor, onRowClick }) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map((columnTitle) => (
            <th key={columnTitle} scope="col">
              {columnTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{++index}</th>
            {columns.map((columnTitle) => (
              <td
                onClick={() => onRowClick && columnTitle !== 'delete' && onRowClick(item)}
                key={item[columnTitle] + columnTitle}
              >
                {item[columnTitle]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
