const containerEl = document.querySelector(".container");

/*clientX/Y gives the coordinates relative to the viewport in 
CSS pixels. 
screenX/Y gives the coordinates relative to the
screen in device pixels.*/

/* Screen size (resolution) is the number of physical pixels present 
on a screen. Viewport or Viewport size is the number of software pixels
 (CSS pixels) present on a screen.
 Usually, viewport size displays as viewport width in pixels to viewport height in pixels.*/
window.addEventListener("mousemove", (event) => {
  containerEl.innerHTML = ` <div class="mouse-event">
        ${event.clientX}
        <h4>Mouse X Position(px)</h4>
        </div>
        <div class="mouse-event">
        ${event.clientY}
        <h4>Mouse Y Position(px)</h4>
        </div>`;
});
