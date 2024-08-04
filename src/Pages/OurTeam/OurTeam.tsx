import { useLocation } from 'react-router-dom';
import './OurTeam.css'

function OurTeam() {
  const location = useLocation();
  const teamMember = location.state;
  return (
    <div className='OurTeam'>
      <h1>Team Member Details</h1>
      <img src={teamMember.image} alt={teamMember.teamName} />
      <h2>{teamMember.teamName}</h2>
      <p>{teamMember.info}</p>

    </div>
  )
}

export default OurTeam