import React from "react";
import SystemRoleName from "./../components/systemroles/SystemRoleName";
import SystemRoleCard from "./../components/systemroles/SystemRoleCard";

const CreateSystemRole = () => {
  return (
    <div>
      <SystemRoleName />
      <div>
        <SystemRoleCard title={"User Management"} />
        <SystemRoleCard title={"Data Management"} />
      </div>
      <div>
        <SystemRoleCard title={"Role Management"} />
        <SystemRoleCard title={"Rule Management"} />
      </div>
    </div>
  );
};

export default CreateSystemRole;
