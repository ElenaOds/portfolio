import { Wrapper, FilterTitle} from './styles/Filter.styled';


const Filter = ({onChange, value}) => {


  return (
    <Wrapper>
     <FilterTitle>Filter by Technologies and libraries</FilterTitle>
      <select onChange={onChange} value={value}>
      <option value="All">All</option>
      <option value="HTML">HTML</option>
      <option value="JavaScript">JavaScript</option>
      <option value="React">React</option>
      <option value="CSS">CSS</option>
      <option value="SCSS">SCSS</option>
      </select>
    </Wrapper>
  )
}

export default Filter;
