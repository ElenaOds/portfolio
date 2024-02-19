import { Wrapper, FilterTitle, StyledSelect } from './styles/Filter.styled';
import {options} from '../data/options';

const Filter = ({ onChange }) => {

  const colorStyles = {
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isSelected ? 'linear-gradient(-45deg, #9925ea, #338aff, #9925ea)' : isFocused ? '#80b6ff' : 'white',
    }),
    control: (provided, {isFocused}) => ({
      ...provided,
      border: isFocused ? "1px solid #9925ea" : "1px solid #cccccc",
      "&:hover": {
        border: "1px solid  #338aff",
        boxShadow: "0px 0px 6px #9925ea",
      },
    }),
  }

  return (
    <Wrapper>
     <FilterTitle>Filter projects by technologies and libraries</FilterTitle>
      <StyledSelect options={options} onChange={onChange} styles={colorStyles}/>
    </Wrapper>
  )
}

export default Filter;
