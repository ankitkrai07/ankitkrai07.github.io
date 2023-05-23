document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "visible") {
    document.title = "ANKIT | SOFTWARE DEVELOPER";
  } else {
    document.title = "Comback to portfolio";
  }
});
