import { Link } from "react-router-dom";

export default function Slider({ title, btn, size }: { title: string, btn?: string, size?: string }) {
  return (
    <div id="slider" className={size}>
      <h1>
        {title}
      </h1>
      {
        btn &&
        <Link to="/blog" className="btn-white">
          {btn}
        </ Link>
      }
    </div>
  );
}
