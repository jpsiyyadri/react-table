import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { Table as BTable, Button as BButton } from "react-bootstrap";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import iconDownload from "../public/download.svg";
// import { iconDelete } from "assets/delete.svg";
// const [rowSelection, setRowSelection] = React.useState({});

export const CustomTable = () => {
  const columns = React.useMemo(
    () => [
      {
        id: "select",
        // header: ({ table }) => (
        //   <IndeterminateCheckbox
        //     {...{
        //       checked: table.getIsAllRowsSelected(),
        //       indeterminate: table.getIsSomeRowsSelected(),
        //       onChange: table.getToggleAllRowsSelectedHandler(),
        //     }}
        //   />
        // ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
              data-id={row.getValue("firstName")}
            />
          </div>
        ),
      },
      {
        accessorKey: "firstName",
        id: "firstName",
        header: () => <span>First Name</span>,
        cell: (info) => info.getValue(),
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
      },

      {
        accessorKey: "age",
        header: () => "Age",
      },

      {
        accessorKey: "visits",
        header: () => <span>Visits</span>,
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "progress",
        header: "Profile Progress",
      },
      {
        accessorFn: (row) => row.lastName,
        id: "action",
        header: () => <span>Action</span>,
        cell: (info) => (
          <div className="">
            <BButton
              className="border-0"
              fileid={info.getValue()}
              onClick={(d) => deleteFile(d.target.getAttribute("fileid"))}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </BButton>
            <BButton
              className="border-0 mx-2"
              fileid={info.getValue()}
              onClick={(d) => downloadFile(d.target.getAttribute("fileid"))}
            >
              <FontAwesomeIcon icon={faDownload} />
            </BButton>
          </div>
        ),
      },
    ],
    []
  );

  const [data, setData] = React.useState(() => [
    {
      firstName: "a",
      lastName: "b",
      age: 1,
      visits: 2,
      progress: 3,
      status: "single",
    },
    {
      firstName: "c",
      lastName: "d",
      age: 4,
      visits: 5,
      progress: 6,
      status: "relationship",
    },

    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
    {
      firstName: "e",
      lastName: "f",
      age: 7,
      visits: 8,
      progress: 9,
      status: "complicated",
    },
  ]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <BTable className="table hovered table-fixed table-scroll" size="lg">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-bottom-1">
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </BTable>
    </div>
  );
};

function deleteFile(fileId) {
  console.log("delete", fileId);
}

function downloadFile(fileId) {
  console.log("download", fileId);
}

function fetchSelectedFiles() {
  return Array.prototype.slice
    .call(document.getElementsByName("my-checkbox"))
    .filter((ch) => ch.checked == true)
    .map((d) => {
      return d.dataset.id;
    });
}

export function deleteMultipleFiles() {
  console.log("delete", fetchSelectedFiles());
}

export function downloadMultipleFiles() {
  console.log("download", fetchSelectedFiles());
}

function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      name="my-checkbox"
      className={className + " cursor-pointer my-checkbox"}
      {...rest}
    />
  );
}
