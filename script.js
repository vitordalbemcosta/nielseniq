document.addEventListener("DOMContentLoaded", () => {
  const responses = Array.from(document.querySelectorAll(".response-area li"));

  const responseGroupHeading = "Q366G";
  const responseGroupText = "Q366C";

  const sortByIndex = (a, b) => {
    const aIndex = parseInt(a.getAttribute("index"));
    const bIndex = parseInt(b.getAttribute("index"));

    if (aIndex < bIndex) {
      return -1;
    }

    if (aIndex > bIndex) {
      return 1;
    }

    return 0;
  };

  const responsesOrderedWithoutGroups = responses
    .filter((r) => r.classList.contains("response"))
    .map((r) => {
      r.setAttribute("index", r.id.replace(responseGroupText, ""));

      return r;
    })
    .sort(sortByIndex);

  const responsesOrderedGroups = responses
    .filter((r) => !r.classList.contains("response"))
    .map((r) => {
      r.setAttribute("index", r.id.replace(responseGroupHeading, ""));

      return r;
    })
    .sort(sortByIndex);

  responsesOrderedWithoutGroups.splice(0, 0, responsesOrderedGroups[0]);
  responsesOrderedWithoutGroups.splice(5, 0, responsesOrderedGroups[1]);
  responsesOrderedWithoutGroups.splice(13, 0, responsesOrderedGroups[2]);
  responsesOrderedWithoutGroups.splice(20, 0, responsesOrderedGroups[3]);

  document.querySelector(".response-area").innerHTML =
    responsesOrderedWithoutGroups.map((r) => r.outerHTML).join("");
});
