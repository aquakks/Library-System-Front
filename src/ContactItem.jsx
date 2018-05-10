import * as React from "react";

export const ContactItem = ({nick, email}) => {
  return (
    <li className="item">
      <div className="content">
        <h4 className="header">{nick}</h4>
        <div className="description">{email}</div>
      </div>
    </li>
  );
};
