export const Search = (props) => {

    const { searchInput, setSearchInput } = props

    const handleOnChange = (e) => {
        console.log(e.target.value);
        setSearchInput(e.target.value);
    }

  return (
    <section>
        <label htmlFor="searchBar">Search:</label>
        <input id="searchBar" name="searchBar" type="text" onChange={handleOnChange}/>
        <p>{searchInput}</p>
    </section>
  )
}
export default Search