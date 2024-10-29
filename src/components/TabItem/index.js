// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onTabselection, activeTab} = props
  const {tabId, displayText} = tabDetails
  const onTabClick = () => {
    onTabselection(tabId)
  }
  const clsName = activeTab === tabId ? 'active decor' : 'decor'
  return (
    <li className="list-tab">
      <button className={clsName} type="button" onClick={onTabClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
