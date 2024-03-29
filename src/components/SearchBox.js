import React from "react";

const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 ba bg-lightest-blue"
            type="search" 
            placeholder="search robots" 
            onChange={searchchange}
        />
        </div>
    );
}

export default SearchBox;