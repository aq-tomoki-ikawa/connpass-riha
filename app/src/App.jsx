import { useState, useId } from 'react';
import './App.scss';

function generateRandomLikeNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function generateRandomBoolean() {
  return Math.random() < 0.5;
}

const imageData = [
  {
    id: 1,
    name: 'マル',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/6623935/pexels-photo-6623935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'ムギ',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'ルル',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'ムーン',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/245035/pexels-photo-245035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    name: 'マロン',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/987984/pexels-photo-987984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    name: 'ルナ',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/1714454/pexels-photo-1714454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 7,
    name: 'チチ',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/3216568/pexels-photo-3216568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 8,
    name: 'ペル',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/2252311/pexels-photo-2252311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 9,
    name: 'レオ',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/3800391/pexels-photo-3800391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 10,
    name: 'ハナ',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/2113368/pexels-photo-2113368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 11,
    name: 'レオン',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/1696586/pexels-photo-1696586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 12,
    name: 'モカ',
    sex: generateRandomBoolean(),
    numberOfLikes: generateRandomLikeNumber(1000, 90000),
    isFollowed: generateRandomBoolean(),
    url: 'https://images.pexels.com/photos/7726318/pexels-photo-7726318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

function App() {
  const [count, setCount] = useState(0);

  const cardList = imageData.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card__thumbnail">
          <img
            src={item.url}
            alt={item.name}
            className="card__thumbnail-photo"
          />
          {item.isFollowed ? (
            <ion-icon name="paw"></ion-icon>
          ) : (
            <ion-icon name="paw-outline"></ion-icon>
          )}
        </div>

        <div className="card__detail">
          <div className="card__info">
            <p className="card__name">
              {item.name}
              {item.sex ? (
                <ion-icon name="male"></ion-icon>
              ) : (
                <ion-icon name="female"></ion-icon>
              )}
            </p>
            <p className="card__like-number">
              {item.numberOfLikes}
              <ion-icon name="heart-circle-outline"></ion-icon>
            </p>
          </div>
        </div>
      </div>
    );
  });

  cardList.sort(function () {
    return 0.5 - Math.random();
  });

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <nav className="navbar">
            <div className="navbar__logo">
              <ion-icon name="paw-outline"></ion-icon>
              <p className="navbar__text-logo">ペットグラム</p>
            </div>

            <div className="navbar__search-bar">
              <label htmlFor="search-bar">
                <input
                  type="text"
                  id="search-bar"
                  placeholder="Search for free photos"
                />
              </label>
            </div>

            <div className="navbar__menu">
              <button className="navbar__btn">ログイン</button>
              <button className="navbar__btn">登録</button>
            </div>
          </nav>
        </header>
      </div>

      <div className="container">
        <main className="main">
          <div className="card-container">{cardList}</div>
        </main>
      </div>

      <div className="container">
        <footer className="footer">
          <small>
            {' '}
            Copyright &copy; 2023 Ikawa Saikyo. All Rights Reserved.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
