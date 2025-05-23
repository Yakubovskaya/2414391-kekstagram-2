import { createPhotosDescriptions } from './data-generators/photos-descriptions.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const usersPicturesListFragment = document.createDocumentFragment();

const usersPictures = createPhotosDescriptions();

usersPictures.forEach(({ url, description, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  usersPicturesListFragment.appendChild(pictureElement);
});

pictures.appendChild(usersPicturesListFragment);
