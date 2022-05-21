import 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Экспериментируем с handlebars
import cardTemplate from "../templates/card.hbs";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const CAPTION_DELAY = 250;

const gallery = document.querySelector("div.gallery");
const galleryMockup = buildGalleryMockup(galleryItems);

gallery.innerHTML = galleryMockup.join("\n");

new SimpleLightbox(
  'div.gallery a',
  {
    captions: true,
    captionsData: "alt",
    captionDelay: CAPTION_DELAY,
    disableScroll: false, // Пришлось отключить, потому что у них оно коряво реализовано, и сдвигает всю галлерею
  }
);

function buildGalleryMockup(items) {
  return items.map(makeItemMockup);
};

function makeItemMockup (card) {
  return cardTemplate(card);
};

