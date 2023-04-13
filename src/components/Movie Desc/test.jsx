<div id="moviedesc">
  <iframe
    width="870"
    height="360"
    src={mov.trailer}
    title="Movie Trailer"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
  <div className="title">
    <h2>{mov.title}</h2>
    <p> {`(${mov.year})`} </p>
  </div>
  <div className="description">
    <img src={mov.image} alt={mov.title} />
    <div className="info">
      <p>{mov.overview}</p>
      <h2 className="rating">Movie Rating</h2>
      <StarRating rating={mov.rating} />
    </div>
  </div>
</div>;
