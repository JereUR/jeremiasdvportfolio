import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import { colorSkills } from '../assets/colors/Colors'

const ProgressBar = ({ value, text }) => {
  return (
    <div className="item">
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            rotation: 0.25,
            pathColor: colorSkills,
            textColor: colorSkills,
            trailColor: '#3b3b3b',
            backgroundColor: '#3e98c7'
          })}
        />
      </div>
      <h5>{text}</h5>
    </div>
  )
}

export default ProgressBar
