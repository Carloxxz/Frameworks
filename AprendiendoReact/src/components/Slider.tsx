export default function Slider({ title, btn, size }: { title: string, btn?: string, size?: string }) {
  return (
    <div id="slider" className={size}>
      <h1>
        {title}
      </h1>
      {
        btn &&
        <a href="#" className="btn-white">
          {btn}
        </a>
      }
    </div>
  );
}
