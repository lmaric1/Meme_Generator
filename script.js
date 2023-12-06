function generateMeme() {
  // Dobijanje vrednosti unetih teksta
  var topText = document.getElementById('topText').value;
  var bottomText = document.getElementById('bottomText').value;

  // Kreiranje URL-a za poziv Memegen API-ja sa random slikom
  var apiUrl = "https://api.memegen.link/images/ugandanknuck/~hspecial_characters~q/underscore__-dash--.png" +
      "?text0=" + encodeURIComponent(topText) + "&text1=" + encodeURIComponent(bottomText);

  // Fetch poziv ka Memegen API-ju
  fetch(apiUrl)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }

          return response.blob();
      })
      .then((response) => {
          // Postavljanje slike
          const myImage = document.getElementById('memeImage');
          myImage.src = URL.createObjectURL(response);
      })
      .catch((error) => {
          console.error('Error fetching meme:', error);
      });
}
