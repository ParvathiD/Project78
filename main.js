var PersonName = [
      "Deepak Sreedharan ",
      "Deepa Dinesan",
      "Parvathi Deepak",
      "Prayag Deepak",
      "Family Gallery"
      ];
    var image = [
     "https://cdn4.vectorstock.com/i/1000x1000/79/03/father-mustache-cartoon-icon-vector-9877903.jpg",
      "https://cdn1.vectorstock.com/i/1000x1000/48/80/character-mother-standing-design-vector-13874880.jpg",
      "https://previews.123rf.com/images/irwanjos/irwanjos1602/irwanjos160200013/52404087-happy-cute-girl-cartoon.jpg",
    "https://en.pimg.jp/028/698/048/1/28698048.jpg",
     "https://cdn1.vectorstock.com/i/1000x1000/25/40/happy-family-cartoon-vector-23512540.jpg"
      ];
     var i = 0;
    function NextImage() {
      document.getElementById("Name").innerHTML = PersonName [i];
      document.getElementById("Photo").src = image [i];
      i++;
    }