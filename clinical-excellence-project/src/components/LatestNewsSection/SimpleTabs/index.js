import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "./style.css";

// const SimpleTabs = () => {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const handleSelect = (eventKey) => {
//     setActiveTab(eventKey);
//   };

//   return (
//     <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
//       <Nav variant="tabs" className="custom-tabs">
//         <Nav.Item>
//           <Nav.Link eventKey="tab1" className="custom-tab-link">
//             Google
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="tab2" className="custom-tab-link">
//             Trending
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="tab3" className="custom-tab-link">
//             New
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//       <Tab.Content className="custom-tab-content">
//         <Tab.Pane eventKey="tab1">
//           <p>Content for Tab 1 goes here.</p>
//         </Tab.Pane>
//         <Tab.Pane eventKey="tab2">
//           <p>Content for Tab 2 goes here.</p>
//         </Tab.Pane>
//         <Tab.Pane eventKey="tab3">
//           <p>Content for Tab 3 goes here.</p>
//         </Tab.Pane>
//       </Tab.Content>
//     </Tab.Container>
//   );
// };

// export default SimpleTabs;

// import React, { useState } from "react";

function SimpleTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="simple-tabs">
      <div className="tab-list tabsContainer">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${
              tab.label === activeTab ? "simple-tab-active" : ""
            }`}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) =>
          tab.label === activeTab ? (
            <div key={tab.label}>
              <h5 className="blogCardTitle">{tab.content.title}</h5>
              <p className="blogCardDescription">{tab.content.description}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default SimpleTabs;
