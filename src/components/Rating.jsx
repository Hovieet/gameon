import { img } from "../assets/assets";

export default function Rating({ value, max = 5 }) {
  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, index) => {
        const ballValue = index + 1;

        let ballSrc = img.nopoint;

        if (value >= ballValue) {
          ballSrc = img.full;
        } else if (value >= ballValue - 0.5) {
          ballSrc = img.half;
        }

        return (
          <img key={index} src={ballSrc} alt="rating" className="w-7 h-7" />
        );
      })}
    </div>
  );
}
