import React, { useContext } from "react";
import { Table } from "reactstrap";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap";

const SystemTable = () => {
  return (
    <div>
      <Table hover>
        <thead>
          <tr className="table-header">
            <th scope="col">Role Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <UncontrolledButtonDropdown className="dropdown m-2">
              <DropdownToggle caret>Administrator</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Disable</DropdownItem>
                <DropdownItem>Update</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </tr>
          <tr>
            <UncontrolledButtonDropdown className="dropdown m-2">
              <DropdownToggle caret>View Only</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Disable</DropdownItem>
                <DropdownItem>Update</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default SystemTable;
