const names = [
  "Иван",
  "Ольга",
  "Мария",
  "Артем",
  "Виктор",
  "Юлия",
  "Глеб",
  "Юра",
];

const messages = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  const index = getRandom(0, array.length - 1);
  return array[index];
}

let commentId = 1;

function createComment() {
  const id = commentId++;
  const avatar = "img/avatar-" + getRandom(1, 6) + ".svg";
  const message = getRandomElement(messages);
  const name = getRandomElement(names);

  return {
    id,
    avatar,
    message,
    name,
  };
}

function createComments() {
  const count = getRandom(0, 30);
  const comments = [];

  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }

  return comments;
}

function createPhoto(i) {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: "Описание фотографии",
    likes: getRandom(15, 200),
    comments: createComments(),
  };
}

function createPhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
}

const photos = createPhotos();
console.log(photos);
