import React from 'react'

interface Props {

}

const SearchBar = (props: Props) => {
    return (
        <>
            <form>
                <input type="text" placeholder='Search' />
            </form>
            <div>
                <ul>
                    <button /> Only show pets that like kids
                </ul>
            </div>
        </>
    )
}

export default SearchBar
