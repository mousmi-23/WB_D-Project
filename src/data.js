function Data({
  item: { id, title, price, description, category, image, rating },
}) {
  return (
    <div class="d-flex justify-content-center">
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body">
          <div>
            <h5>category : {category}</h5>{" "}
          </div>
          <div>
            <img src={image} alt="..." class="img-thumbnail" />
          </div>
          <h5 className="card-title text-center h2">{title}</h5>

          <h6 class="text-dark">Cost : Rs.{price}</h6>
          <div>
            <h6 class="text-info">{description}</h6>
            <h8>Rating : {rating.rate}</h8>
          </div>
          <div>
            <button
              onClick={() => {
                alert("Item Added In Your cart");
              }}
              type="button"
              class="btn btn-primary btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
