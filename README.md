# 📰 New York Times Client

New York Times API를 활용한 기사 검색 웹 어플리케이션

## 🎬 Getting Started

개발 환경을 구축하는 방법은 다음과 같습니다.

### ☝️ Requirements

- Node.js 패키지 매니저 (yarn or npm)

### ✌️ Installation

1. 해당 레포지토리를 클론합니다.

```
git clone https://github.com/eunsukimme/New-York-Times-Client
```

2. 클론한 폴더로 이동한 뒤 package.json에 명시된 dependencies를 모두 설치해 줍니다

```
cd New-York-Times-Client
yarn 또는 npm install
```

## 🤩 Usage

터미널에 `yarn start` 또는 `npm start` 명령을 실행하여 development 서버를 실행합니다. 브라우저 주소창에 [http://localhost:3000](http://localhost:3000) 을 입력하면 다음과 같이 New-York-Times 클라이언트 페이지를 볼 수 있습니다.

<img width="1680" alt="new york times client" src="https://user-images.githubusercontent.com/31213226/72910824-6d775e80-3d7c-11ea-934b-f4ae53f75863.png">

## ✨ Features

New York Times Client는 다음 기능들을 제공합니다.

### 🔍 기사 검색

특정 키워드를 바탕으로 New York Times 기사를 검색할 수 있습니다. 한 번에 최대 20개의 기사를 불러옵니다.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/31213226/72914247-be3d8600-3d81-11ea-80c1-a53e9322954d.gif)

### ⭐️ 즐겨찾기

각 기사 헤드라인에 있는 별 모양의 버튼을 눌러서 원하는 기사를 '즐겨찾기'에 담을 수 있습니다. 즐겨찾기에 담은 기사는 오른쪽 위 별 모양을 버튼을 누르면 확인할 수 있습니다.

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/31213226/72914790-969aed80-3d82-11ea-8ed5-5926c5cdafe8.gif)

## 🏛 Project Structure

src 폴더의 구조는 다음과 같습니다.

```
├── App.test.js
├── App.tsx
├── assets/
├── components
│   ├── UI/
│   ├── button/
│   ├── common/
│   └── index.ts
├── containers
│   ├── Favorites.tsx
│   ├── Main.tsx
│   └── index.ts
├── hooks
│   ├── index.ts
│   └── useNews.ts
├── index.tsx
├── lib
│   ├── api/
│   └── styles/
└── modules
    ├── index.ts
    ├── news
    │   ├── actions.ts
    │   ├── constants.ts
    │   ├── reducer.ts
    │   ├── sagas.ts
    │   └── utils.ts
    └── types.ts
```

### 🗂 Folders

- `assets` : 이미지 등의 미디어 파일들을 보관합니다.
- `components` : button, icon 등 재사용 가능한 UI 컴포넌트들을 보관합니다.
- `containers` : Stateful 한 컴포넌트들을 보관합니다.
- `modules` : Redux 모듈들을 보관합니다.
- `hooks` : React hook 모듈들을 보관합니다.

## ⚖️ License

MIT
