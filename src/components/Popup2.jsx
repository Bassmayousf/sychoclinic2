import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Popup2 = ({submitted}) => {

    return (
      <div className="alert alert-success d-flex align-items-center justify-content-between alert-dismissible fade show" role="alert">
      <span>{submitted}</span>
      <span><FontAwesomeIcon icon={faClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"  /></span>
    </div>
  );
}

export default Popup2;
