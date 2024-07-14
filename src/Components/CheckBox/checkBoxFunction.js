import { filterRecommendations } from '../../util/constants';

export const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const checkbox = document.getElementById(id);
  
    if (checked) {
      checkbox.classList.add("selected");
    } else {
      checkbox.classList.remove("selected");
    }
};

export const handleSubmit = (event) => {
  event.preventDefault();
  const selectedCheckboxes = document.querySelectorAll(".selection__checkbox:checked");
  const selectedCategories = Array.from(selectedCheckboxes).map(checkbox => checkbox.id);
  const filteredRecommendations = filterRecommendations(selectedCategories);
  console.log(filteredRecommendations);
};