myAudio = new Audio('someSound.ogg');
if (typeof myAudio.loop == 'boolean') {
  myAudio.loop = true;
} else {
  myAudio.addEventListener(
    'ended',
    function () {
      this.currentTime = 0;
      this.play();
    },
    false,
  );
}
myAudio.play();
