let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");
let reviewContainer = document.getElementById("reviewsContainer");





function addToReviewContainer() {
    let inputElementValue = titleInputEl.value;
    let reviewTextareaValue = reviewTextareaEl.value;
    if (inputElementValue === "") {
        alert("Enter the movie title");
        return;
    }
    let moviename = document.createElement("p");
    let moviereview = document.createElement("p");

    moviename.textContent = "Movie:" + inputElementValue;
    moviereview.textContent = "Movie Review:" + reviewTextareaValue;

    reviewContainer.appendChild(moviename);
    reviewContainer.appendChild(moviereview);


    titleInputEl.value = "";
    reviewTextareaEl.value = "";

}
