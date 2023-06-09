import React, { useState } from 'react';
import axios from 'axios';
import './sell.css';

const Sell = () => {
  const [crop, setCrop] = useState({
    name: '',
    description: '',
    image: null,
    unit: '',
    location: '',
    pricePerUnit: '',
    contactNumber: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCrop({
      ...crop,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCrop({
        ...crop,
        image: file
      });
    }
  };

  const handleCancelImage = () => {
    setCrop({
      ...crop,
      image: null
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', crop.name);
    formData.append('description', crop.description);
    formData.append('image', crop.image);
    formData.append('unit', crop.unit);
    formData.append('location', crop.location);
    formData.append('pricePerUnit', crop.pricePerUnit);
    formData.append('contactNumber', crop.contactNumber);

    try {
      await axios.post('http://localhost:5000/farmer/crops', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      window.alert('Crop details submitted successfully!');
      // Reset form values
      setCrop({
        name: '',
        description: '',
        image: null,
        unit: '',
        location: '',
        pricePerUnit: '',
        contactNumber: ''
      });
    } catch (error) {
      console.error(error);
      window.alert('Crop details submission failed!');
    }
  };

  return (
    <div className="ui container ocard">
      <div className="ui centered card " style={{ width: '60%' ,padding:'25px'}}>
        <h2 className="ui dividing header">Add Crop</h2>
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="ui grid">
            <div className="eight wide column">
              <div className="field">
                <label>Crop Name</label>
                <input
                  type="text"
                  name="name"
                  value={crop.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <label>Crop Description</label>
                <textarea
                  name="description"
                  value={crop.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="field">
                <label>Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={crop.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <label>Unit</label>
                <input
                  type="text"
                  name="unit"
                  value={crop.unit}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="eight wide column">
              <div className="field">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={crop.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <label>Price Per Unit</label>
                <input
                  type="text"
                  name="pricePerUnit"
                  value={crop.pricePerUnit}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={crop.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <label>Crop Image</label>
                {crop.image && (
                  <div className="image-preview">
                    <img src={URL.createObjectURL(crop.image)} alt="Crop" className="medium-image" />
                    <br></br>
                    <button className="ui mini button" onClick={handleCancelImage}>
                      Cancel
                    </button>
                  </div>
                )}
                {!crop.image && (
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                )}
              </div>
            </div>
            <button className="ui button" type="submit" style={{marginLeft:'10px'}}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sell;
