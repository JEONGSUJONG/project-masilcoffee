import React from "react";
import * as TableLayout from "./Style_Table";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { ROUTES } from "../../../router/Routes";

const Table = ({
  trData,
  tdData,
  onTdClick = null,
  isMenuTable = false,
  isUserTable = false,
}) => {
  return (
    <TableLayout.Table>
      <thead>
        <tr>
          {trData.map((data, i) => {
            return <th key={data + i}>{data}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {isMenuTable
          ? // isMenuTable이 true인 경우
            tdData.map((rowData, rowI) => (
              <tr key={rowI}>
                {isUserTable ? (
                  <td>{rowData[1]}</td>
                ) : (
                  <td>
                    <TableLayout.Image src={rowData[1]} alt="coffee" />
                  </td>
                )}
                {rowData.slice(2).map((data, colI) => (
                  <td key={data + colI}>{data}</td>
                ))}
                <TableLayout.ButtonsBox>
                  <TableLayout.Button
                    className="edit"
                    onClick={() => onTdClick(rowData, "edit")}
                  >
                    <FiEdit />
                  </TableLayout.Button>
                  <TableLayout.Button
                    className="deletion"
                    onClick={() => onTdClick(rowData, "deletion")}
                  >
                    <FiTrash />
                  </TableLayout.Button>
                </TableLayout.ButtonsBox>
              </tr>
            ))
          : // isMenuTable이 false인 경우
            tdData.map((rowData, rowI) => (
              <tr key={rowI}>
                {rowData.slice(1).map((data, colI) => (
                  <TableLayout.Anchor key={data + colI}>
                    <a href={`${ROUTES.RECIPEVIEW.path}/${rowData[0]}`}>
                      {data}
                    </a>
                  </TableLayout.Anchor>
                ))}
              </tr>
            ))}
      </tbody>
    </TableLayout.Table>
  );
};

export default Table;