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
      images: ["./images/5_1.jpg", "./images/5_2.jpg", "./images/5_3.jpg", "./images/5_4.jpg", "./images/5_5.jpg", "./images/5_6.jpg", "./images/5_7.jpg", "./images/5_8.jpg"],
      description: "Newly built 25+ room property with 2, 3, and 4-bed luxury rooms. Includes safe parking, lift, and reception.",
      location: "Vrindavan",
    },
    {
      id: 6,
      title: "Exclusive Opportunity: Premium Hotel for Sale in the Heart of Mussoorie.",
      category: "land",
      // price: "Rent: Rs 4 Lakh/month, Deposit: 2+1",
      images: ["./images/6_1.jpg", "./images/6_2.jpg", "./images/6_3.jpg", "./images/6_4.jpg","./images/6_5.jpg", "./images/6_6.jpg", "./images/6_7.jpg", "./images/6_8.jpg","./images/6_9.jpg", "./images/6_11.jpg", "./images/6_11.jpg", "./images/6_12.jpg"],
      description: `
        Discover an exceptional investment opportunity in the Queen of Hills, Mussoorie—a stunning hotel designed to provide luxury, comfort, and breathtaking views.
        <br/>
        <span style="color:blue;">**Property Features** :</span>
        - 🌟 40 Luxurious Rooms: Each room offers mesmerizing valley views, designed for ultimate guest comfort.
        - 🍽 Elegant Restaurant: A fully equipped dining space perfect for delightful culinary experiences.
        - 🚗 Spacious Parking: Accommodates up to 25 cars, ensuring convenience for guests.
      `,
      location: "Mussoorie",
    },
  ];

  const propertyCards = document.getElementById('property-cards');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeModal = document.getElementById('close-modal');

  // Render properties
  function renderProperties(filteredProperties) {
    propertyCards.innerHTML = ''; // Clear existing cards
    filteredProperties.forEach((property) => {
      const card = document.createElement('div');
      card.classList.add('property-card');

      // Check if the "Show More" button should be added (only for id 6)
      const isLongDescription = property.description.length > 100 && property.id === 6;

      card.innerHTML = `
        <img src="${property.images[0]}" alt="${property.title}">
        <div class="card-info">
          <h4>${property.title}</h4>
          <p class="description" data-id="${property.id}">
            ${
              isLongDescription
                ? property.description.substring(0, 100) + '...' // Truncate for id 6
                : property.description // Show full description for other cards
            }
            ${
              isLongDescription
                ? `<button class="show-more" style="padding:3px; border: none; color: #007bff; border-radius: 5px;"  data-id="${property.id}">Show More</button>` // Add button only for id 6
                : ''
            }
          </p>
          ${property.price ? `<span class="price">${property.price}</span>` : ''}
          <p class="location">${property.location}</p>
          <button class="view-more" data-id="${property.id}">View More</button>
        </div>
      `;
      propertyCards.appendChild(card);
    });

    attachEventListeners();
  }

  // Attach event listeners to buttons
  function attachEventListeners() {
    // Attach listeners to "View More" buttons
    const viewMoreButtons = document.querySelectorAll('.view-more');
    viewMoreButtons.forEach((button) => {
      button.addEventListener('click', handleViewMore);
    });

    // Attach listeners to "Show More" buttons
    const showMoreButtons = document.querySelectorAll('.show-more');
    showMoreButtons.forEach((button) => {
      button.addEventListener('click', handleShowAll);
    });
  }

  // Handle the "View More" button click
  function handleViewMore(event) {
    const propertyId = event.target.getAttribute('data-id');
    showPropertyImages(propertyId);
  }

  // Handle the "Show More" button click (only for id 6)
  function handleShowAll(event) {
    const propertyId = event.target.getAttribute('data-id');
    const property = properties.find((p) => p.id == propertyId);
    if (!property) return;

    const descriptionElement = document.querySelector(
      `.description[data-id="${propertyId}"]`
    );
    descriptionElement.innerHTML = `
      ${property.description}
      <button class="show-less" style="padding:3px; border: none; color: #007bff; border-radius: 5px;" data-id="${propertyId}">Show Less</button>
    `;

    // Attach listener to "Show Less" button
    const showLessButton = descriptionElement.querySelector('.show-less');
    showLessButton.addEventListener('click', handleShowLess);
  }

  // Handle the "Show Less" button click (only for id 6)
  function handleShowLess(event) {
    const propertyId = event.target.getAttribute('data-id');
    const property = properties.find((p) => p.id == propertyId);
    if (!property) return;

    const descriptionElement = document.querySelector(
      `.description[data-id="${propertyId}"]`
    );
    descriptionElement.innerHTML = `
      ${property.description.substring(0, 100)}...
      <button class="show-more" style="padding:3px; border: none; color: #007bff; border-radius: 5px;" data-id="${propertyId}">Show More</button>
    `;

    // Reattach listener to "Show More" button
    const showMoreButton = descriptionElement.querySelector('.show-more');
    showMoreButton.addEventListener('click', handleShowAll);
  }

  // Show property images in the modal
  function showPropertyImages(id) {
    const property = properties.find((p) => p.id == id);
    if (!property) return;

    modalContent.innerHTML = `
      <h2>${property.title}</h2>
      <p>${property.description}</p>
    `;

    property.images.forEach((image) => {
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

    const filteredProperties = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategory === 'all' || property.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    renderProperties(filteredProperties);
  }

  // Close modal when clicking on the close button
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Close modal when clicking outside the modal content
  modal.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target)) {
      modal.classList.remove('active');
    }
  });

  // Initial render
  renderProperties(properties);

  // Event listeners for search and filter
  document.getElementById('search-btn').addEventListener('click', filterProperties);
  document.getElementById('search-input').addEventListener('input', filterProperties);
  document.getElementById('category-filter').addEventListener('change', filterProperties);
});