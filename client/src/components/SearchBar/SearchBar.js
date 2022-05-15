import React, {useState} from 'react';
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({placeholder, data}) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        if (searchWord.length != 0) {
            const newFilter  = data.filter((value) => {return value.NAME.toLowerCase().includes(searchWord.toLowerCase())});
            setFilteredData(newFilter);
        } else {
            setFilteredData([]);
        }

    }

    return (
        <div className="search">
            <div className='text'>
                <p>Encuentra lo que buscas</p>
            </div>
            <div className='searchInputs'> 
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className='searchIcon'>
                    <SearchIcon />
                </div>
            </div>
            {filteredData.length != 0 && (
            <div className='dataResult'>
                {filteredData.map((value, key) => {
                    return <div>
                        <a className='dataItem' href={"/subject/" + value.ID} style={{textDecorationLine: 'none'}}>{value.NAME} - {value.UNIVERSITY} - {value.FACULTY}</a>
                    </div>
                })}
            </div>
            )}
        </div>
    )
}

export default SearchBar;