import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Topics({ handleOrder, handleSortBy }) {
  const [selectedTopic, setSelectedTopic] = useState("1");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const topic = searchParams.get("topic");
    if (topic === "coding") setSelectedTopic("2");
    if (topic === "cooking") setSelectedTopic("3");
    if (topic === "football") setSelectedTopic("4");
  });

  return (
    <Nav
      variant="pills"
      activeKey={selectedTopic}
      style={{
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
        
      }}
    >
      <Nav.Item>
        <Nav.Link eventKey="1" href="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" href="/articles?topic=coding">
          Coding
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="/articles?topic=cooking">
          Cooking
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" href="/articles?topic=football">
          Football
        </Nav.Link>
      </Nav.Item>
      <NavDropdown onSelect={handleSortBy} title="Sort By" id="nav-dropdown">
        <NavDropdown.Item eventKey="created_at">Date</NavDropdown.Item>
        <NavDropdown.Item eventKey="votes">Votes</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown onSelect={handleOrder} title="Order" id="nav-dropdown">
        <NavDropdown.Item eventKey="ASC">Ascending</NavDropdown.Item>
        <NavDropdown.Item eventKey="DESC">Descending</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default Topics;
