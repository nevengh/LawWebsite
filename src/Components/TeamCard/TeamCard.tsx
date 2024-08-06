import React from "react";
import "./TeamCard.css";

interface TeamCardProps {
  img: string;      // URL of the image
  teamName: string; // Name of the team member
  info: string;  
  onClick: () => void; 
    // Additional information about the team member
}

const TeamCard: React.FC<TeamCardProps> = ({ img, teamName, info,onClick }) => {
  return (
    <div className="TeamCard" onClick={onClick}>
      <img src={img} alt={teamName} />
      <h2 className="name">{teamName}</h2>
      <h4 className="name_info">{info}</h4>
    </div>
  );
}

export default TeamCard;
