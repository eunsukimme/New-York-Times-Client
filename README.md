# New York Times Client

New York Times API를 활용한 기사 검색 웹 어플리케이션

## Getting Started

개발 환경을 구축하는 방법은 다음과 같습니다.

### Prerequisites

- Node.js 패키지 매니저 (yarn or npm)

### Installation

1. 해당 레포지토리를 클론합니다.

```
git clone https://github.com/eunsukimme/New-York-Times-Client
```

2. 클론한 폴더로 이동한 뒤 package.json에 명시된 dependencies를 모두 설치해 줍니다

```
cd New-York-Times-Client
yarn 또는 npm install
```

## Usage

터미널에 `yarn start` 또는 `npm start` 명령을 실행하여 development 서버를 실행합니다. 브라우저 주소창에 [http://localhost:3000](http://localhost:3000) 을 입력하면 다음과 같이 New-York-Times 클라이언트 페이지를 볼 수 있습니다.

<img width="1680" alt="new york times client" src="https://user-images.githubusercontent.com/31213226/72910824-6d775e80-3d7c-11ea-934b-f4ae53f75863.png">

## Features

### 🔍 기사 검색

특정 키워드를 바탕으로 New York Times 기사를 검색할 수 있습니다. 한 번에 최대 20개의 기사를 불러옵니다.

### ⭐️ 즐겨찾기

각 기사 헤드라인에 있는 별 모양의 버튼을 눌러서 원하는 기사를 '즐겨찾기'에 담을 수 있습니다. 즐겨찾기에 담은 기사는 오른쪽 위 별 모양을 버튼을 누르면 확인할 수 있습니다.

## Project Structure

src 폴더의 구조는 다음과 같습니다.

```
├── App.js
├── App.test.js
├── assets
│   └── loading.gif
├── components
│   ├── Article.js
│   ├── Favorites.js
│   ├── Footer.js
│   ├── Header.js
│   └── Main.js
├── containers
│   ├── Article.js
│   ├── Favorites.js
│   └── Main.js
├── index.js
├── logo.svg
├── reducers
│   ├── ArticleReducer.js
│   ├── FavoriteReducer.js
│   └── LoadingReducer.js
├── serviceWorker.js
├── setupTests.js
├── store.js
└── styles
    ├── Theme.js
    └── global.js
```

### Folders

- `assets` : 이미지 등의 미디어 파일들을 보관합니다.
- `components` : 메인, 헤더, 기사 등의 컴포넌트들을 보관합니다.
- `containers` : Redux store와 각 컴포넌트들을 연결(connect)해주는 wrapping 컨테이너를 보관합니다.
- `reducers` : 특정 state의 업데이트를 담당하는 reducer를 보관합니다.
- `styles` : 컴포넌트를 스타일링하는 파일들을 보관합니다.

## License

MIT
