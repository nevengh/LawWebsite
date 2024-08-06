import './SectionHeading.css'



interface SectionHeadingProps {
    subhead: string;      // URL of the subhead
    mainhead: string; // Name of the team mainhead
  
  }
  const SectionHeading: React.FC<SectionHeadingProps> = ({ subhead, mainhead }) => {
  return (
    <div className='SectionHeading'>
        <div className="team_heading">
          <div className="subhead">
            <div className="right_line"></div>
            <h5>{subhead}</h5>
            <div className="left_line"></div>
          </div>
          <div className="main_title">
            <h1>{mainhead}</h1>
          </div>
        </div>
    </div>
  )
}

export default SectionHeading