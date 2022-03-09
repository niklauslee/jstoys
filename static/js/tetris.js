window.addEventListener("load", () => {
  eightro.log("hello eightro...");
  eightro.gc.setColor(1);
  eightro.gc.drawRect(0, 0, 127, 63);
  eightro.gc.drawRect(10, 10, 2, 2);
  eightro.gc.drawRect(15, 10, 5, 5);
  eightro.gc.display();
});
