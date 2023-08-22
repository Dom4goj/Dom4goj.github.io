function copyText() {
  navigator.clipboard.writeText
    ("+385919599169");
  alert("Copied phone number: +385919599169");
}

var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");

// Function to open the modal with the selected image
function openModal(imageSrc) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
  modalImage.style.removeProperty('background-color'); // Remove any background color
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Attach click event to the thumbnail images to open the modal with different images
var thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function() {
    openModal(thumbnail.src);
  });
});