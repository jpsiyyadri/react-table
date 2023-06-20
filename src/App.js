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
        <div className="d-flex justify-content-between">
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
          <div>
            <BButton className="rounded-5" size="sm">
              Translate New Documents
            </BButton>
          </div>
        </div>
        <div className="card border-0 mt-2">
          {/* <div class="table-wrapper-scroll-y my-custom-scrollbar"> */}
          <CustomTable />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
