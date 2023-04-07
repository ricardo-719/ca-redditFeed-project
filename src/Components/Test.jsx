export const Test = (props) => {
    const { helloMsg, changeInput, setChangeInput } = props

    const handleOnChange = (e) => {
        console.log(e.target.value);
        setChangeInput(e.target.value);
    }

  return (
    <div>
        <input type="text" onChange={handleOnChange}/>
        <p>Say what:</p>
        <p>{ helloMsg }</p>
        <p>{ changeInput }</p>
    </div>
  )
}

