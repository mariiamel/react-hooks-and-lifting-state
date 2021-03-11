export default function FilterForm(props) {
    const formStyles = {
        border: '.3em solid green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return(
        <div style={formStyles}>
            <form onSubmit={props.handleFruitSubmit}>
                <label htmlFor="fruit-filter">Enter a fruit!</label>

                <input
                    type="text"
                    value={props.fruitInputValue}
                    onChange={props.handleFruitChange}
                    placeholder="enter a fruit!🍌"
                    id="fruit-filter"
                />

                <input
                    type="submit"
                    value="Submit to the fruit"
                />
            </form>
        </div>
    )
}