import style from './style.module.scss';
import {Link} from "react-router-dom";
const PageNotFound = () => {
    return (
        <div className={style.content}>
    <div className={style.box}>
        <h1>404</h1>
        <br />
        <p>Oops!Page Not Found</p>
        <br/>
        <Link to="/">Back to Home Page</Link>
    </div>
    </div>
    )
}

export default PageNotFound
