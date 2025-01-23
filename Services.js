document.addEventListener('DOMContentLoaded', () => {
  const properties = [
    {
      id: 1,
      title: "Hotel for Lease - 13 Rooms Property",
      category: "commercial",
      price: "Rent: Rs 1.9 Lakh/month, Deposit: Rs 5 Lakh",
      images: ["./images/1_1.jpg", "./images/1_2.jpg", "./images/1_3.jpg", "./images/1_4.jpg", "./images/1_5.jpg", "./images/1_6.jpg"],
      description: "13 luxury rooms with TV, Geyser, AC, and WiFi. Includes 11 two-bed rooms, 2 four-bed rooms, 1 staff room, 1 hall, safe parking, and a reception with a sofa set.",
      location: "Rukmani Vihar, Vrindavan",
    },
    {
      id: 2,
      title: "Hotel for Lease - 45 Rooms Property",
      category: "commercial",
      price: "Rent: Rs 15 Lakh/month, Deposit: 2+1",
      images: ["./images/2_1.jpg", "./images/2_2.jpg", "./images/2_3.jpg", "./images/2_4.jpg", "./images/2_5.jpg"],
      description: "Newly built 45-room property with luxury amenities, restaurant, basement hall, and a rooftop garden.",
      location: "Prime Location, Vrindavan",
    },
    {
      id: 3,
      title: "Hotel for Lease - 16 Rooms Property",
      category: "commercial",
      price: "Rent: Rs 5 Lakh/month, Deposit: 3+1",
      images: ["./images/3_1.jpg", "./images/3_2.jpg", "./images/3_3.jpg", "./images/3_4.jpg", "./images/3_5.jpg", "./images/3_6.jpg", "./images/3_7.jpg", "./images/3_8.jpg", "./images/3_9.jpg", "./images/3_10.jpg"],
      description: "Newly built 16-room property with 4, 3, and 2-bed luxury rooms. Includes a banquet hall, reception, restaurant on the ground floor, kitchen, and lift.",
      location: "Prime Location, Vrindavan",
    },
    {
      id: 4,
      title: "Hotel for Lease - 25+ Rooms Property",
      category: "commercial",
      price: "Rent: Rs 4 Lakh/month, Deposit: 2+1",
      images: ["./images/4_1.jpg", "./images/4_2.jpg", "./images/4_3.jpg", "./images/4_4.jpg", "./images/4_5.jpg", "./images/4_6.jpg", "./images/4_7.jpg", "./images/4_8.jpg", "./images/4_9.jpg", "./images/4_10.jpg"],
      description: "Newly built 25+ room property with 2, 3, and 4-bed luxury rooms. Includes safe parking, lift, and reception.",
      location: "Vrindavan",
    },
    {
      id: 5,
      title: "Hotel for Lease - 25+ Rooms Property",
      category: "land",
      price: "Rent: Rs 4 Lakh/month, Deposit: 2+1",
      images: ["./images/5_1.jpg", "./images/5_2.jpg", "./images/5_3.jpg", "./images/5_4.jpg", "./images/5_5.jpg", "./images/5_6.jpg","./images/5_7.jpg", "./images/5_8.jpg"],
      description: "Newly built 25+ room property with 2, 3, and 4-bed luxury rooms. Includes safe parking, lift, and reception.",
      location: "Vrindavan",
    }
  ];


  const propertyCards = document.getElementById('property-cards');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeModal = document.getElementById('close-modal');

  // Render properties
  function renderProperties(filteredProperties) {
    propertyCards.innerHTML = '';
    filteredProperties.forEach(property => {
      const card = document.createElement('div');
      card.classList.add('property-card');
      card.innerHTML = `
        <img src="${property.images[0]}" alt="${property.title}">
        <div class="card-info">
          <h4>${property.title}</h4>
          <p>${property.description}</p>
          <span class="price">${property.price}</span>
          <p class="location">${property.location}</p>
          <button class="view-more" data-id="${property.id}">View More</button>
        </div>
      `;
      propertyCards.appendChild(card);
    });

    // Attach event listeners to "View More" buttons
    document.querySelectorAll('.view-more').forEach(button => {
      button.addEventListener('click', event => {
        const propertyId = event.target.getAttribute('data-id');
        showPropertyImages(propertyId);
      });
    });
  }

  // Show property images in the modal
  function showPropertyImages(id) {
    const property = properties.find(p => p.id == id);
    if (!property) return;

    modalContent.innerHTML = ''; // Clear existing content
    property.images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = property.title;
      modalContent.appendChild(imgElement);
    });

    modal.classList.add('active'); // Show modal
  }

  // Filter properties by category or search term
  function filterProperties() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;

    const filteredProperties = properties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm) || property.description.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || property.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    renderProperties(filteredProperties);
  }

  // Initial render
  renderProperties(properties);

  // Event listeners for search and filter
  document.getElementById('search-btn').addEventListener('click', filterProperties);
  document.getElementById('search-input').addEventListener('input', filterProperties);
  document.getElementById('category-filter').addEventListener('change', filterProperties);

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });
});
