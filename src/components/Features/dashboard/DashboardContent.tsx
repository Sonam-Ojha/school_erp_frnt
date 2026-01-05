import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Tabs, Tab, Button, Table, Form } from 'react-bootstrap';
import { getCostCenterAttendance, getAllUserAttendance, getUserLogAttendance, searchEmployee } from '../../../api/attendance';
import '../../../styles/Global.scss';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const Dashboard: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());
  return (

    <div className="">
      <div className="header d-flex justify-content-between align-items-center">
        <h3 className="mb-4 color-primary">Student Dashboard</h3>
      </div>

      {/* Profile Section and Quick Links */}
      <div className="row">
        <div className="col-lg-4 mb-sm-3 mb-lg-0">
          <div className="profile-card d-flex gap-3 align-items-center px-3 py-4 mb-3  ">
            <img src="src/assets/img/dummy_img.svg" alt="Student" />
            <div>
              <h5 className="color-white">Aaradhya Sharma</h5>
              <p  className="color-white mb-0">
                Class: III, C
                <br />
                Roll No: 36545
              </p>
            </div>
          </div>

         <div className="card">
          <div className="card-header">
            Quick Links
          </div>
          <div className="card-body mt-3 mb-4">
            <div className=" px-3">
            <div className="row ">
              <div className="col-lg-6 col-6 mb-4">
                <div className=" quick-links blue d-flex gap-3 align-items-center text-center">
                 <img src="src/assets/img/event.svg" alt="" className='quick-links-img blue' />
                 <p className='color-primary mb-0'>Event</p>
                </div>
              </div>
              <div className="col-lg-6 col-6 mb-4">
                <div className=" quick-links green d-flex gap-3 align-items-center text-center">
                 <img src="src/assets/img/event.svg" alt="" className='quick-links-img green' />
                 <p className='color-primary mb-0'>Event</p>
                </div>
              </div>
              <div className="col-lg-6 col-6 ">
                <div className=" quick-links yellow d-flex gap-3 align-items-center text-center">
                 <img src="src/assets/img/event.svg" alt="" className='quick-links-img yellow' />
                 <p className='color-primary mb-0'>Event</p>
                </div>
              </div>
              <div className="col-lg-6 col-6 ">
                <div className=" quick-links orange d-flex gap-3 align-items-center text-center">
                 <img src="src/assets/img/event.svg" alt="" className='quick-links-img orange' />
                 <p className='color-primary mb-0'>Event</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>

        {/* Homework and Notice Board */}
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6 mb-sm-3 mb-lg-0">
              <div className="card">
                 <div className="card-header d-flex justify-content-between align-items-center  px-3">
                     Home Works
                    <div className="d-flex align-items-center mt-1">
                      <p className="last-date-value mb-0">16 May 2024</p>
                      <img src="src/assets/img/right_arrow.svg" alt="left-angke" className="mb-0 ms-3" />
                    </div>
                 </div>
                  <div className="card-body box-scroll">
                    <div className="d-flex flex-column gap-2">
                           <div className="d-flex justify-content-between align-items-center border-bottom pb-2 w-100">
                              <div className="d-flex align-items-center gap-3 flex-grow-1 me-3">
                                <div className="sub-name lightblue d-flex justify-content-center align-items-center text-center">
                                  Physics
                                </div>
                                <div className="">
                                  <p className="mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                  <h6 className="mb-0 color-secondary">
                                    Date: <span>30/09/2025 Tuesday</span>
                                  </h6>
                                  <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                                </div>
                              </div>
                              <img src="src/assets/img/download_icon.svg" alt="download" className="ms-2"/>
                            </div>

        
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 w-100">
                              <div className="d-flex align-items-center gap-3 flex-grow-1 me-3">
                              <div className="sub-name lightgreen d-flex justify-content-center align-items-center text-center">Chemistry</div>
                              <div className="">
                                <p className="mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Date: <span>30/09/2025 Tuesday</span></h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                              </div>
                              <img src="src/assets/img/download_icon.svg" alt="download" className="ms-2"/>
                            </div>
        
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 w-100">
                              <div className="d-flex align-items-center gap-3 flex-grow-1 me-3">
                              <div className="sub-name lightorange d-flex justify-content-center align-items-center text-center">English</div>
                              <div className="">
                                <p className="mb-0  medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Date: <span>30/09/2025 Tuesday</span></h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
                              <img src="src/assets/img/download_icon.svg" alt="download" className="ms-2"/>
                            </div>
        
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 w-100">
                              <div className="d-flex align-items-center gap-3 flex-grow-1 me-3">
                              <div className="sub-name lightblue d-flex justify-content-center align-items-center text-center">Math</div>
                              <div className="">
                                <p className="mb-0 mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Date: <span>30/09/2025 Tuesday</span></h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
                              <img src="src/assets/img/download_icon.svg" alt="download" className="ms-2"/>
                            </div>
        
                            <div className="d-flex justify-content-between align-items-center w-100">
                              <div className="d-flex align-items-center gap-3 flex-grow-1 me-3">
                              <div className="sub-name lightyellow d-flex justify-content-center align-items-center text-center">Hindi</div>
                              <div className="">
                                <p className="mb-0 mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Date: <span>30/09/2025 Tuesday</span> </h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
                              <img src="src/assets/img/download_icon.svg" alt="download" className="ms-2"/>
                            </div>
                          </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                 <div className="card-header d-flex justify-content-between align-items-center ">
                     Notice Board
                    <div className="d-flex align-items-center mt-1">
                      <img src="src/assets/img/right_arrow.svg" alt="left-angke" className="mb-1 me-2" />
                    </div>
                 </div>
                  <div className="card-body box-scroll">
                    <div className="px-1 d-flex mt-2 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightblue d-flex justify-content-center align-items-center text-center">
                        11<br />Mar
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Class Group Photo</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="mb-0 small-text color-secondary opacity-75">Added on : 11 Mar 2024</p>
                        </div>
                      </div>
                    </div>
                    <img src="src/assets/img/angle-right.svg" alt="angle-right" />
                  </div>

                  <div className="px-1 d-flex mt-3 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightgreen d-flex justify-content-center align-items-center text-center">
                        16 <br />Apr
                      </div>
                      <div className="">
                        <h6 className=" mb-0 color-secondary">World Environment Day</h6>
                        <div className="d-flex align-items-center gap-1">
                           <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className=" mb-0 small-text color-secondary opacity-75">Added on : 16 Apr 2024</p>
                        </div>
                      </div>
                    </div>
                    <img src="src/assets/img/angle-right.svg" alt="angle-right" />
                  </div>

                  <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightorange d-flex justify-content-center align-items-center text-center">
                        21 <br />May
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Exam Preparation Notification</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 21 May 2024</p>
                        </div>
                      </div>
                    </div>
                    <img src="src/assets/img/angle-right.svg" alt="angle-right" />
                  </div>

                  <div className="notice d-flex px-1 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightyellow d-flex justify-content-center align-items-center text-center">
                        23 <br />May
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Online Classes Preparation</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 23 May 2024</p>
                        </div>
                      </div>
                    </div>
                    <img src="src/assets/img/angle-right.svg" alt="angle-right" />
                  </div>

                  <div className="notice d-flex px-1 justify-content-between align-items-center mb-4">
                    <div className="d-flex gap-3">
                      <div className="date-box blue d-flex justify-content-center align-items-center text-center">
                        03 <br />Jun
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Exam Time Table Release</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 03 Jun 2024</p>
                        </div>
                      </div>
                    </div>
                    <img src="src/assets/img/angle-right.svg" alt="angle-right" />
                  </div>
                  <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightorange d-flex justify-content-center align-items-center text-center">
                        21 <br />May
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Exam Preparation Notification</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 21 May 2024</p>
                        </div>
                      </div>
                    </div>
                    <img src="src/assets/img/angle-right.svg" alt="angle-right" />
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

          <div className="col-lg-8 col-12 mt-3">
              <div className="card">
                 <div className="card-header">
                     Schedules
                 </div>
                  <div className="card-body">
                     <div className="row">
                      <div className="col-md-6">
                        <div>
                      <Calendar onChange={setValue} value={value} view="month" next2Label={null}  prev2Label={null} />
                     </div>  
                      </div>
                      <div className="col-md-6">
                          <div className="col-lg-6 p-0 px-3">
              <div className="exam-section">
                <div className=" section-title">Exams</div>
                <div className="exam-list">
                  <div className="exam-card mb-2">
                    <div className="exam-details">
                      <div className="exam-header d-flex justify-content-between align-items-center ">
                        <p className="exam-name mb-0">Mathematics</p>
                        <div className="exam-status">
                         
                          <p className="status-text mb-0">19 Days More</p>
                        </div>
                      </div>
                      <div className="exam-meta d-flex justify-content-between align-items-center">
                        <div className="exam-time">
                         
                          <p className="time-text mb-0">01:30 - 02:15 PM</p>
                        </div>
                        <div className="exam-date">
                          
                          <p className="date-text mb-0">06 Mar 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="exam-card mb-2">
                    <div className="exam-details">
                      <div className="exam-header d-flex justify-content-between align-items-center">
                        <p className="exam-name mb-0">English</p>
                        <div className="exam-status">
                         
                          <p className="status-text mb-0">21 Days More</p>
                        </div>
                      </div>
                      <div className="exam-meta d-flex justify-content-between align-items-center">
                        <div className="exam-time">
                         
                          <p className="time-text mb-0">01:30 - 02:15 PM</p>
                        </div>
                        <div className="exam-date">
                          
                          <p className="date-text mb-0">06 Mar 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="exam-card mb-2">
                    <div className="exam-details">
                      <div className="exam-header d-flex justify-content-between align-items-center">
                        <p className="exam-name mb-0">Physics</p>
                        <div className="exam-status">
                         
                          <p className="status-text mb-0">24 Days More</p>
                        </div>
                      </div>
                      <div className="exam-meta d-flex justify-content-between align-items-center">
                        <div className="exam-time">
                         
                          <p className="time-text mb-0">01:30 - 02:15 PM</p>
                        </div>
                        <div className="exam-date">
                          
                          <p className="date-text mb-0">06 Mar 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                      </div>
                      </div>                 
                  </div>
                </div>
              </div>
        
      
            <div className="col-lg-4 col-12 mt-3">
              <div className="card">
                
              </div>
            </div>

        <div className="col-lg-4 col-12 mt-3">
              <div className="card">
                 <div className="card-header d-flex justify-content-between align-items-center ">
                     Fee Reminder
                    <div className="d-flex align-items-center mt-1">
                      <img src="src/assets/img/right_arrow.svg" alt="left-angke" className="mb-1 me-2" />
                    </div>
                 </div>
                  <div className="card-body box-scroll">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true" >
                          Regular Fee
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false" >
                          Miscellaneous Fee
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                      <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab" >
                        <div className="px-1 d-flex mt-2 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightblue d-flex justify-content-center align-items-center text-center">
                                11<br />Mar
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">April To June</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="mb-0 color-secondary opacity-75">1200</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="px-1 d-flex mt-3 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightgreen d-flex justify-content-center align-items-center text-center">
                                16 <br />Apr
                              </div>
                              <div className="">
                                <h6 className=" mb-0 color-secondary">July To August</h6>
                                <div className="d-flex align-items-center gap-1">
                                   <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className=" mb-0 color-secondary opacity-75">800</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightorange d-flex justify-content-center align-items-center text-center">
                                21 <br />May
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">September</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="color-secondary opacity-75 mb-0">200</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="notice d-flex px-1 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightyellow d-flex justify-content-center align-items-center text-center">
                                23 <br />May
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">October</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="color-secondary opacity-75 mb-0">3400</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="notice d-flex px-1 justify-content-between align-items-center mb-4">
                            <div className="d-flex gap-3">
                              <div className="date-box blue d-flex justify-content-center align-items-center text-center">
                                03 <br />Jun
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">November To January</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="color-secondary opacity-75 mb-0">10000</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
                          <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightred d-flex justify-content-center align-items-center text-center">
                                21 <br />May
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">February To March</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="color-secondary opacity-75 mb-0">9000</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
                      </div>
                      <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab" >
                         <div className="px-1 d-flex mt-2 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightblue d-flex justify-content-center align-items-center text-center">
                                <img src="src/assets/img/bus_icon.svg" alt="" />
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">Transport Fees</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="mb-0 color-secondary opacity-75">1200</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="px-1 d-flex mt-3 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightgreen d-flex justify-content-center align-items-center text-center">
                                <img src="src/assets/img/book.svg" alt="" />
                              </div>
                              <div className="">
                                <h6 className=" mb-0 color-secondary">Book Fees</h6>
                                <div className="d-flex align-items-center gap-1">
                                   <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className=" mb-0 color-secondary opacity-75">800</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightorange d-flex justify-content-center align-items-center text-center">
                                <img src="src/assets/img/exam_fee.svg" alt="" />
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">Exam Fees</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="color-secondary opacity-75 mb-0">200</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="notice d-flex px-1 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightyellow d-flex justify-content-center align-items-center text-center">
                               <img src="src/assets/img/hostel.svg" alt="" />
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">Hostel</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="color-secondary opacity-75 mb-0">3400</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
        
                          <div className="notice d-flex px-1 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box blue d-flex justify-content-center align-items-center text-center">
                               <img src="src\assets\img\mess.svg" alt="" />
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">Mess Fee</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.33268 2H11.9993L11.3327 3.33333H9.15935C9.47935 3.72 9.71935 4.17333 9.85935 4.66667H11.9993L11.3327 6H9.99935C9.9165 6.83108 9.5554 7.60983 8.97458 8.21001C8.39376 8.81019 7.62727 9.19662 6.79935 9.30667V9.33333H6.33268L10.3327 14H8.66602L4.66602 9.33333V8H6.33268C7.50602 8 8.47935 7.13333 8.63935 6H4.66602L5.33268 4.66667H8.43935C8.06602 3.88 7.26602 3.33333 6.33268 3.33333H4.66602L5.33268 2Z" fill="#F24164"/>
                                  </svg>
                                  <p className="color-red  mb-0">100 + 20</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
                          <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                            <div className="d-flex gap-3">
                              <div className="date-box lightred d-flex justify-content-center align-items-center text-center">
                               <img src="src/assets/img/library.svg" alt="" />
                              </div>
                              <div className="">
                                <h6 className="mb-0 color-secondary">Library Fee</h6>
                                <div className="d-flex align-items-center gap-1">
                                  <img src="src/assets/img/rupee_icon.svg" alt="rupee" />
                                  <p className="color-secondary opacity-75 mb-0">9000</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h6 className='mb-0 color-secondary'>Last Date</h6>
                              <p className='mb-0 color-secondary opacity-75'>25 May 2024</p>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
      
            <div className="col-lg-4 col-12 mt-3">
              <div className="card">
                 <div className="card-header d-flex justify-content-between align-items-center  px-3">
                     Attendance
                   <div className="d-flex align-items-center mt-1">
                      <img src="src/assets/img/right_arrow.svg" alt="left-angke" className="mb-1 me-2" />
                    </div>
                 </div>
                  <div className="card-body box-scroll">
                    <div className="d-flex flex-column gap-2">
                            <div className="d-flex align-items-center gap-3 ">
                              <div className="sub-name lightblue d-flex justify-content-center align-items-center text-center ">Physics</div>
                              <div className="">
                                <p className="mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Write theory of pendulum</h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
        
                            <div className="d-flex align-items-center gap-3 ">
                              <div className="sub-name lightgreen d-flex justify-content-center align-items-center text-center">Chemistry</div>
                              <div className="">
                                <p className="mb-0 mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Change of Elements</h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
        
                            <div className="d-flex align-items-center gap-3 ">
                              <div className="sub-name lightorange d-flex justify-content-center align-items-center text-center">English</div>
                              <div className="">
                                <p className="mb-0 mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Vocabulary Introduction</h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
        
                            <div className="d-flex align-items-center gap-3 ">
                              <div className="sub-name lightblue d-flex justify-content-center align-items-center text-center">Math</div>
                              <div className="">
                                <p className="mb-0 mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Problems to Solve Page</h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
        
                            <div className="d-flex align-items-center gap-3">
                              <div className="sub-name lightyellow d-flex justify-content-center align-items-center text-center">Hindi</div>
                              <div className="">
                                <p className="mb-0 mb-0 medium-text color-secondary opacity-75">By : Sarvepalli Radhakrishnan</p>
                                <h6 className="mb-0 color-secondary">Problems to Solve Page </h6>
                                <p className="mb-0 small-text color-secondary opacity-75">Due by : 16 Jun 2024</p>
                              </div>
                            </div>
                          </div>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 mt-3">
              <div className="card">
                 <div className="card-header d-flex justify-content-between align-items-center ">
                     Assignments
                    <div className="d-flex align-items-center mt-1">
                      <img src="src/assets/img/right_arrow.svg" alt="left-angke" className="mb-1 me-2" />
                    </div>
                 </div>
                  <div className="card-body">
                    <div className="px-1 d-flex mt-2 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightblue d-flex justify-content-center align-items-center text-center">
                       <img src="src/assets/img/zip.svg" alt="" />
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Math Sums Solution</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="mb-0 small-text color-secondary opacity-75">Added on : 11 Mar 2024</p>
                        </div>
                      </div>
                    </div>
                    <img src="src/assets/img/download_icon.svg" alt="angle-right" />
                  </div>

                  <div className="px-1 d-flex mt-3 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightgreen d-flex justify-content-center align-items-center text-center">
                       <img src="src/assets/img/doc.svg" alt="angle-right" />
                      </div>
                      <div className="">
                        <h6 className=" mb-0 color-secondary">Research technology impact</h6>
                        <div className="d-flex align-items-center gap-1">
                           <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className=" mb-0 small-text color-secondary opacity-75">Added on : 16 Apr 2024</p>
                        </div>
                      </div>
                    </div>
                   <img src="src/assets/img/download_icon.svg" alt="angle-right" />
                  </div>

                  <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightorange d-flex justify-content-center align-items-center text-center">
                       <img src="src/assets/img/pdf.svg" alt="angle-right" />
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Create energy presentation</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 21 May 2024</p>
                        </div>
                      </div>
                    </div>
                   <img src="src/assets/img/download_icon.svg" alt="angle-right" />
                  </div>

                  <div className="notice d-flex px-1 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightyellow d-flex justify-content-center align-items-center text-center">
                       <img src="src/assets/img/file-pdf.svg" alt="angle-right" />
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Draw solar system</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 23 May 2024</p>
                        </div>
                      </div>
                    </div>
                   <img src="src/assets/img/download_icon.svg" alt="angle-right" />
                  </div>

                  <div className="notice d-flex px-1 justify-content-between align-items-center mb-4">
                    <div className="d-flex gap-3">
                      <div className="date-box blue d-flex justify-content-center align-items-center text-center">
                        <img src="src/assets/img/word.svg" alt="angle-right" />
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Solve math puzzles</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 03 Jun 2024</p>
                        </div>
                      </div>
                    </div>
                   <img src="src/assets/img/download_icon.svg" alt="angle-right" />
                  </div>
                  <div className="d-flex px-1 justify-content-between align-items-center mb-3">
                    <div className="d-flex gap-3">
                      <div className="date-box lightorange d-flex justify-content-center align-items-center text-center">
                        <img src="src/assets/img/file-type-doc.svg" alt="angle-right" />
                      </div>
                      <div className="">
                        <h6 className="mb-0 color-secondary">Prepare history timeline</h6>
                        <div className="d-flex align-items-center gap-1">
                          <img src="src/assets/img/calendar_icon.svg" alt="calendar" />
                          <p className="small-text color-secondary opacity-75 mb-0">Added on : 21 May 2024</p>
                        </div>
                      </div>
                    </div>
                   <img src="src/assets/img/download_icon.svg" alt="angle-right" />
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      
     
      
  );
};


export default Dashboard;
