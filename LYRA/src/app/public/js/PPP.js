window.addEventListener("message", (event) => {
    const message = event.data;
    if (message.sidebarIsClosed) {
      const iframe = document.querySelector(".frame");
      iframe.style.width = "88px";
    } else {
      const iframe = document.querySelector(".frame");
      iframe.style.width = "250px";
    }
  });