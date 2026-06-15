import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <div className="course-card">

      <img src={props.image} alt={props.title} />

      <h3>{props.title}</h3>

      <p style={{ color: 'black' }}>{props.instructor}</p>

      <h4>{props.price}</h4>

      <Link to={`/course/${props.id}`}>
        <button>View Details</button>
      </Link>

    </div>
  );
}

export default CourseCard;