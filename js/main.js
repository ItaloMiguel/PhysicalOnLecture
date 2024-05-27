import { SearchBar } from "./searchBar.js";
import { SlideTextAnimation } from "./slideTextAnimation.js";

let newSearchBar = new SearchBar().search();
let newSlideTextAnimation = new SlideTextAnimation().animation();

setInterval(newSlideTextAnimation, 2000);