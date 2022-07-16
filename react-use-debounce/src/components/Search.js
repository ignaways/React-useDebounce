import '../App.css'
const Search = ({onSearch}) => {
  return (
    <>
      <input
        className='pirates__search'
        type="search"
        placeholder="Search.."
        onChange={e => onSearch(e.target.value)}
      />
    </>
  )
}

export default Search;