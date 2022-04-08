import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const CubeAnimation = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className=" face face1">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className=" face face2">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className=" face face3">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face face4">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face face5">
          <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
        </div>
        <div className="face face6">
          <FontAwesomeIcon icon={faNode} color="#68a063" />
        </div>
      </div>
    </div>
  );
};

export default CubeAnimation;
