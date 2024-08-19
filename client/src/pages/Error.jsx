import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h2>Error Page !!!</h2>
      <Link to='/dashboard'>Back home</Link>
    </div>
  );
};

export default Error;