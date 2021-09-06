import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCard = ({ id, postUrl, name }) => {
  return (
    <Link to={`/sessoes/${id}`}>
      <StyledMovieCard>
        <img src={postUrl} alt={name} />
      </StyledMovieCard>
    </Link>
  )
}

const StyledMovieCard = styled.div`
  height: 209px;
  width: 145px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 193px;
    width: 129px;
  }
`

export { MovieCard }