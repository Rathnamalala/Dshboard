import React, { useState } from 'react';
import { Navbar, Dropdown, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { sourceOptions, inputTypeOptions } from '../../data/mockData';

const Header = () => {
  const [selectedSource, setSelectedSource] = useState('All Sources');
  const [selectedInputType, setSelectedInputType] = useState('Input Type');
  
  return (
    <Navbar expand="lg" className="navbar-dark-custom">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            <span className="text-secondary-custom me-2">Source</span>
            <Dropdown>
              <Dropdown.Toggle 
                variant="outline-secondary" 
                size="sm"
                className="bg-transparent border-secondary text-light d-flex align-items-center"
              >
                {selectedSource} <FontAwesomeIcon icon={faChevronDown} className="ms-2" size="xs" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-dark">
                {sourceOptions.map((option, index) => (
                  <Dropdown.Item 
                    key={index}
                    className="dropdown-item-dark"
                    onClick={() => setSelectedSource(option)}
                  >
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
          <div className="d-flex align-items-center">
            <span className="text-secondary-custom me-2">Input Type</span>
            <Dropdown>
              <Dropdown.Toggle 
                variant="outline-secondary" 
                size="sm"
                className="bg-transparent border-secondary text-light d-flex align-items-center"
              >
                {selectedInputType} <FontAwesomeIcon icon={faChevronDown} className="ms-2" size="xs" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-dark">
                {inputTypeOptions.map((option, index) => (
                  <Dropdown.Item 
                    key={index}
                    className="dropdown-item-dark"
                    onClick={() => setSelectedInputType(option)}
                  >
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        
        <Button className="btn-primary-custom d-flex align-items-center">
          <FontAwesomeIcon icon={faPlus} className="me-2" size="xs" /> Schedule Ingest
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;