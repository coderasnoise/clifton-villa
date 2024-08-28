// Sample room data
const rooms = {
    room1: {
        title: "Family Room - Ground Floor - En-suite Family Room (Room Only)",
        image: "images/rooms/family1/1.jpg",
        thumbnails: ["images/rooms/family1/1.jpg", "images/rooms/family1/2.jpg", "images/rooms/family1/3.jpg", "images/rooms/family1/4.jpg", "images/rooms/family1/5.jpg", "images/rooms/family1/6.jpg"],
        adults: 3,
        bedDetails: ["1 x Double Bed", "1 x Single Bed"],
        description: "The family room offers soundproof walls, a tea and coffee maker, as well as a private bathroom featuring a shower and a hairdryer. This family room features a carpeted floor, heating and a flat-screen TV. The unit offers 2 beds.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },
    room2: {
        title: "Family Room - Second Floor - En-suite Family Room (Room Only)",
        image: "images/rooms/family2/1.jpg",
        thumbnails: ["images/rooms/family2/1.jpg", "images/rooms/family2/2.jpg", "images/rooms/family2/3.jpg", "images/rooms/family2/4.jpg", "images/rooms/family2/5.jpg", "images/rooms/family2/6.jpg", "images/rooms/family2/7.jpg", "images/rooms/family2/8.jpg"],
        adults: 3,
        bedDetails: ["1 x Double Bed", "1 x Single Bed"],
        description: "The family room offers soundproof walls, a tea and coffee maker, as well as a private bathroom featuring a shower and a hairdryer. This family room features a carpeted floor, heating and a flat-screen TV. The unit offers 2 beds.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },
    room3: {
        title: "Single Room - First Floor - En-suite Single Room (Room Only)",
        image: "images/rooms/singleroom1/1.jpg",
        thumbnails: ["images/rooms/singleroom1/1.jpg", "images/rooms/singleroom1/2.jpg"],
        adults: 1,
        bedDetails: [ "1 x Single Bed"],
        description: "The single room provides soundproof walls, a tea and coffee maker, as well as a private bathroom featuring a shower and a hairdryer. This single room features a carpeted floor, heating and a flat-screen TV. The unit offers 1 bed.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },
    room4: {
        title: "Twin Room - First Floor - En-suite Twin Room (Room Only)",
        image: "images/rooms/twinroom1/1.jpg",
        thumbnails: ["images/rooms/twinroom1/1.jpg", "images/rooms/twinroom1/2.jpg", "images/rooms/twinroom1/3.jpg", "images/rooms/twinroom1/4.jpg", "images/rooms/twinroom1/5.jpg", "images/rooms/twinroom1/6.jpg"],
        adults: 2,
        bedDetails: [ "2 x Single Bed"],
        description: "The twin room offers soundproof walls, a tea and coffee maker, as well as a private bathroom featuring a shower and a hairdryer. This twin room features a carpeted floor, heating and a flat-screen TV. The unit offers 2 beds.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper","View"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },
    room5: {
        title: "Twin Room - First Floor - En-suite Twin Room (Room Only)",
        image: "images/rooms/twinroom2/1.jpg",
        thumbnails: ["images/rooms/twinroom2/1.jpg", "images/rooms/twinroom2/2.jpg", "images/rooms/twinroom2/3.jpg", "images/rooms/twinroom2/4.jpg", "images/rooms/twinroom2/5.jpg", "images/rooms/twinroom2/6.jpg"],
        adults: 2,
        bedDetails: [ "2 x Single Bed"],
        description: "The twin room offers soundproof walls, a tea and coffee maker, as well as a private bathroom featuring a shower and a hairdryer. The unit offers 2 beds.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },
    room6: {
        title: "Twin Room - First Floor - En-suite Twin Room (Room Only)",
        image: "images/rooms/twinroom3/1.jpg",
        thumbnails: ["images/rooms/twinroom3/1.jpg", "images/rooms/twinroom3/2.jpg", "images/rooms/twinroom3/3.jpg", "images/rooms/twinroom3/4.jpg"],
        adults: 2,
        bedDetails: [ "2 x Single Bed"],
        description: "The twin room offers soundproof walls, a tea and coffee maker, as well as a private bathroom featuring a shower and a hairdryer. The unit offers 2 beds.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },
    room7: {
        title: "Single Room - First Floor - En-suite Single Room (Room Only)",
        image: "images/rooms/singleroom2/1.jpg",
        thumbnails: ["images/rooms/singleroom2/1.jpg", "images/rooms/singleroom2/2.jpg", "images/rooms/singleroom2/3.jpg", "images/rooms/singleroom2/4.jpg"],
        adults: 1,
        bedDetails: [ "1 x Single Bed"],
        description: "The single room offers soundproof walls, a tea and coffee maker, as well as a private bathroom boasting a shower and a hairdryer. This single room has a carpeted floor, heating and a flat-screen TV. The unit has 1 bed.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },
    room8: {
        title: "Single Room - Second Floor - En-suite Single Room (Room Only)",
        image: "images/rooms/singleroom3/1.jpg",
        thumbnails: ["images/rooms/singleroom3/1.jpg", "images/rooms/singleroom3/2.jpg", "images/rooms/singleroom3/3.jpg", "images/rooms/singleroom3/4.jpg"],
        adults: 1,
        bedDetails: [ "1 x Single Bed"],
        description: "The single room provides soundproof walls, a tea and coffee maker, as well as a private bathroom featuring a shower and a hairdryer. The unit offers 1 bed.",
        facilities: ["Shower", "Toilet", "Hairdryer", "Toilet paper"],
        extraFacilities: ["TV", "Linen", "Carpeted", "Flat-screen TV", "Electric kettle", "Heating", "Fan", "Towels", "Soundproofing", "Socket near the bed", "Tea/Coffee maker", "Clothes rack"]
    },

    // Add more rooms as needed
};

function openModal(roomId) {
    const room = rooms[roomId];
    document.getElementById("roomTitle").innerText = room.title;

    const carouselImages = document.getElementById("carouselImages");
    const thumbnailContainer = document.getElementById("thumbnailContainer");

    // Clear existing content
    carouselImages.innerHTML = '';
    thumbnailContainer.innerHTML = '';

    room.thumbnails.forEach((thumbnail, index) => {
        // Carousel images
        const carouselItem = document.createElement("div");
        carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");
        carouselItem.innerHTML = `<img src="${thumbnail}" class="d-block w-100 img-fluid" alt="Room Image" style="object-fit: contain; height: 400px;">`;

        // Add click event listener to make the clicked image active
        carouselItem.onclick = () => {
            const carouselElement = document.querySelector('#roomImageCarousel');
            const carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
            carouselInstance.to(index);
        };

        carouselImages.appendChild(carouselItem);

        // Thumbnails
        const thumb = document.createElement("img");
        thumb.src = thumbnail;
        thumb.className = "img-thumbnail";
        thumb.style = "cursor: pointer; width: 100px; height: 100px; object-fit: cover;";
        thumb.onclick = () => {
            const carouselElement = document.querySelector('#roomImageCarousel');
            const carouselInstance = bootstrap.Carousel.getInstance(carouselElement);
            carouselInstance.to(index);
        };
        thumbnailContainer.appendChild(thumb);
    });

    document.getElementById("roomAdults").innerHTML = '<i class="bi bi-people"></i> ' + room.adults;
    document.getElementById("roomBedDetails").innerText = "Room (En-suite with shower):";

    const roomBeds = document.getElementById("roomBeds");
    roomBeds.innerHTML = '';
    room.bedDetails.forEach((bedDetail) => {
        const li = document.createElement("li");
        li.innerText = bedDetail;
        roomBeds.appendChild(li);
    });

    document.getElementById("roomDescription").innerText = room.description;

    const roomFacilities = document.getElementById("roomFacilities");
    roomFacilities.innerHTML = '';
    room.facilities.forEach((facility) => {
        const li = document.createElement("li");
        li.innerHTML = '<i class="bi bi-check-circle"></i> ' + facility;
        roomFacilities.appendChild(li);
    });

    const extraFacilities = document.getElementById("roomExtraFacilities");
    extraFacilities.innerHTML = '';
    room.extraFacilities.forEach((facility) => {
        const li = document.createElement("li");
        li.innerHTML = '<i class="bi bi-check-circle"></i> ' + facility;
        extraFacilities.appendChild(li);
    });

    const modal = new bootstrap.Modal(document.getElementById('roomModal'));
    modal.show();
}

document.querySelectorAll('.openModalBtn').forEach(function (button) {
    button.onclick = function () {
        const roomId = this.getAttribute("data-room");
        openModal(roomId);
    };
});


function openInNewTab(url) {
    window.open(url, '_blank');
}

