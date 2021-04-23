import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const ErrorNomatch = ({ error, nomatch }) => {

      return (
            { error && <h3>Error: {error}</h3>}{ nomatch && <h3> No match for your search</h3>}
      )
}

export default ErrorNomatch