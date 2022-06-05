export function playSound() {
  const sound = new Howl({
    src: ["./src/sounds/zvonok.mp3"],
  });
  return sound.play();
}
