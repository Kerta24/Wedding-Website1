function submitComment() {
    // Mendapatkan nilai komentar dari input
    var commentInput = document.getElementById("comment-input");
    var commentValue = commentInput.value;
  
    // Menambahkan komentar ke dalam elemen dengan id "comment-section"
    var commentSection = document.getElementById("comment-section");
    var newComment = document.createElement("p");
    newComment.textContent = commentValue;
    commentSection.appendChild(newComment);
  
    // Menghapus teks dari input komentar setelah dikirim
    commentInput.value = "";
  }
  
  // var audio = document.getElementById("myAudio"); // Mendapatkan elemen audio

  //       function playAudio() {
  //           audio.play(); // Memutar musik
  //       }

  //       function pauseAudio() {
  //           audio.pause(); // Menghentikan musik
  //       }

  var playPauseIcon = document.querySelector('.play-pause-icon');
  var audio = document.getElementById('myAudio');
  var isPlaying = false;
  
  playPauseIcon.addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
    } else {
      audio.play();
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
  });

  document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form secara default
  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
  
    if (!name || !message || !attendance) {
      alert('Nama, pesan, dan kehadiran harus diisi.');
      return;
    }
  
    const data = {
      name,
      message,
      attendance
    };
  
    // Kirim permintaan POST ke server untuk menyimpan RSVP
    fetch('/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      document.getElementById('rsvpForm').reset();
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
    });
  });
  