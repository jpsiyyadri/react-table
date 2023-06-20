import React from "react";
import {
  CustomTable,
  downloadMultipleFiles,
  deleteMultipleFiles,
} from "./components/CustomTable";
import { Button as BButton } from "react-bootstrap";

const App = () => {
  return (
    <div className="">
      <span className="bg-danger text-white">
        Check console for each button click...
      </span>
      <div className="container">
        <div className="card border-0 mt-2 rounded-4 p-3">
          <div className="d-flex justify-content-between mb-3 p-3">
            <div>
              <BButton
                className="rounded-5"
                size="sm"
                onClick={downloadMultipleFiles}
              >
                Download
              </BButton>
              <BButton
                className="rounded-5"
                size="sm"
                onClick={deleteMultipleFiles}
              >
                Delete
              </BButton>
            </div>
          </div>
          {/* <div class="table-wrapper-scroll-y my-custom-scrollbar"> */}
          <CustomTable />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
