import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFilterDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const btnClass = isActive ? 'language-btn active-btn' : 'language-btn'
  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClass}
        type="button"
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
