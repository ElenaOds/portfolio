import { Item, Wrapper, Title, Link, Description} from './styles/Card.styled';


const Card = ({id, image, title, description, type, technologies, github, livePage}) => {
  return (
    <>
      <Item key={id}>
          <img src={image} alt={title} />
          <Wrapper>
          <Title>Title: <Description>{title}</Description></Title>
          <Title>Description: <Description>{description}</Description></Title>
          <Title>Project type: <Description>{type}</Description></Title>
          <Title>Stack: <Description>{technologies.join(', ')}</Description></Title>
          {github ? <Link href={github} rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Github" onClick={(e) => e.target.blur()}>Link to Github</Link> : <Title>Link to Github: <Description>not available</Description></Title>}
          <Title><Link href={livePage} rel="noopener noreferrer nofollow" target='_blank' aria-label="link to Live page" onClick={(e) => e.target.blur()}>Link to live page</Link></Title>
          </Wrapper>
        </Item>  
    </>
  )
}

export default Card;
