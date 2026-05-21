import React from "react";

export function InfiniteSlider({
  children,
  direction = "horizontal",
  reverse = false,
  speedOnHover = 18,
  gap = 24,
  playOnHover = true,
}) {
  const items = React.Children.toArray(children);
  const className = [
    "infinite-slider",
    `infinite-slider--${direction}`,
    reverse ? "infinite-slider--reverse" : "",
    playOnHover ? "infinite-slider--hover" : "infinite-slider--play",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      style={{
        "--slider-gap": `${gap}px`,
        "--slider-duration": `${speedOnHover}s`,
        "--slider-play-state": "running",
      }}
    >
      <div className="infinite-slider__track">
        {[0, 1, 2].map((setIndex) => (
          <div className="infinite-slider__set" aria-hidden={setIndex > 0} key={setIndex}>
            {items.map((item, itemIndex) => (
              <React.Fragment key={`${setIndex}-${itemIndex}`}>{item}</React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
