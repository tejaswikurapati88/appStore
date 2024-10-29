// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="list-app app-item-container">
      <img src={imageUrl} alt={appName} className="image-app" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
