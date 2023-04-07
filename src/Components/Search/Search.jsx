export const Search = (props) => {

    const { changeInput, setChangeInput } = props

    const handleOnChange = (e) => {
        console.log(e.target.value);
        setChangeInput(e.target.value);
    }

  return (
    <section>
        <label htmlFor="searchBar">Search:</label>
        <input id="searchBar" name="searchBar" type="text" onChange={handleOnChange}/>
        <p>{changeInput}</p>
    </section>
  )
}
export default Search