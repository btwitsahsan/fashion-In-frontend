import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/features/product/productSlice";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {

  const dispatch = useDispatch();
const navigate = useNavigate();
  const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
  const url = "https://api.cloudinary.com/v1_1/dz0fe93tq/image/upload";

  const { isLoading } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    quantity: "",
    description: "",
    image: "",
    price: "",
    color: "",
  });

  const category = ["cloth", "shoes", "jewellery"];

  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload to Cloudinary
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset); // Replace with your Cloudinary preset
    formData.append("upload_preset", upload_preset); // Replace with your Cloudinary preset
    let imageURL;
    try {
      setUploading(true);
      const response = await fetch(url, { method: "post", body: formData });
      const imgData = await response.json();
      imageURL = imgData.url.toString();
      setFormData((prev) => ({ ...prev, image: imageURL }));
      setImagePreview(imageURL);
      setUploading(false);
    } catch (error) {
      console.error("Image upload failed", error);
      setUploading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(formData));
    navigate(-1);
  };

  return (
    <>
      <div className="add-product-container">
        <h2 className="pageHeading">Add New Product</h2>

        {/* {error && <p className="error-message">{error}</p>} */}

        <form onSubmit={handleSubmit} className="product-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            id=""
          >
            <option value="">Select Category</option>
            {category?.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          {/* Image Upload */}
          <input type="file" onChange={uploadImage} />
          {uploading && <p>Uploading...</p>}
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="image-preview" />
          )}

          <button className="anmoBTN2" type="submit" disabled={isLoading}>
          {isLoading ? "Adding" : "Create Product"}
        </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
