import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status == 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>ohh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to='/dashboard'>back home</Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>
          <h3>something went wrong</h3>
        </div>
      </Wrapper>
    );
  }
}
export default Error;
