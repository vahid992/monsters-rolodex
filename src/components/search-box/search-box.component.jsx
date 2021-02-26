import './search-box.styles.css';


export const SearchBox=({placeholder,handleChange,type})=>(
    <input 
        className='search'
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
    />
);