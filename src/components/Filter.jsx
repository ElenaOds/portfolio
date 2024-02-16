import { Wrapper, FilterTitle, StyledSelect } from './styles/Filter.styled';
import {options} from '../data/options';

const Filter = ({ onChange }) => {

  return (
    <Wrapper>
     <FilterTitle>Filter projects by technologies and libraries</FilterTitle>
      <StyledSelect options={options} onChange={onChange}/>
    </Wrapper>
  )
}

export default Filter;
