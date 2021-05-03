import { useState } from "react";
import sampleUser from "../images/sample-user.jpg";

const DashBoard = ({ show, hide, username }) => {
  //local
  const [sidebarclass, setSidebarClass] = useState(
    "side-bar bg-gray-700  text-xs text-gray-400 font-semibold"
  );
  const [navBarclass, setnavBarClass] = useState(
    "nav-bar bg-white shadow-md text-black"
  );
  const [mainBodyclass, setmainBodyClass] = useState("main-body");

  const [toggled, setToggled] = useState(false);

  const toggleClasses = () => {
    if (toggled) {
      setSidebarClass(
        "side-bar bg-gray-700  text-xs text-gray-400 font-semibold"
      );
      setnavBarClass("nav-bar bg-white shadow-md text-black");
      setmainBodyClass("main-body");
    } else {
      setSidebarClass(
        "side-bar bg-gray-700  text-xs text-gray-400 font-semibold side-bar-hidden"
      );
      setnavBarClass("nav-bar bg-white shadow-md text-black nav-bar-large");
      setmainBodyClass("main-body main-body-large");
    }
    setToggled(!toggled);
  };

  //parent

  const toggleStuff = () => {
    show();
    hide();
  };

  return (
    <div>
      <div>
        <div id="side-bar" className={sidebarclass}>
          <p className="page-title text-white">HYPER</p>
          <p className="side-bar-nav-text">NAVIGATION</p>
          <div className="dashboard-nav">
            <div className="nav-dashboard-bar">
              <span className="material-icons">home</span>
              <p>Dashboards</p>
            </div>
            <div className="rest-of-nav">
              <p>Analytics</p>
              <p>CRM</p>
              <p>Ecommerce</p>
              <p id="active-in-nav">Projects</p>
            </div>
          </div>
          <p className="side-bar-apps-text">APPS</p>
          <div className="side-bar-apps">
            <div className="side-bar-app-bar">
              <span className="material-icons">date_range</span>
              <p>Calender</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">question_answer</span>
              <p>Chat</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">paid</span>
              <p>Ecommerce</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons">mail_outline</span>
              <p>Email</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">business_center</span>
              <p>Projects</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons">rss_feed</span>
              <p>Social Feed</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons">add_task</span>
              <p>Tasks</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons">folder_open</span>
              <p>File Manager</p>
            </div>
          </div>
          <p className="side-bar-apps-text">CUSTOM</p>
          <div className="side-bar-apps">
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">description</span>
              <p>Pages</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">language</span>
              <p>Landing</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">dashboard</span>
              <p>Layouts</p>
            </div>
          </div>
          <p className="side-bar-apps-text">COMPONENTS</p>
          <div className="side-bar-apps">
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">view_quilt</span>
              <p>Base UI</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">grid_view</span>
              <p>Extended UI</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">layers</span>
              <p>Widgets</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">insert_emoticon</span>
              <p>Icons</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">list_alt</span>
              <p>Forms</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">analytics</span>
              <p>Charts</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">table_view</span>
              <p>Table</p>
            </div>
            <div className="side-bar-app-bar">
              <span className="material-icons-outlined">location_on</span>
              <p id="last-in-nav">Map</p>
            </div>
          </div>
        </div>
      </div>

      <div id="nav-bar" className={navBarclass}>
        <div id="left">
          <span onClick={toggleClasses} className="material-icons menu-icon">
            menu
          </span>
          <div className="search-bar">
            <div id="Search-icon" className="material-icons icon-navbar">
              search
            </div>
            <input className="search-input outline-none" placeholder="Search" />
            <button className="search-button text-white font-semibold">
              Search
            </button>
          </div>
        </div>
        <div id="right">
          <span className="material-icons noti-icon">notifications_none</span>
          <span className="material-icons settings-icon">settings</span>
          <div className="user-info" onClick={toggleStuff}>
            <img alt="" className="user-icon rounded-full" src={sampleUser} />
            <div
              className="user-name"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p className=" font-semibold" style={{ fontSize: "15px" }}>
                {username}
              </p>
              <p className=" font-semibold" style={{ fontSize: "11px" }}>
                Founder
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="main-body" className={mainBodyclass}>
        <div
          className="first-heading"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h4 className="body-heading font-semibold">Projects</h4>
          <p className="path-text"> {"Hyper > Dashboard > Projects"}</p>
        </div>
        <div className="holder-of-holder">
          <div className="holder-card-widgets shadow-md">
            <div className="card-widgets" id="project-widjet-1">
              <span className="material-icons card-icon ">work_outline</span>
              <p className="card-numbers">31</p>
              <p className="card-name">Total Projects</p>
            </div>
            <div className="card-widgets" id="project-widjet-2">
              <span className="material-icons card-icon ">
                format_list_bulleted
              </span>
              <p className="card-numbers">715</p>
              <p className="card-name">Total Tasks</p>
            </div>
            <div className="card-widgets" id="project-widjet-3">
              <span className="material-icons card-icon ">people</span>
              <p className="card-numbers">36</p>
              <p className="card-name">Members</p>
            </div>
            <div className="card-widgets" id="project-widjet-4">
              <span className="material-icons card-icon ">trending_up</span>
              <p className="card-numbers">93%</p>
              <p className="card-name">Productivity</p>
            </div>
          </div>
        </div>
        <div className="card-holder shadow-md">
          <div className="card-first-block">
            <p className="font-semibold">TASKS</p>
            <span className="material-icons-outlined">more_vert</span>
          </div>
          <div id="completed-tasks">
            <p className="font-semibold" id="completed-tasks-number">
              117
            </p>
            <p id="completed-tasks-rest">Tasks completed out of 158</p>
          </div>
          <div className="tasks-container">
            <div className="task-card">
              <div className="holder-task-details">
                <div className="task-details">
                  <div className="task-heading font-bold">
                    Coffee detail page - Main Page
                  </div>
                  <div className="task-status">Status</div>
                  <div className="task-assigned">Assigned To</div>
                  <div className="task-time">Total time speend</div>
                </div>
                <div className="task-details" id="second-details">
                  <div className="task-heading">Due in 3 days</div>
                  <div className="task-status-details">In-progress</div>
                  <div className="task-assigned">Jerry F. Powell</div>
                  <div className="task-time">3h 20min</div>
                </div>
              </div>

              <div className="task-icons">
                <span className="material-icons tasks-edit-icon s18">edit</span>
                <span className="material-icons tasks-delete-icon s18">
                  delete
                </span>
              </div>
            </div>
            <div className="task-card">
              <div className="holder-task-details">
                <div className="task-details">
                  <div className="task-heading font-bold">
                    Fill all the applications
                  </div>
                  <div className="task-status">Status</div>
                  <div className="task-assigned">Assigned To</div>
                  <div className="task-time">Total time speend</div>
                </div>
                <div className="task-details" id="second-details">
                  <div className="task-heading">Due in -1 days</div>
                  <div className="task-status-details task-completed">
                    Completed
                  </div>
                  <div className="task-assigned">Madhav V R</div>
                  <div className="task-time">1111h 69min</div>
                </div>
              </div>

              <div className="task-icons">
                <span className="material-icons tasks-edit-icon s18">edit</span>
                <span className="material-icons tasks-delete-icon s18">
                  delete
                </span>
              </div>
            </div>
            <div className="task-card">
              <div className="holder-task-details">
                <div className="task-details">
                  <div className="task-heading font-bold">
                    Make a game using Three.JS
                  </div>
                  <div className="task-status">Status</div>
                  <div className="task-assigned">Assigned To</div>
                  <div className="task-time">Total time speend</div>
                </div>
                <div className="task-details" id="second-details">
                  <div className="task-heading">Due in 4 days</div>
                  <div className="task-status-details">In-progress</div>
                  <div className="task-assigned">Madhav V R</div>
                  <div className="task-time">12h 50min</div>
                </div>
              </div>

              <div className="task-icons">
                <span className="material-icons tasks-edit-icon s18">edit</span>
                <span className="material-icons tasks-delete-icon s18">
                  delete
                </span>
              </div>
            </div>
            <div className="task-card">
              <div className="holder-task-details">
                <div className="task-details">
                  <div className="task-heading font-bold">
                    Poster illustration
                  </div>
                  <div className="task-status">Status</div>
                  <div className="task-assigned">Assigned To</div>
                  <div className="task-time">Total time speend</div>
                </div>
                <div className="task-details" id="second-details">
                  <div className="task-heading">Due in 2 days</div>
                  <div className="task-status-details task-outdated">
                    Out-Dated
                  </div>
                  <div className="task-assigned">Jhon P</div>
                  <div className="task-time">1h 25min</div>
                </div>
              </div>

              <div className="task-icons">
                <span className="material-icons tasks-edit-icon s18">edit</span>
                <span className="material-icons tasks-delete-icon s18">
                  delete
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-holder shadow-md calender-holder">
          <div className="card-first-block">
            <p className="font-semibold">CALENDER</p>
            <span className="material-icons-outlined">more_vert</span>
          </div>
          <div className="calender">
            <div className="month font-semibold">
              <div className="prev" style={{ cursor: "pointer" }}>
                &#10094;
              </div>

              <div style={{ cursor: "pointer" }}>
                August
                <span style={{ cursor: "pointer", fontSize: "18px" }}>
                  2021
                </span>
              </div>
              <div className="next" style={{ cursor: "pointer" }}>
                &#10095;
              </div>
            </div>

            <ul className="weekdays font-semibold">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>

            <ul className="days font-medium">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li className="active-day">9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
            </ul>
          </div>
        </div>
        <div
          className="at-the-end"
          style={{
            width: "100%",
            height: "20px",
            position: "absolute",
            top: "1300px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DashBoard;
