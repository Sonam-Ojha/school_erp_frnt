import React from "react"; 

const DailyTask: React.FC = () => { 
  return ( 
   <div className="">
        <h3>Home Work</h3>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="form-group">
              <label htmlFor="task1">Date From</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="form-group">
              <label htmlFor="task1">Date To</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-lg-1 col-12">
            <button className="btn btn-primary mt-4">Search</button>
          </div>
          <div className="col-lg-2 col-12">
            <button className="btn btn-primary mt-4">Reset</button>
          </div>
        </div>
        <div className="row">
          <div className="table">
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Uploaded Date</th>
                  <th>Subject</th>
                  <th>Homework</th>
                  <th>Classwork</th>
                  <th>Homework Attached File</th>
                  <th>Action</th>   
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>01-01-2024</td>
                  <td>Math</td>
                  <td>Complete Exercise 5</td>
                  <td>Complete React Assignment</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      <svg
                        fill="#000000"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        id="download"
                        data-name="Line Color"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon line-color"
                      >
                        <path
                          id="secondary"
                          d="M20,17v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17"
                          style={{
                            fill: "none",
                            stroke: "rgb(44, 169, 188)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                        <path
                          id="primary"
                          d="M5.65,10.56,7,9a1,1,0,0,1,1.41-.11L10,10.34V3h4v7.34l1.64-1.41A1,1,0,0,1,17.05,9l1.3,1.52A1,1,0,0,1,18.24,12l-5.59,4.79a1,1,0,0,1-1.3,0L5.76,12A1,1,0,0,1,5.65,10.56Z"
                          style={{
                            fill: "none",
                            stroke: "rgb(0, 0, 0)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">View</button>
                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>01-01-2024</td>
                  <td>Math</td>
                  <td>Complete Exercise 5</td>
                  <td>Complete React Assignment</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      <svg
                        fill="#000000"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        id="download"
                        data-name="Line Color"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon line-color"
                      >
                        <path
                          id="secondary"
                          d="M20,17v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17"
                          style={{
                            fill: "none",
                            stroke: "rgb(44, 169, 188)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                        <path
                          id="primary"
                          d="M5.65,10.56,7,9a1,1,0,0,1,1.41-.11L10,10.34V3h4v7.34l1.64-1.41A1,1,0,0,1,17.05,9l1.3,1.52A1,1,0,0,1,18.24,12l-5.59,4.79a1,1,0,0,1-1.3,0L5.76,12A1,1,0,0,1,5.65,10.56Z"
                          style={{
                            fill: "none",
                            stroke: "rgb(0, 0, 0)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">View</button>
                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>01-01-2024</td>
                  <td>Math</td>
                  <td>Complete Exercise 5</td>
                  <td>Complete React Assignment</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      <svg
                        fill="#000000"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        id="download"
                        data-name="Line Color"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon line-color"
                      >
                        <path
                          id="secondary"
                          d="M20,17v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17"
                          style={{
                            fill: "none",
                            stroke: "rgb(44, 169, 188)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                        <path
                          id="primary"
                          d="M5.65,10.56,7,9a1,1,0,0,1,1.41-.11L10,10.34V3h4v7.34l1.64-1.41A1,1,0,0,1,17.05,9l1.3,1.52A1,1,0,0,1,18.24,12l-5.59,4.79a1,1,0,0,1-1.3,0L5.76,12A1,1,0,0,1,5.65,10.56Z"
                          style={{
                            fill: "none",
                            stroke: "rgb(0, 0, 0)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">View</button>
                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>01-01-2024</td>
                  <td>Math</td>
                  <td>Complete Exercise 5</td>
                  <td>Complete React Assignment</td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      <svg
                        fill="#000000"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        id="download"
                        data-name="Line Color"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon line-color"
                      >
                        <path
                          id="secondary"
                          d="M20,17v3a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17"
                          style={{
                            fill: "none",
                            stroke: "rgb(44, 169, 188)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                        <path
                          id="primary"
                          d="M5.65,10.56,7,9a1,1,0,0,1,1.41-.11L10,10.34V3h4v7.34l1.64-1.41A1,1,0,0,1,17.05,9l1.3,1.52A1,1,0,0,1,18.24,12l-5.59,4.79a1,1,0,0,1-1.3,0L5.76,12A1,1,0,0,1,5.65,10.56Z"
                          style={{
                            fill: "none",
                            stroke: "rgb(0, 0, 0)",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                          }}
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm me-2">View</button>
                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                </tbody>
            </table>
          </div>
        </div>
   </div>
  ); 
}; 

export default DailyTask;