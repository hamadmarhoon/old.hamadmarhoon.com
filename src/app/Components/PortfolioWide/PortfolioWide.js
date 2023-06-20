import "./PortfolioWide.css";
import Image from "next/image";

export default function PortfolioItemHorizontal({
  link,
  title,
  image,
  description,
  stack,
}) {
  return (
    <div className="portfolio-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="portfolio-image-container"
          style={{ width: "100%", height: "40vh", overflow: "hidden" }}>
          <Image src={image} alt={title} responsive />
        </div>
        <div className="portfolio-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Stack: {stack}</p>
        </div>
      </a>
    </div>
  );
}
