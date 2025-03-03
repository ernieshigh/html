const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonCard = document.querySelector("#season");
const edibleCard = document.querySelector("#edible");

const noResultsMessage = document.querySelector(".no-message");

const currentFilter = {
  season: "all",
  edible: "all",
};

seasonCard.addEventListener("change", updateFilter);
edibleCard.addEventListener("change", updateFilter);

function updateFilter(e) {
  const selected = e.target.name;
  currentFilter[selected] = e.target.value;
  if (!document.startViewTransition) {
    filter();
    return;
  }
  document.startViewTransition(() => filter());
}

console.log(noResultsMessage);
function filter() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = currentFilter.season === season;
    const matchesEdible = currentFilter.edible === edible;
    if (
      (matchesEdible || currentFilter.edible === "all") &&
      (matchesSeason || currentFilter.season === "all")
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });
  if (hasVisibleCards) {
    noResultsMessage.hidden = true;
  } else {
    noResultsMessage.hidden = false;
  }
}
