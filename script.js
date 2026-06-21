const IMG = "https://image.tmdb.org/t/p/";
const TMDB_API_KEY = "8deec6a997df903c25baef8bfb5d2d5f";
const TMDB_API = "https://api.themoviedb.org/3";

/*
  CineScore는 순수 HTML/CSS/JavaScript 프로젝트입니다.
  정적 HTML은 화면의 공통 골격과 반복 컴포넌트 템플릿을 들고 있고,
  이 파일은 TMDB API 요청, 화면 전환, 저장소(localStorage), 클릭 이벤트를 담당합니다.
*/
let movies = [
  {
    id: 1,
    title: "인셉션",
    en: "Inception",
    year: 2010,
    country: "미국, 영국",
    genre: ["SF", "액션", "스릴러", "미스터리"],
    runtime: 148,
    age: "12세 이상 관람가",
    director: "크리스토퍼 놀란",
    writer: "크리스토퍼 놀란",
    cast: ["레오나르도 디카프리오", "조셉 고든-레빗", "엘리엇 페이지", "톰 하디", "마리옹 코티야르"],
    roles: ["돔 코브 역", "아서 역", "아리아드네 역", "임스 역", "맬 역"],
    studio: "Warner Bros. Pictures",
    release: "2010.07.21",
    poster: `${IMG}w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg`,
    backdrop: `${IMG}original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg`,
    trailer: "YoHD9XEInc0",
    imdbId: "tt1375666",
    imdb: 8.8,
    audience: 87,
    myBase: 4.5,
    votes: 12564,
    box: "8억 3,900만 달러",
    time: "2일 전",
    summary: "타인의 꿈 속으로 들어가 생각을 훔치는 특수 보안 전문가 코브가 불가능에 가까운 작전, 즉 생각을 심는 인셉션을 제안받으며 벌어지는 SF 스릴러.",
    reviews: [
      ["영화를사랑하는사람", 5.0, "한 번 보면 빠져드는 영화. 스토리, 연출, 음악 모든 게 완벽합니다."],
      ["시네필", 4.5, "상상력을 자극하는 최고의 영화. 여러 번 봐도 새로운 의미가 보입니다."],
      ["dreamer_21", 4.0, "복잡하지만 끝까지 몰입하게 만드는 놀란 감독의 대표작."]
    ]
  },
  {
    id: 2,
    title: "인터스텔라",
    en: "Interstellar",
    year: 2014,
    country: "미국, 영국",
    genre: ["SF", "드라마", "모험"],
    runtime: 169,
    age: "12세 이상 관람가",
    director: "크리스토퍼 놀란",
    writer: "조너선 놀란, 크리스토퍼 놀란",
    cast: ["매튜 맥커너히", "앤 해서웨이", "제시카 차스테인", "마이클 케인", "맥켄지 포이"],
    roles: ["쿠퍼 역", "브랜드 역", "머피 역", "브랜드 교수 역", "어린 머피 역"],
    studio: "Paramount Pictures",
    release: "2014.11.06",
    poster: `${IMG}w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`,
    backdrop: `${IMG}original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg`,
    trailer: "zSWdZVtXT7E",
    imdbId: "tt0816692",
    imdb: 8.7,
    audience: 86,
    myBase: 4.4,
    votes: 18321,
    box: "7억 3,300만 달러",
    time: "2시간 전",
    summary: "인류의 생존을 위해 새로운 거주지를 찾아 우주로 떠나는 탐험가들의 여정과 가족의 시간을 다룬 SF 드라마.",
    reviews: [["spacewalk", 5.0, "우주 장면과 음악이 압도적입니다."], ["murph", 4.5, "과학과 감정의 균형이 좋았습니다."], ["film_note", 4.0, "긴 러닝타임에도 끝까지 몰입됩니다."]]
  },
  {
    id: 3,
    title: "다크 나이트",
    en: "The Dark Knight",
    year: 2008,
    country: "미국, 영국",
    genre: ["액션", "범죄", "드라마"],
    runtime: 152,
    age: "15세 이상 관람가",
    director: "크리스토퍼 놀란",
    writer: "조너선 놀란, 크리스토퍼 놀란",
    cast: ["크리스찬 베일", "히스 레저", "아론 에크하트", "마이클 케인", "게리 올드만"],
    roles: ["브루스 웨인 역", "조커 역", "하비 덴트 역", "알프레드 역", "고든 역"],
    studio: "Warner Bros. Pictures",
    release: "2008.08.06",
    poster: `${IMG}w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg`,
    backdrop: `${IMG}original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg`,
    trailer: "EXeTwQWrcwY",
    imdbId: "tt0468569",
    imdb: 9.0,
    audience: 94,
    myBase: 4.6,
    votes: 22481,
    box: "10억 600만 달러",
    time: "3시간 전",
    summary: "고담을 위협하는 조커와 배트맨의 대립을 통해 정의와 혼돈의 경계를 묻는 범죄 액션.",
    reviews: [["gotham", 5.0, "히스 레저의 조커는 전설입니다."], ["batlog", 4.5, "슈퍼히어로 장르의 기준을 바꾼 작품."], ["night_fan", 4.5, "지금 봐도 긴장감이 살아 있습니다."]]
  },
  {
    id: 4,
    title: "덩케르크",
    en: "Dunkirk",
    year: 2017,
    country: "영국, 미국",
    genre: ["전쟁", "드라마", "스릴러"],
    runtime: 106,
    age: "12세 이상 관람가",
    director: "크리스토퍼 놀란",
    writer: "크리스토퍼 놀란",
    cast: ["핀 화이트헤드", "톰 글린카니", "잭 로던", "해리 스타일스", "톰 하디"],
    roles: ["토미 역", "피터 역", "콜린스 역", "알렉스 역", "파리어 역"],
    studio: "Warner Bros. Pictures",
    release: "2017.07.20",
    poster: `${IMG}w500/b4Oe15CGLL61Ped0RAS9JpqdmCt.jpg`,
    backdrop: `${IMG}original/fudEG1VUWuOqleXv6NwCExK0VLy.jpg`,
    trailer: "F-eMt3SrfFU",
    imdbId: "tt5013056",
    imdb: 7.8,
    audience: 81,
    myBase: 4.0,
    votes: 9230,
    box: "5억 2,700만 달러",
    time: "5일 전",
    summary: "2차 세계대전 덩케르크 철수 작전을 육해공 세 시점으로 따라가는 압도적인 전쟁 영화.",
    reviews: [["war_note", 4.5, "전장의 긴장감을 체험하게 합니다."], ["sound_mix", 4.0, "사운드가 정말 강렬합니다."], ["cinema", 4.0, "절제된 연출이 좋았습니다."]]
  },
  {
    id: 5,
    title: "메멘토",
    en: "Memento",
    year: 2000,
    country: "미국",
    genre: ["미스터리", "스릴러"],
    runtime: 113,
    age: "15세 이상 관람가",
    director: "크리스토퍼 놀란",
    writer: "크리스토퍼 놀란",
    cast: ["가이 피어스", "캐리앤 모스", "조 판톨리아노", "마크 분 주니어", "러스 페가"],
    roles: ["레너드 역", "나탈리 역", "테디 역", "버트 역", "웨이터 역"],
    studio: "Newmarket Films",
    release: "2001.08.24",
    poster: `${IMG}w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg`,
    backdrop: `${IMG}original/6aoyUbvu0419XLKLIMoH0TkEicH.jpg`,
    trailer: "4CV41hoyS8A",
    imdbId: "tt0209144",
    imdb: 8.4,
    audience: 83,
    myBase: 4.2,
    votes: 8112,
    box: "4,000만 달러",
    time: "5분 전",
    summary: "단기 기억상실증을 앓는 남자가 아내를 죽인 범인을 추적하는 역순 구조의 미스터리 스릴러.",
    reviews: [["memory", 4.5, "구조가 정말 독창적입니다."], ["noir", 4.0, "마지막까지 의심하게 됩니다."], ["cine21", 4.0, "다시 볼수록 더 재밌습니다."]]
  },
  {
    id: 6,
    title: "포레스트 검프",
    en: "Forrest Gump",
    year: 1994,
    country: "미국",
    genre: ["드라마", "로맨스"],
    runtime: 142,
    age: "12세 이상 관람가",
    director: "로버트 저메키스",
    writer: "에릭 로스",
    cast: ["톰 행크스", "로빈 라이트", "게리 시니스", "미켈티 윌리엄슨", "샐리 필드"],
    roles: ["포레스트 역", "제니 역", "댄 중위 역", "버바 역", "검프 부인 역"],
    studio: "Paramount Pictures",
    release: "1994.10.15",
    poster: `${IMG}w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg`,
    backdrop: `${IMG}original/qdIMHd4sEfJSckfVJfKQvisL02a.jpg`,
    trailer: "bLvqoHBptjg",
    imdbId: "tt0109830",
    imdb: 8.8,
    audience: 95,
    myBase: 4.6,
    votes: 14552,
    box: "6억 7,800만 달러",
    time: "1일 전",
    summary: "순수한 마음을 가진 포레스트 검프가 미국 현대사의 굵직한 순간들을 지나며 사랑과 삶을 배워가는 이야기.",
    reviews: [["run_forrest", 5.0, "따뜻하고 오래 남는 영화."], ["life_box", 4.5, "명대사가 계속 생각납니다."], ["classic", 4.5, "언제 봐도 좋은 명작."]]
  },
  {
    id: 7,
    title: "테넷",
    en: "Tenet",
    year: 2020,
    country: "미국, 영국",
    genre: ["액션", "SF", "스릴러"],
    runtime: 150,
    age: "12세 이상 관람가",
    director: "크리스토퍼 놀란",
    writer: "크리스토퍼 놀란",
    cast: ["존 데이비드 워싱턴", "로버트 패틴슨", "엘리자베스 데비키", "케네스 브래너", "딤플 카파디아"],
    roles: ["주도자 역", "닐 역", "캣 역", "사토르 역", "프리야 역"],
    studio: "Warner Bros. Pictures",
    release: "2020.08.26",
    poster: `${IMG}w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg`,
    backdrop: `${IMG}original/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg`,
    trailer: "L3pk_TBkihU",
    imdbId: "tt6723592",
    imdb: 7.3,
    audience: 76,
    myBase: 3.8,
    votes: 7120,
    box: "3억 6,500만 달러",
    time: "4일 전",
    summary: "시간의 흐름을 뒤집는 인버전을 이용해 미래의 위협을 막으려는 비밀 요원의 작전.",
    reviews: [["inversion", 4.0, "아이디어와 액션이 강합니다."], ["timecode", 3.5, "어렵지만 스타일은 확실합니다."], ["nolan_watch", 4.0, "극장에서 봐야 진가가 납니다."]]
  },
  {
    id: 8,
    title: "오펜하이머",
    en: "Oppenheimer",
    year: 2023,
    country: "미국, 영국",
    genre: ["드라마", "역사", "전기"],
    runtime: 180,
    age: "15세 이상 관람가",
    director: "크리스토퍼 놀란",
    writer: "크리스토퍼 놀란",
    cast: ["킬리언 머피", "에밀리 블런트", "맷 데이먼", "로버트 다우니 주니어", "플로렌스 퓨"],
    roles: ["오펜하이머 역", "키티 역", "레슬리 그로브스 역", "루이스 스트로스 역", "진 태틀록 역"],
    studio: "Universal Pictures",
    release: "2023.08.15",
    poster: `${IMG}w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`,
    backdrop: `${IMG}original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg`,
    trailer: "uYPbbksJxIg",
    imdbId: "tt15398776",
    imdb: 8.3,
    audience: 91,
    myBase: 4.5,
    votes: 20341,
    box: "9억 7,600만 달러",
    time: "방금 전",
    summary: "원자폭탄 개발을 이끈 물리학자 J. 로버트 오펜하이머의 선택과 책임을 다룬 전기 드라마.",
    reviews: [["atom", 5.0, "연기와 편집, 음악이 압도적입니다."], ["history_fan", 4.5, "대사가 많지만 흡입력이 대단합니다."], ["imax", 4.5, "극장 경험이 특별했습니다."]]
  },
  {
    id: 9,
    title: "엘리멘탈",
    en: "Elemental",
    year: 2023,
    country: "미국",
    genre: ["애니메이션", "가족", "로맨스"],
    runtime: 101,
    age: "전체 관람가",
    director: "피터 손",
    writer: "존 호버그, 캣 리켈",
    cast: ["리아 루이스", "마무두 아티", "로니 델 카르멘", "쉴라 옴미", "웬디 맥렌던커비"],
    roles: ["엠버 역", "웨이드 역", "버니 역", "신더 역", "게일 역"],
    studio: "Pixar Animation Studios",
    release: "2023.06.14",
    poster: `${IMG}w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg`,
    backdrop: `${IMG}original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg`,
    trailer: "hXzcyx9V0xw",
    imdbId: "tt15789038",
    imdb: 7.0,
    audience: 92,
    myBase: 3.9,
    votes: 9320,
    box: "4억 9,600만 달러",
    time: "20분 전",
    summary: "불, 물, 공기, 흙이 함께 사는 도시에서 서로 다른 두 원소가 만나며 벌어지는 픽사 애니메이션.",
    reviews: [["pixar_love", 4.0, "색감이 정말 예쁩니다."], ["family", 4.0, "가족과 보기 좋았습니다."], ["ember", 3.5, "후반부 감정선이 좋습니다."]]
  },
  {
    id: 10,
    title: "기생충",
    en: "Parasite",
    year: 2019,
    country: "한국",
    genre: ["드라마", "스릴러"],
    runtime: 132,
    age: "15세 이상 관람가",
    director: "봉준호",
    writer: "봉준호, 한진원",
    cast: ["송강호", "이선균", "조여정", "최우식", "박소담"],
    roles: ["기택 역", "동익 역", "연교 역", "기우 역", "기정 역"],
    studio: "CJ ENM",
    release: "2019.05.30",
    poster: `${IMG}w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg`,
    backdrop: `${IMG}original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg`,
    trailer: "5xH0HfJHsaY",
    imdbId: "tt6751668",
    imdb: 8.5,
    audience: 90,
    myBase: 4.5,
    votes: 18521,
    box: "2억 6,300만 달러",
    time: "5시간 전",
    summary: "전원 백수인 기택네 가족이 박 사장네 집에 얽히며 벌어지는 계급 풍자 스릴러.",
    reviews: [["k_movie", 5.0, "한국 영화사의 큰 순간입니다."], ["black_comedy", 4.5, "웃기고 무섭고 씁쓸합니다."], ["cinema_k", 4.5, "구성과 연출이 치밀합니다."]]
  },
  {
    id: 11,
    title: "라라랜드",
    en: "La La Land",
    year: 2016,
    country: "미국",
    genre: ["로맨스", "뮤지컬", "드라마"],
    runtime: 128,
    age: "12세 이상 관람가",
    director: "데이미언 셔젤",
    writer: "데이미언 셔젤",
    cast: ["라이언 고슬링", "엠마 스톤", "존 레전드", "로즈마리 드윗", "J.K. 시몬스"],
    roles: ["세바스찬 역", "미아 역", "키스 역", "로라 역", "빌 역"],
    studio: "Lionsgate",
    release: "2016.12.07",
    poster: `${IMG}w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg`,
    backdrop: `${IMG}original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg`,
    trailer: "0pdqf4P9MB8",
    imdbId: "tt3783958",
    imdb: 8.0,
    audience: 81,
    myBase: 4.1,
    votes: 13218,
    box: "4억 7,200만 달러",
    time: "어제",
    summary: "꿈을 좇는 배우 지망생과 재즈 피아니스트의 사랑과 선택을 그린 뮤지컬 로맨스.",
    reviews: [["jazz", 4.5, "음악이 오래 남습니다."], ["mia", 4.0, "마지막 장면이 아름답습니다."], ["city_star", 4.0, "색감과 안무가 좋았습니다."]]
  },
  {
    id: 12,
    title: "듄: 파트2",
    en: "Dune: Part Two",
    year: 2024,
    country: "미국",
    genre: ["SF", "모험", "드라마"],
    runtime: 166,
    age: "12세 이상 관람가",
    director: "드니 빌뇌브",
    writer: "드니 빌뇌브, 존 스페이츠",
    cast: ["티모시 샬라메", "젠데이아", "레베카 퍼거슨", "하비에르 바르뎀", "오스틴 버틀러"],
    roles: ["폴 역", "챠니 역", "제시카 역", "스틸가 역", "페이드 로타 역"],
    studio: "Warner Bros. Pictures",
    release: "2024.02.28",
    poster: `${IMG}w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg`,
    backdrop: `${IMG}original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`,
    trailer: "Way9Dexny3w",
    imdbId: "tt15239678",
    imdb: 8.5,
    audience: 95,
    myBase: 4.6,
    votes: 11252,
    box: "7억 달러 이상",
    time: "최근",
    summary: "폴 아트레이데스가 프레멘과 함께 황제와 하코넨 가문에 맞서는 장대한 SF 서사.",
    reviews: [["arrakis", 5.0, "스케일과 사운드가 압도적입니다."], ["spice", 4.5, "전편보다 더 강렬합니다."], ["dune_fan", 4.5, "월드빌딩이 훌륭합니다."]]
  }
];

const state = {
  route: "home",
  selectedId: Number(localStorage.getItem("cs:selected")) || 1,
  query: "",
  filterGenre: "전체",
  sort: "정확도순",
  filterCountry: "전체",
  tmdbPage: 0,
  tmdbTotalPages: 500,
  tmdbLoading: false,
  tmdbQuery: "",
  libraryTab: "watchlist",
  watchlist: readStore("cs:watchlist", [8, 2, 11, 5, 1, 10]),
  recent: readStore("cs:recent", [8, 5, 9, 12, 2, 3, 10, 11, 1, 4, 6, 7]),
  ratings: readStore("cs:ratings", {})
};

const externalMovieSource = "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";
const apiSettings = {
  tmdbKey: TMDB_API_KEY,
  omdbKey: localStorage.getItem("cs:omdbKey") || ""
};
const realDataStatus = new Map();
const imdbProxy = "https://api.allorigins.win/get?url=";
const tmdbGenreMap = {
  12: "모험",
  14: "판타지",
  16: "애니메이션",
  18: "드라마",
  27: "공포",
  28: "액션",
  35: "코미디",
  36: "역사",
  37: "서부",
  53: "스릴러",
  80: "범죄",
  99: "다큐멘터리",
  878: "SF",
  9648: "미스터리",
  10402: "음악",
  10749: "로맨스",
  10751: "가족",
  10752: "전쟁"
};

const countryMap = {
  KR: "한국",
  US: "미국",
  GB: "영국",
  JP: "일본",
  FR: "프랑스",
  DE: "독일",
  IT: "이탈리아"
};
const fallbackExternalTitles = [
  ["쇼생크 탈출", 1994, ["드라마"], "미국", "The Shawshank Redemption"],
  ["대부", 1972, ["범죄", "드라마"], "미국", "The Godfather"],
  ["펄프 픽션", 1994, ["범죄", "드라마"], "미국", "Pulp Fiction"],
  ["파이트 클럽", 1999, ["드라마", "스릴러"], "미국", "Fight Club"],
  ["매트릭스", 1999, ["SF", "액션"], "미국", "The Matrix"],
  ["글래디에이터", 2000, ["액션", "드라마"], "미국", "Gladiator (2000 film)"],
  ["센과 치히로의 행방불명", 2001, ["애니메이션", "판타지"], "일본", "Spirited Away"],
  ["올드보이", 2003, ["스릴러", "드라마"], "한국", "Oldboy (2003 film)"],
  ["살인의 추억", 2003, ["범죄", "스릴러"], "한국", "Memories of Murder"],
  ["괴물", 2006, ["드라마", "SF"], "한국", "The Host (2006 film)"],
  ["아바타", 2009, ["SF", "모험"], "미국", "Avatar (2009 film)"],
  ["토이 스토리 3", 2010, ["애니메이션", "가족"], "미국", "Toy Story 3"],
  ["어바웃 타임", 2013, ["로맨스", "드라마"], "영국", "About Time (2013 film)"],
  ["위플래쉬", 2014, ["드라마"], "미국", "Whiplash (2014 film)"],
  ["그랜드 부다페스트 호텔", 2014, ["코미디", "드라마"], "미국", "The Grand Budapest Hotel"],
  ["매드맥스: 분노의 도로", 2015, ["액션", "모험"], "미국", "Mad Max: Fury Road"],
  ["너의 이름은.", 2016, ["애니메이션", "로맨스"], "일본", "Your Name"],
  ["컨택트", 2016, ["SF", "드라마"], "미국", "Arrival (film)"],
  ["겟 아웃", 2017, ["공포", "스릴러"], "미국", "Get Out"],
  ["코코", 2017, ["애니메이션", "가족"], "미국", "Coco (2017 film)"],
  ["버닝", 2018, ["미스터리", "드라마"], "한국", "Burning (2018 film)"],
  ["스파이더맨: 뉴 유니버스", 2018, ["애니메이션", "액션"], "미국", "Spider-Man: Into the Spider-Verse"],
  ["조커", 2019, ["범죄", "드라마"], "미국", "Joker (2019 film)"],
  ["1917", 2019, ["전쟁", "드라마"], "영국", "1917 (2019 film)"],
  ["미나리", 2020, ["드라마"], "미국", "Minari (film)"],
  ["소울", 2020, ["애니메이션", "가족"], "미국", "Soul (2020 film)"],
  ["듄", 2021, ["SF", "모험"], "미국", "Dune (2021 film)"],
  ["탑건: 매버릭", 2022, ["액션", "드라마"], "미국", "Top Gun: Maverick"],
  ["에브리씽 에브리웨어 올 앳 원스", 2022, ["SF", "코미디"], "미국", "Everything Everywhere All at Once"],
  ["헤어질 결심", 2022, ["미스터리", "로맨스"], "한국", "Decision to Leave"],
  ["더 퍼스트 슬램덩크", 2022, ["애니메이션", "드라마"], "일본", "The First Slam Dunk"],
  ["바비", 2023, ["코미디", "모험"], "미국", "Barbie (film)"],
  ["가디언즈 오브 갤럭시: Volume 3", 2023, ["액션", "SF"], "미국", "Guardians of the Galaxy Vol. 3"],
  ["스즈메의 문단속", 2023, ["애니메이션", "모험"], "일본", "Suzume"],
  ["서울의 봄", 2023, ["드라마", "역사"], "한국", "12.12: The Day"],
  ["파묘", 2024, ["미스터리", "공포"], "한국", "Exhuma"],
  ["범죄도시4", 2024, ["액션", "범죄"], "한국", "The Roundup: Punishment"],
  ["퓨리오사: 매드맥스 사가", 2024, ["액션", "모험"], "미국", "Furiosa: A Mad Max Saga"],
  ["인사이드 아웃 2", 2024, ["애니메이션", "가족"], "미국", "Inside Out 2"],
  ["챌린저스", 2024, ["드라마", "로맨스"], "미국", "Challengers (film)"]
];

const app = document.querySelector("#app");
const navLinks = document.querySelectorAll("[data-route]");
const searchInput = document.querySelector("#globalSearch");

/*
  <template>은 index.html에 숨어 있는 HTML 조각입니다.
  cloneTemplate()은 그 조각을 복사하고, movieCard()/miniMovie()/rankItem()이 실제 영화 데이터를 채웁니다.
  이렇게 하면 카드 구조를 HTML에서 확인할 수 있어서 HTML 비중이 높아지고 유지보수도 쉬워집니다.
*/
function cloneTemplate(id) {
  const template = document.querySelector(`#${id}`);
  if (!template) throw new Error(`${id} 템플릿을 찾을 수 없습니다.`);
  return template.content.firstElementChild.cloneNode(true);
}

function setPosterImage(img, movie) {
  img.src = movie.poster;
  img.alt = `${movie.title} 포스터`;
  img.setAttribute("onerror", "this.classList.add('broken');this.alt='포스터를 불러오지 못했습니다';");
}

function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function movieById(id) {
  return movies.find(movie => movie.id === Number(id)) || movies[0];
}

function saveState() {
  writeStore("cs:watchlist", state.watchlist);
  writeStore("cs:recent", state.recent);
  writeStore("cs:ratings", state.ratings);
  localStorage.setItem("cs:selected", state.selectedId);
}

function addRecent(id) {
  state.recent = [Number(id), ...state.recent.filter(item => item !== Number(id))].slice(0, 12);
  saveState();
}

function toggleWatchlist(id) {
  id = Number(id);
  if (state.watchlist.includes(id)) {
    state.watchlist = state.watchlist.filter(item => item !== id);
    toast("찜 목록에서 삭제했습니다.");
  } else {
    state.watchlist = [id, ...state.watchlist].slice(0, 24);
    toast("내 보관함에 추가했습니다.");
  }
  saveState();
  render(state.route);
}

function poster(movie, cls = "") {
  return `<img class="poster ${cls}" src="${movie.poster}" alt="${movie.title} 포스터" loading="lazy" onerror="this.classList.add('broken');this.alt='포스터를 불러오지 못했습니다';">`;
}

function heroImage(movie) {
  return `style="background-image:linear-gradient(90deg,rgba(0,0,0,.94) 0%,rgba(0,0,0,.76) 32%,rgba(0,0,0,.18) 70%,rgba(0,0,0,.86) 100%),url('${movie.backdrop}')"`;
}

function score(movie) {
  return `<span class="score">★ ${movie.imdb.toFixed(1)}</span>`;
}

function myScore(movie) {
  const saved = state.ratings[movie.id];
  return saved ? Number(saved).toFixed(1) : movie.myBase.toFixed(1);
}

function movieCard(movie, options = {}) {
  const card = cloneTemplate("movie-card-template");
  const saved = state.watchlist.includes(movie.id);
  const control = card.querySelector(".card-control");

  card.dataset.id = movie.id;
  setPosterImage(card.querySelector(".poster"), movie);
  card.querySelector(".movie-title").textContent = movie.title;
  card.querySelector(".movie-genres").textContent = movie.genre.join(", ");
  card.querySelector(".movie-score").textContent = `★ ${movie.imdb.toFixed(1)}`;
  card.querySelector(".movie-meta").textContent = options.time ? movie.time : `${movie.year} · ${movie.runtime}분`;

  const director = card.querySelector(".movie-director");
  if (options.director) {
    director.textContent = `감독: ${movie.director}`;
  } else {
    director.remove();
  }

  if (options.close) {
    control.className = "save-x";
    control.dataset.action = options.removeAction || "remove-watch";
    control.dataset.id = movie.id;
    control.setAttribute("aria-label", "삭제");
    control.textContent = "×";
  } else if (options.bookmark) {
    control.className = `bookmark ${saved ? "saved" : ""}`;
    control.dataset.action = "toggle-watch";
    control.dataset.id = movie.id;
    control.setAttribute("aria-label", "찜");
    control.textContent = saved ? "♥" : "♡";
  } else {
    control.remove();
  }

  return card.outerHTML;
}

function miniMovie(movie) {
  const card = cloneTemplate("movie-strip-template");
  card.dataset.id = movie.id;
  setPosterImage(card.querySelector(".poster"), movie);
  card.querySelector(".movie-title").textContent = movie.title;
  card.querySelector(".movie-score").textContent = `★ ${movie.imdb.toFixed(1)}`;
  return card.outerHTML;
}

function rankItem(movie, index) {
  const item = cloneTemplate("rank-item-template");
  item.dataset.id = movie.id;
  item.querySelector(".rank").textContent = index + 1;
  setPosterImage(item.querySelector(".poster"), movie);
  item.querySelector(".movie-title").textContent = movie.title;
  item.querySelector(".rank-boxoffice").textContent = movie.box;
  return item.outerHTML;
}

/*
  renderHome/renderSearch/renderDetail 같은 render 함수들은 "페이지를 그리는 함수"입니다.
  서버에서 새 HTML 파일을 받아오는 방식이 아니라, location.hash(#home, #search 등)를 보고
  #app 안쪽 HTML만 바꿔서 여러 페이지처럼 보이게 만듭니다.
*/
function renderHome() {
  const hero = movieById(8);
  const popular = [2, 3, 10, 1, 12, 8, 11, 7].map(movieById);
  app.innerHTML = `
    <section class="home">
      <div class="hero real-hero" ${heroImage(hero)}>
        <span class="hero-arrow left">‹</span>
        <div class="hero-content">
          <p class="eyebrow">제96회 아카데미 7관왕 수상</p>
          <h1>${hero.title}</h1>
          <div class="hero-meta"><span>${hero.year}</span><span>•</span><span>${hero.genre.slice(0, 2).join(" / ")}</span><span>•</span><span>${hero.runtime}분</span></div>
          <p>${hero.summary}</p>
          <div class="hero-actions">
            <button class="red-btn" data-action="open-detail" data-id="${hero.id}">상세정보</button>
            <button class="dark-btn" data-action="toggle-watch" data-id="${hero.id}">${state.watchlist.includes(hero.id) ? "♥ 찜 해제" : "+ 찜하기"}</button>
          </div>
        </div>
        <span class="hero-arrow right">›</span>
        <div class="hero-dots"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <section class="section">
        <div class="section-head">
          <div class="section-title"><h2>실시간 박스오피스 TOP 5</h2><small>데모 데이터 기준</small></div>
          <a class="more" href="#search">더보기 〉</a>
        </div>
        <div class="boxoffice-grid">
          ${[12, 8, 9, 10, 3].map((id, idx) => rankItem(movieById(id), idx)).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div class="section-title"><h2>인기 영화</h2><div class="tabs"><button class="active">인기영화</button><button>현재 상영작</button><button>개봉 예정작</button></div></div>
          <a class="more" href="#search">더보기 〉</a>
        </div>
        <div class="movie-row">${popular.map(miniMovie).join("")}</div>
      </section>
    </section>
  `;
}

/*
  filter와 sort는 원본 배열을 직접 지우지 않고 조건에 맞는 새 배열을 만들어 화면에 보여줍니다.
  이렇게 해야 검색어/장르/국가/정렬 조건을 바꿔도 원본 TMDB 영화 목록은 계속 보존됩니다.
*/
function filteredMovies() {
  const query = state.query.trim().toLowerCase();
  let list = movies.filter(movie => {
    const text = [movie.title, movie.en, movie.director, movie.cast.join(" "), movie.genre.join(" ")].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesGenre = state.filterGenre === "전체" || movie.genre.includes(state.filterGenre);
    const matchesCountry = state.filterCountry === "전체" || movie.country.includes(state.filterCountry);
    return matchesQuery && matchesGenre && matchesCountry;
  });

  if (state.sort === "정확도순") {
    list = list.sort((a, b) => {
      if (!query) return b.year - a.year || b.votes - a.votes;
      const aExact = a.title.toLowerCase() === query || a.en.toLowerCase() === query ? 1 : 0;
      const bExact = b.title.toLowerCase() === query || b.en.toLowerCase() === query ? 1 : 0;
      return bExact - aExact || b.year - a.year || b.votes - a.votes;
    });
  }
  if (state.sort === "평점순") list = list.sort((a, b) => b.imdb - a.imdb);
  if (state.sort === "개봉일순") list = list.sort((a, b) => b.year - a.year);
  if (state.sort === "인기순") list = list.sort((a, b) => b.votes - a.votes);
  return list;
}

function renderSearch(query = state.query) {
  state.query = query;
  const list = filteredMovies();
  const genres = ["전체", "액션", "드라마", "스릴러", "SF", "미스터리", "전쟁", "애니메이션", "로맨스", "모험"];
  const countries = ["전체", "한국", "미국", "영국", "일본", "프랑스", "독일", "이탈리아"];
  app.innerHTML = `
    <section class="page layout-search">
      <aside class="filter-panel">
        <div class="filter-title"><span>필터</span><span>⌕</span></div>
        <div class="filter-group">
          <h3>▪ 장르</h3>
          ${genres.map(genre => `<label><input type="radio" name="genre" data-action="set-genre" value="${genre}" ${state.filterGenre === genre ? "checked" : ""}> ${genre}</label>`).join("")}
        </div>
        <div class="filter-group">
          <h3>▪ 국가</h3>
          ${countries.map(country => `<label><input type="radio" name="country" data-action="set-country" value="${country}" ${state.filterCountry === country ? "checked" : ""}> ${country}</label>`).join("")}
        </div>
        ${filterGroup("연도", ["전체", "2020년 이후", "2010년~2019년", "2000년~2009년", "1990년대"])}
        <button class="red-btn reset" data-action="reset-filter">필터 초기화</button>
        <p class="data-note">TMDB 실제 영화 데이터 ${movies.filter(movie => movie.tmdbId).length}건 / 전체 캐시 ${movies.length}건<br>${tmdbProgressText()}</p>
        <div class="api-panel">
          <h3>실제 API 연동</h3>
          <input id="tmdbKeyInput" type="password" placeholder="TMDB API 키" value="${apiSettings.tmdbKey}">
          <input id="omdbKeyInput" type="password" placeholder="OMDb API 키" value="${apiSettings.omdbKey}">
          <button class="dark-btn" data-action="save-api-keys">API 키 저장</button>
          <p>TMDB 키가 코드에 하드코딩되어 있어 실제 영화/포스터/평점/예고편/리뷰를 우선 불러옵니다.</p>
        </div>
      </aside>
      <section>
        <div class="result-head">
          <div>
            <h1>“<span>${state.query || "전체 영화"}</span>”에 대한 검색 결과 총 ${list.length}건이 있습니다.</h1>
            <div class="chips">${["정확도순", "개봉일순", "평점순", "인기순"].map(sort => `<button class="chip ${state.sort === sort ? "active" : ""}" data-action="set-sort" data-sort="${sort}">${sort}</button>`).join("")}</div>
          </div>
          <select class="select"><option>20개씩 보기</option></select>
        </div>
        <div class="movie-grid">${list.map(movie => movieCard(movie, { bookmark: true, director: true })).join("") || empty("검색 결과가 없습니다.")}</div>
        <div class="load-more-panel">
          <button class="red-btn load-more" data-action="load-more-tmdb" ${state.tmdbPage >= Math.min(state.tmdbTotalPages, 500) ? "disabled" : ""}>
            ${state.tmdbLoading ? "TMDB 불러오는 중..." : "TMDB 영화 더 불러오기"}
          </button>
          <p>TMDB API는 전체 영화를 한 번에 주지 않아서 페이지 단위로 계속 불러옵니다.</p>
        </div>
        ${pagination()}
      </section>
    </section>
  `;
}

function filterGroup(title, items) {
  return `<div class="filter-group"><h3>▪ ${title}</h3>${items.map((item, i) => `<label><input type="checkbox" ${i === 0 ? "checked" : ""}> ${item}</label>`).join("")}<label>더보기⌄</label></div>`;
}

function renderDetail() {
  const movie = movieById(state.selectedId);
  addRecent(movie.id);
  const related = movies.filter(item => item.id !== movie.id && item.genre.some(genre => movie.genre.includes(genre))).slice(0, 4);
  app.innerHTML = `
    <section class="page">
      <div class="detail-hero">
        <div class="detail-poster">${poster(movie)}</div>
        <div class="detail-copy">
          <h1>${movie.title} <span class="english">${movie.en}</span></h1>
          <div class="meta-line">${score(movie)}<span>${movie.year}</span><span>${movie.runtime}분</span><span>${movie.age}</span></div>
          <div class="tag-row">${movie.genre.map(genre => `<span class="tag">${genre}</span>`).join("")}</div>
          <div class="detail-actions">
            <button class="red-btn" data-action="play-trailer" data-id="${movie.id}">▶ 예고편 재생</button>
            <button class="dark-btn" data-action="toggle-watch" data-id="${movie.id}">${state.watchlist.includes(movie.id) ? "♥ 찜 해제" : "♡ 찜하기"}</button>
            <button class="dark-btn" data-action="share">↗ 공유하기</button>
          </div>
          <p class="synopsis">${movie.summary}</p>
        </div>
        <aside class="info-panel">
          <dl class="info-list">
            <dt>감독</dt><dd>${movie.director}</dd>
            <dt>각본</dt><dd>${movie.writer}</dd>
            <dt>출연</dt><dd>${movie.cast.join(", ")}</dd>
            <dt>개봉일</dt><dd>${movie.release}</dd>
            <dt>국가</dt><dd>${movie.country}</dd>
            <dt>언어</dt><dd>영어 / 한국어 자막</dd>
            <dt>제작사</dt><dd>${movie.studio}</dd>
            <dt>흥행</dt><dd>${movie.box}</dd>
          </dl>
          <div class="rating-boxes"><div class="rating-box">IMDb<strong>${movie.imdb.toFixed(1)}/10</strong></div><div class="rating-box">관객 지수<strong>${movie.audience}%</strong></div><div class="rating-box">내 평점<strong>${myScore(movie)}/5</strong></div></div>
        </aside>
      </div>

      <div class="detail-sections">
        <section>
          <h2>예고편</h2>
          <div class="video-box real-video" data-action="play-trailer" data-id="${movie.id}" style="background-image:linear-gradient(rgba(0,0,0,.12),rgba(0,0,0,.72)),url('${movie.backdrop}')"><div class="play"><span>▶</span></div></div>
        </section>
        <section>
          <h2>출연진</h2>
          <div class="cast-row">${movie.cast.map((name, i) => `<div class="cast-card"><div><strong>${name}</strong><span>${movie.roles[i] || "출연"}</span></div></div>`).join("")}</div>
        </section>
        <section class="review-panel">
          <h2>평점 & 리뷰</h2>
          <div class="review-layout">
            <div>
              <div class="big-score"><span class="score">★</span> ${movie.imdb.toFixed(1)}<small>/10</small></div>
              <strong class="score">${movie.votes.toLocaleString()}명 평가</strong>
              <div class="bars">${ratingBars(movie).map((value, i) => `<label>${5 - i}점 <span class="bar"><i style="width:${value}%"></i></span><span>${value}%</span></label>`).join("")}</div>
              <div class="rate-box">
                <p>내 평점 남기기</p>
                <div class="rating-control">${[1,2,3,4,5].map(value => `<button data-action="rate" data-id="${movie.id}" data-rate="${value}" class="${Number(state.ratings[movie.id]) >= value ? "active" : ""}">★</button>`).join("")}</div>
              </div>
            </div>
            <div>
              <p class="source-line">데이터 출처: ${movie.realSource || "실제 API 응답 대기 중"}</p>
              ${movie.reviewsReal ? movie.reviews.map((review, i) => `<p class="review"><strong>${review[0]}</strong><span class="score">${"★".repeat(Math.round(review[1]))}</span> ${review[1].toFixed(1)}<br>${review[2]}<br><small>TMDB 실제 리뷰 ${i + 1}</small></p>`).join("") : `<div class="real-empty">TMDB에 등록된 실제 리뷰가 없거나 아직 응답을 받지 못했습니다.<br>평점, 투표수, 포스터, 출연진, 예고편은 TMDB 실제 데이터로 갱신됩니다.</div>`}
              <button class="dark-btn">리뷰 더보기 〉</button>
            </div>
          </div>
        </section>
        <section class="related-panel">
          <div class="section-head"><h2>관련 영화</h2><a class="more">더보기 〉</a></div>
          <div class="related-row">${related.map(miniMovie).join("")}</div>
        </section>
      </div>
    </section>
  `;
}

function ratingBars(movie) {
  const top = Math.max(54, Math.min(78, Math.round(movie.audience * 0.76)));
  return [top, Math.round((100 - top) * 0.55), Math.round((100 - top) * 0.25), Math.round((100 - top) * 0.14), Math.max(1, 100 - top - Math.round((100 - top) * 0.55) - Math.round((100 - top) * 0.25) - Math.round((100 - top) * 0.14))];
}

function renderRecent() {
  const list = state.recent.map(movieById);
  app.innerHTML = `
    <section class="page">
      <div class="recent-head">
        <div class="recent-title"><h1>◷ 최근 본 영화</h1><p>최근에 시청했거나 상세 정보를 확인한 영화입니다.<br>시간 순서대로 최대 12개까지 저장됩니다.</p></div>
        <button class="dark-btn" data-action="clear-recent">♲ 전체 삭제</button>
      </div>
      <div class="recent-grid">${list.map(movie => movieCard(movie, { close: true, time: true, removeAction: "remove-recent" })).join("") || empty("최근 본 영화가 없습니다.")}</div>
      <div class="save-note"><b>▦</b><div><strong>기록은 최대 12개까지 저장됩니다.</strong><br><span>상세 페이지를 열면 자동으로 최근 본 영화에 저장됩니다.</span></div></div>
    </section>
  `;
}

function renderMypage() {
  const list = state.libraryTab === "watchlist"
    ? state.watchlist.map(movieById)
    : state.libraryTab === "recent"
      ? state.recent.map(movieById)
      : Object.keys(state.ratings).map(movieById);

  app.innerHTML = `
    <section class="page mypage-layout">
      <aside>
        <div class="profile-card"><div class="avatar"></div><h2>씨네스코어</h2><p>cinescore@email.com</p><button class="dark-btn" data-action="profile">프로필 수정</button></div>
        <nav class="side-menu">
          <button class="${state.libraryTab === "watchlist" ? "active" : ""}" data-action="library-tab" data-tab="watchlist">♥ 찜 목록</button>
          <button class="${state.libraryTab === "recent" ? "active" : ""}" data-action="library-tab" data-tab="recent">◷ 시청 기록</button>
          <button class="${state.libraryTab === "ratings" ? "active" : ""}" data-action="library-tab" data-tab="ratings">☆ 평점 / 리뷰</button>
          <button data-action="profile">⚙ 설정</button>
          <button data-action="logout">⇱ 로그아웃</button>
        </nav>
      </aside>
      <section>
        <div class="library-head">
          <div class="library-title"><h1>내 보관함</h1><p>찜 목록과 시청 기록, 내가 남긴 평점을 확인하고 관리하세요.</p><div class="library-tabs"><span class="${state.libraryTab === "watchlist" ? "active" : ""}" data-action="library-tab" data-tab="watchlist">찜 목록</span><span class="${state.libraryTab === "recent" ? "active" : ""}" data-action="library-tab" data-tab="recent">시청 기록</span><span class="${state.libraryTab === "ratings" ? "active" : ""}" data-action="library-tab" data-tab="ratings">평점 / 리뷰</span></div></div>
          <div class="view-tools"><button class="dark-btn">▦</button><button class="dark-btn">☰</button><select class="select"><option>최신 추가순</option></select></div>
        </div>
        <div class="library-grid">${list.map(movie => movieCard(movie, { close: true, removeAction: state.libraryTab === "recent" ? "remove-recent" : "remove-watch" })).join("") || empty("저장된 영화가 없습니다.")}</div>
        ${pagination()}
      </section>
    </section>
  `;
}

function empty(message) {
  const emptyBox = cloneTemplate("empty-state-template");
  emptyBox.textContent = message;
  return emptyBox.outerHTML;
}

function pagination() {
  return `<div class="pagination"><button class="page-btn">«</button><button class="page-btn">‹</button><button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">3</button><button class="page-btn">›</button><button class="page-btn">»</button></div>`;
}

function routeFromHash() {
  const hash = location.hash.replace("#", "");
  if (["home", "search", "detail", "recent", "mypage"].includes(hash)) return hash;
  return "home";
}

function setActive(route) {
  state.route = route;
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.route === route));
}

function render(route = routeFromHash(), query) {
  setActive(route);
  if (route === "search") renderSearch(query || state.query);
  if (route === "detail") renderDetail();
  if (route === "recent") renderRecent();
  if (route === "mypage") renderMypage();
  if (route === "home") renderHome();
  window.scrollTo({ top: 0, behavior: "instant" });
  setTimeout(() => hydrateVisibleRealData(route), 50);
}

/*
  상세 페이지를 열 때는 최근 본 영화에 먼저 기록한 뒤 #detail로 이동합니다.
  hashchange 이벤트와 render()가 연결되어 있기 때문에 실제 파일 이동 없이 화면만 전환됩니다.
*/
function openDetail(id) {
  state.selectedId = Number(id);
  saveState();
  location.hash = "detail";
  render("detail");
}

/*
  YouTube iframe은 동영상 ID만 알면 embed 주소로 재생할 수 있습니다.
  예고편이 없을 때는 TMDB videos 응답을 기다린 뒤 다시 모달을 열도록 hydrateRealMovieData()를 호출합니다.
*/
function playTrailer(id) {
  const movie = movieById(id);
  const old = document.querySelector(".modal");
  if (old) old.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal" role="dialog" aria-label="${movie.title} 예고편">
      <div class="modal-card trailer-card">
        <button class="modal-close" data-action="close-modal">×</button>
        <img src="https://img.youtube.com/vi/${movie.trailer}/maxresdefault.jpg" alt="${movie.title} 예고편 썸네일">
        <div class="trailer-overlay">
          <h2>${movie.title} 공식 예고편</h2>
          <p>브라우저나 유튜브 정책 때문에 사이트 안 재생이 막히는 경우가 있어, 안정적으로 YouTube에서 바로 재생되도록 연결했습니다.</p>
          <a class="red-btn trailer-link" href="https://www.youtube.com/watch?v=${movie.trailer}" target="_blank" rel="noopener">▶ YouTube에서 예고편 재생</a>
        </div>
      </div>
    </div>
  `);
}

function makeExternalMovie(item, index) {
  const year = Number(item.year) || 2000;
  const rawGenres = Array.isArray(item.genres) ? item.genres : Array.isArray(item.genre) ? item.genre : [];
  const translatedGenres = rawGenres.slice(0, 3).map(genre => ({
    Action: "액션",
    action: "액션",
    Adventure: "모험",
    adventure: "모험",
    Animation: "애니메이션",
    animation: "애니메이션",
    Biography: "전기",
    Comedy: "코미디",
    comedy: "코미디",
    Crime: "범죄",
    crime: "범죄",
    Drama: "드라마",
    drama: "드라마",
    Family: "가족",
    Fantasy: "판타지",
    Horror: "공포",
    horror: "공포",
    Mystery: "미스터리",
    Romance: "로맨스",
    "Sci-Fi": "SF",
    "sci-fi": "SF",
    Thriller: "스릴러",
    thriller: "스릴러",
    War: "전쟁"
  }[genre] || genre));
  const title = item.title || `외부 영화 ${index + 1}`;
  const encodedTitle = encodeURIComponent(title);
  const posterText = encodeURIComponent(title.length > 24 ? title.slice(0, 24) : title);
  return {
    id: 1000 + index,
    title,
    en: title,
    year,
    country: item.country || "미국",
    genre: translatedGenres.length ? translatedGenres : ["드라마"],
    runtime: 110 + (index % 35),
    age: "12세 이상 관람가",
    director: "외부 데이터",
    writer: "외부 데이터",
    cast: Array.isArray(item.cast) && item.cast.length ? item.cast.slice(0, 5) : ["출연 정보 준비중"],
    roles: ["출연", "출연", "출연", "출연", "출연"],
    studio: "외부 공개 데이터",
    release: `${year}.01.01`,
    poster: item.poster || `https://placehold.co/500x750/111827/e5e7eb?text=${posterText}`,
    backdrop: item.backdrop || `https://placehold.co/1280x720/111827/e5e7eb?text=${posterText}`,
    wikiTitle: item.wikiTitle ? encodeURIComponent(item.wikiTitle) : encodedTitle,
    trailer: "dQw4w9WgXcQ",
    imdb: Number((6.8 + (index % 23) / 10).toFixed(1)),
    audience: 70 + (index % 26),
    myBase: 3.5,
    votes: 1200 + index * 17,
    box: "외부 데이터",
    time: "외부 등록",
    summary: `${title}은(는) 외부 공개 영화 데이터에서 불러온 작품입니다. 장르, 출연진, 연도 정보를 기반으로 검색과 필터에 포함됩니다.`,
    reviews: [["external_user", 4.0, "외부 데이터로 등록된 영화입니다."], ["movie_fan", 3.5, "검색 결과를 넓히기 위해 추가되었습니다."], ["cinescore", 4.0, "상세 정보와 보관함 기능을 사용할 수 있습니다."]]
  };
}

/*
  TMDB가 주는 원본 영화 객체는 poster_path, vote_average처럼 TMDB 전용 이름을 사용합니다.
  mapTmdbMovie()는 그 데이터를 이 사이트가 쓰는 title, poster, imdb, genre 같은 이름으로 바꿔 줍니다.
*/
function mapTmdbMovie(item, index = 0) {
  const year = Number((item.release_date || "").slice(0, 4)) || 2024;
  const genre = (item.genre_ids || []).map(id => tmdbGenreMap[id]).filter(Boolean);
  const country = countryMap[item.origin_country?.[0]] || (item.original_language === "ko" ? "한국" : item.original_language === "ja" ? "일본" : "미국");
  return {
    id: 50000 + Number(item.id),
    tmdbId: item.id,
    title: item.title || item.name || item.original_title,
    en: item.original_title || item.title || "",
    year,
    country,
    genre: genre.length ? genre : ["드라마"],
    runtime: 110,
    age: "등급 정보 확인 중",
    director: "TMDB 데이터",
    writer: "TMDB 데이터",
    cast: ["출연진 확인 중"],
    roles: ["출연"],
    studio: "TMDB",
    release: item.release_date || `${year}.01.01`,
    poster: item.poster_path ? `${IMG}w500${item.poster_path}` : `https://placehold.co/500x750/111827/e5e7eb?text=${encodeURIComponent(item.title || "Movie")}`,
    backdrop: item.backdrop_path ? `${IMG}original${item.backdrop_path}` : "",
    trailer: "dQw4w9WgXcQ",
    imdb: Number((item.vote_average || 0).toFixed(1)),
    audience: Math.min(99, Math.round((item.vote_average || 0) * 10)),
    myBase: 3.5,
    votes: item.vote_count || 0,
    box: "TMDB 인기 데이터",
    time: "TMDB 등록",
    summary: item.overview || "TMDB에서 가져온 실제 영화 데이터입니다.",
    reviews: [],
    reviewsReal: false,
    realSource: "TMDB",
    popularity: item.popularity || 0
  };
}

function mergeMovie(movie) {
  const byTmdb = movie.tmdbId ? movies.findIndex(item => item.tmdbId === movie.tmdbId) : -1;
  const byTitle = movies.findIndex(item => item.title.toLowerCase() === movie.title.toLowerCase() && item.year === movie.year);
  const index = byTmdb >= 0 ? byTmdb : byTitle;
  if (index >= 0) {
    movies[index] = { ...movies[index], ...movie, id: movies[index].id };
    return movies[index];
  }
  movies.push(movie);
  return movie;
}

/*
  async/await 문법:
  fetch()처럼 시간이 걸리는 작업을 기다렸다가 다음 줄을 실행하게 해 줍니다.
  AbortController는 API 응답이 너무 오래 걸릴 때 요청을 끊어서 화면이 계속 멈춰 보이지 않게 합니다.
*/
async function tmdbFetch(path, params = {}) {
  const query = new URLSearchParams({
    api_key: TMDB_API_KEY,
    language: "ko-KR",
    ...params
  });
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  const response = await fetch(`${TMDB_API}${path}?${query.toString()}`, { cache: "force-cache", signal: controller.signal });
  clearTimeout(timer);
  if (!response.ok) throw new Error("TMDB request failed");
  return response.json();
}

/*
  TMDB discover API는 한 번에 모든 영화를 주지 않고 page 단위로 나눠서 줍니다.
  "더 불러오기"를 누를 때마다 다음 page를 받아 movies 배열에 합치고, 중복 영화는 mergeMovie()에서 정리합니다.
*/
async function loadTmdbCatalog(reset = false) {
  if (state.tmdbLoading) return;
  if (reset) {
    state.tmdbPage = 0;
    state.tmdbTotalPages = 500;
    state.tmdbQuery = "";
  }
  if (state.tmdbPage >= Math.min(state.tmdbTotalPages, 500)) return;

  state.tmdbLoading = true;
  const nextPage = state.tmdbPage + 1;
  try {
    let data;
    try {
      data = await tmdbFetch("/discover/movie", {
        page: nextPage,
        sort_by: "popularity.desc",
        include_adult: "false"
      });
    } catch {
      data = await tmdbFetch("/movie/popular", { page: nextPage });
    }
    state.tmdbPage = data.page || nextPage;
    state.tmdbTotalPages = Math.min(data.total_pages || 500, 500);
    (data.results || [])
      .filter(item => item.poster_path && item.title)
      .forEach((item, index) => mergeMovie(mapTmdbMovie(item, index)));
  } catch {
    console.warn("TMDB movie list request failed");
    toast("TMDB 영화 목록을 불러오지 못했습니다.");
  } finally {
    state.tmdbLoading = false;
    if (state.route === "search" || state.route === "home") render(state.route);
  }
}

/*
  검색어가 있을 때는 discover가 아니라 search/movie API를 사용합니다.
  검색 결과도 mapTmdbMovie()를 통과시키기 때문에 기존 영화 카드/상세 페이지를 그대로 재사용할 수 있습니다.
*/
async function searchTmdbCatalog(query, reset = false) {
  const normalized = query.trim();
  if (!normalized) {
    await loadTmdbCatalog(reset);
    return;
  }
  if (state.tmdbLoading) return;
  if (reset || state.tmdbQuery !== normalized) {
    state.tmdbQuery = normalized;
    state.tmdbPage = 0;
    state.tmdbTotalPages = 500;
  }
  if (state.tmdbPage >= Math.min(state.tmdbTotalPages, 500)) return;

  state.tmdbLoading = true;
  const nextPage = state.tmdbPage + 1;
  try {
    const data = await tmdbFetch("/search/movie", { query: normalized, page: nextPage, include_adult: "false" });
    state.tmdbPage = data.page || nextPage;
    state.tmdbTotalPages = Math.min(data.total_pages || 1, 500);
    (data.results || [])
      .filter(item => item.poster_path && item.title)
      .forEach((item, index) => mergeMovie(mapTmdbMovie(item, index)));
  } catch {
    toast("TMDB 검색 데이터를 불러오지 못했습니다.");
  } finally {
    state.tmdbLoading = false;
    if (state.route === "search") render("search");
  }
}

function tmdbProgressText() {
  const total = Math.min(state.tmdbTotalPages || 500, 500);
  return state.query.trim()
    ? `TMDB 검색 ${state.tmdbPage}/${total}페이지 로딩됨`
    : `TMDB 전체 목록 ${state.tmdbPage}/${total}페이지 로딩됨`;
}

async function loadExternalCatalog() {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);
    const response = await fetch(externalMovieSource, { cache: "force-cache", signal: controller.signal });
    clearTimeout(timer);
    if (!response.ok) throw new Error("external data failed");
    const data = await response.json();
    const existing = new Set(movies.map(movie => movie.title.toLowerCase()));
    const external = data
      .filter(item => item && item.title && Number(item.year) >= 1980 && !existing.has(item.title.toLowerCase()))
      .slice(0, 160)
      .map(makeExternalMovie);
    movies = [...movies, ...external];
    addFallbackCatalog();
    hydrateExternalImages(external.slice(0, 80));
    if (state.route === "search") render("search");
  } catch {
    addFallbackCatalog();
    if (state.route === "search") render("search");
    toast("외부 영화 데이터 연결이 느려 백업 영화 데이터를 표시합니다.");
  }
}

function addFallbackCatalog() {
  const existing = new Set(movies.map(movie => movie.title.toLowerCase()));
  const fallback = fallbackExternalTitles
    .filter(item => !existing.has(item[0].toLowerCase()))
    .map((item, index) => makeExternalMovie({ title: item[0], year: item[1], genre: item[2], country: item[3], wikiTitle: item[4], cast: ["주요 출연진"] }, index + 300));
  movies = [...movies, ...fallback];
  hydrateExternalImages(fallback);
}

async function hydrateExternalImages(list) {
  const targets = list.filter(movie => movie.wikiTitle);
  let changed = false;
  for (const movie of targets) {
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${movie.wikiTitle}`, { cache: "force-cache" });
      let image = "";
      if (response.ok) {
        const data = await response.json();
        image = data.thumbnail?.source || data.originalimage?.source || "";
      }
      if (!image) {
        const pageImageResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=500&titles=${movie.wikiTitle}`, { cache: "force-cache" });
        if (pageImageResponse.ok) {
          const pageData = await pageImageResponse.json();
          const page = Object.values(pageData.query?.pages || {})[0];
          image = page?.thumbnail?.source || "";
        }
      }
      if (!image) continue;
      movie.poster = image.replace(/\/\d+px-/, "/500px-");
      movie.backdrop = image;
      changed = true;
    } catch {
      continue;
    }
  }
  if (changed && state.route === "search") render("search");
}

async function fetchProxyText(url) {
  const response = await fetch(`${imdbProxy}${encodeURIComponent(url)}`, { cache: "force-cache" });
  if (!response.ok) throw new Error("proxy failed");
  const data = await response.json();
  return data.contents || "";
}

function decodeText(text = "") {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text.replace(/\\u([\dA-Fa-f]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  return textarea.value.replace(/\\"/g, "\"").replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
}

function parseImdbPage(html) {
  const scripts = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const script of scripts) {
    try {
      const data = JSON.parse(script[1].trim());
      const item = Array.isArray(data) ? data.find(entry => entry.aggregateRating) : data;
      if (!item?.aggregateRating) continue;
      return {
        rating: Number(item.aggregateRating.ratingValue),
        votes: Number(String(item.aggregateRating.ratingCount || "").replace(/[^\d]/g, "")),
        image: item.image || "",
        summary: item.description || ""
      };
    } catch {
      continue;
    }
  }
  return {};
}

function parseImdbReviews(html) {
  const reviewBodies = [
    ...html.matchAll(/"reviewBody"\s*:\s*"([^"]{40,900})"/g),
    ...html.matchAll(/"reviewText"\s*:\s*"([^"]{40,900})"/g),
    ...html.matchAll(/<div class="text show-more__control">([\s\S]{40,900}?)<\/div>/g)
  ];
  return reviewBodies.slice(0, 3).map((match, index) => [
    `IMDb_user_${index + 1}`,
    4.0,
    decodeText(match[1]).slice(0, 180)
  ]).filter(review => review[2]);
}

async function hydrateFromOmdb(movie) {
  if (!apiSettings.omdbKey || !movie.imdbId) return false;
  const response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbId}&apikey=${apiSettings.omdbKey}`, { cache: "force-cache" });
  if (!response.ok) return false;
  const data = await response.json();
  if (data.Response === "False") return false;
  if (data.imdbRating && data.imdbRating !== "N/A") movie.imdb = Number(data.imdbRating);
  if (data.imdbVotes && data.imdbVotes !== "N/A") movie.votes = Number(data.imdbVotes.replace(/,/g, ""));
  if (data.Poster && data.Poster !== "N/A") movie.poster = data.Poster;
  if (data.Plot && data.Plot !== "N/A") movie.summary = data.Plot;
  movie.realSource = "OMDb / IMDb";
  return true;
}

/*
  상세 페이지는 목록보다 더 풍부한 데이터가 필요합니다.
  append_to_response는 credits, videos, reviews, release_dates를 한 요청으로 함께 받아오는 TMDB 옵션입니다.
*/
async function hydrateFromTmdb(movie) {
  if (!apiSettings.tmdbKey && !TMDB_API_KEY) return false;
  let tmdbId = movie.tmdbId;
  let tmdbMovie = null;

  if (!tmdbId && movie.imdbId) {
    const found = await tmdbFetch(`/find/${movie.imdbId}`, { external_source: "imdb_id" });
    tmdbMovie = found.movie_results?.[0] || null;
    tmdbId = tmdbMovie?.id;
  }

  if (!tmdbId) return false;
  const detail = await tmdbFetch(`/movie/${tmdbId}`, { append_to_response: "credits,videos,reviews,release_dates" });

  movie.tmdbId = tmdbId;
  movie.title = detail.title || movie.title;
  movie.en = detail.original_title || movie.en;
  movie.release = detail.release_date || movie.release;
  movie.year = Number((detail.release_date || "").slice(0, 4)) || movie.year;
  movie.runtime = detail.runtime || movie.runtime;
  movie.genre = (detail.genres || []).map(genre => genre.name).map(name => ({
    Action: "액션",
    Adventure: "모험",
    Animation: "애니메이션",
    Comedy: "코미디",
    Crime: "범죄",
    Drama: "드라마",
    Family: "가족",
    Fantasy: "판타지",
    Horror: "공포",
    Mystery: "미스터리",
    Romance: "로맨스",
    "Science Fiction": "SF",
    Thriller: "스릴러",
    War: "전쟁"
  }[name] || name));
  movie.country = detail.production_countries?.[0]?.iso_3166_1 ? (countryMap[detail.production_countries[0].iso_3166_1] || detail.production_countries[0].name) : movie.country;
  movie.studio = detail.production_companies?.[0]?.name || movie.studio;
  movie.box = detail.revenue ? `${detail.revenue.toLocaleString()} 달러` : movie.box;
  if (detail.poster_path) movie.poster = `${IMG}w500${detail.poster_path}`;
  if (detail.backdrop_path) movie.backdrop = `${IMG}original${detail.backdrop_path}`;
  if (detail.vote_average) movie.imdb = Number(detail.vote_average.toFixed(1));
  if (detail.vote_count) movie.votes = detail.vote_count;
  if (detail.overview) movie.summary = detail.overview;

  const crew = detail.credits?.crew || [];
  movie.director = crew.find(person => person.job === "Director")?.name || movie.director;
  movie.writer = crew.find(person => ["Writer", "Screenplay", "Story"].includes(person.job))?.name || movie.writer;
  const cast = (detail.credits?.cast || []).slice(0, 5);
  if (cast.length) {
    movie.cast = cast.map(person => person.name);
    movie.roles = cast.map(person => person.character || "출연");
  }

  const trailer = (detail.videos?.results || []).find(video => video.site === "YouTube" && video.type === "Trailer");
  if (trailer?.key) movie.trailer = trailer.key;

  const certification = detail.release_dates?.results
    ?.find(entry => entry.iso_3166_1 === "KR" || entry.iso_3166_1 === "US")
    ?.release_dates?.find(item => item.certification)?.certification;
  if (certification) movie.age = `${certification} 등급`;

  const realReviews = (detail.reviews?.results || []).slice(0, 3).map(review => [
    review.author || "TMDB_user",
    Number(((review.author_details?.rating || 8) / 2).toFixed(1)),
    decodeText(review.content || "").slice(0, 190)
  ]).filter(review => review[2]);
  if (realReviews.length) {
    movie.reviews = realReviews;
    movie.reviewsReal = true;
  } else {
    const enReviews = await tmdbFetch(`/movie/${tmdbId}/reviews`, { language: "en-US", page: 1 });
    const englishReviews = (enReviews.results || []).slice(0, 3).map(review => [
      review.author || "TMDB_user",
      Number(((review.author_details?.rating || 8) / 2).toFixed(1)),
      decodeText(review.content || "").slice(0, 190)
    ]).filter(review => review[2]);
    if (englishReviews.length) {
      movie.reviews = englishReviews;
      movie.reviewsReal = true;
    }
  }
  movie.realSource = "TMDB";
  return true;
}

async function hydrateFromImdbPublic(movie) {
  if (!movie.imdbId) return false;
  let changed = false;
  try {
    const html = await fetchProxyText(`https://www.imdb.com/title/${movie.imdbId}/`);
    const parsed = parseImdbPage(html);
    if (parsed.rating) {
      movie.imdb = parsed.rating;
      changed = true;
    }
    if (parsed.votes) {
      movie.votes = parsed.votes;
      changed = true;
    }
    if (parsed.image) {
      movie.poster = parsed.image;
      changed = true;
    }
    if (parsed.summary) {
      movie.summary = parsed.summary;
      changed = true;
    }
  } catch {
    // IMDb blocks some proxy requests; keep the existing data in that case.
  }

  try {
    const reviewHtml = await fetchProxyText(`https://www.imdb.com/title/${movie.imdbId}/reviews`);
    const realReviews = parseImdbReviews(reviewHtml);
    if (realReviews.length) {
      movie.reviews = realReviews;
      movie.reviewsReal = true;
      changed = true;
    }
  } catch {
    // Review pages are more frequently blocked than title pages.
  }

  if (changed) movie.realSource = "IMDb 공개 페이지";
  return changed;
}

async function hydrateRealMovieData(movie) {
  const key = `${movie.id}:${movie.imdbId || "no-imdb"}:${apiSettings.tmdbKey ? "tmdb" : ""}:${apiSettings.omdbKey ? "omdb" : ""}`;
  if (realDataStatus.get(key)) return false;
  realDataStatus.set(key, "loading");

  let changed = false;
  try {
    changed = await hydrateFromTmdb(movie) || changed;
    changed = await hydrateFromOmdb(movie) || changed;
    changed = await hydrateFromImdbPublic(movie) || changed;
  } catch {
    changed = false;
  }
  realDataStatus.set(key, "done");
  return changed;
}

function visibleMovieIds() {
  const ids = [...document.querySelectorAll("[data-id]")].map(node => Number(node.dataset.id)).filter(Boolean);
  if (state.route === "detail") ids.unshift(state.selectedId);
  return [...new Set(ids)].slice(0, 10);
}

async function hydrateVisibleRealData(route) {
  const ids = visibleMovieIds();
  let changed = false;
  for (const id of ids) {
    changed = await hydrateRealMovieData(movieById(id)) || changed;
  }
  if (changed && state.route === route) render(route);
}

function toast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  document.body.insertAdjacentHTML("beforeend", `<div class="toast">${message}</div>`);
  setTimeout(() => document.querySelector(".toast")?.remove(), 1800);
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-action], [data-route], .movie-card, .movie-strip-card, .rank-item");
  if (!target) return;

  const action = target.dataset.action;
  if (target.dataset.route) {
    if (target.dataset.tab) state.libraryTab = target.dataset.tab;
    if (target.dataset.searchMode === "genre") {
      state.query = "";
      state.filterGenre = "액션";
      state.filterCountry = "전체";
    }
    if (target.dataset.searchMode === "country") {
      state.query = "";
      state.filterGenre = "전체";
      state.filterCountry = "한국";
    }
    location.hash = target.dataset.route;
    render(target.dataset.route);
    return;
  }
  if (!action && target.dataset.id) {
    openDetail(target.dataset.id);
    return;
  }

  event.stopPropagation();
  if (action === "open-detail") openDetail(target.dataset.id);
  if (action === "toggle-watch") toggleWatchlist(target.dataset.id);
  if (action === "remove-watch") {
    state.watchlist = state.watchlist.filter(id => id !== Number(target.dataset.id));
    saveState();
    toast("삭제했습니다.");
    render(state.route);
  }
  if (action === "remove-recent") {
    state.recent = state.recent.filter(id => id !== Number(target.dataset.id));
    saveState();
    toast("최근 본 영화에서 삭제했습니다.");
    render(state.route);
  }
  if (action === "clear-recent") {
    state.recent = [];
    saveState();
    toast("최근 본 영화를 모두 삭제했습니다.");
    render("recent");
  }
  if (action === "set-sort") {
    state.sort = target.dataset.sort;
    render("search");
  }
  if (action === "set-genre") {
    state.filterGenre = target.value;
    render("search");
  }
  if (action === "set-country") {
    state.filterCountry = target.value;
    render("search");
  }
  if (action === "reset-filter") {
    state.filterGenre = "전체";
    state.filterCountry = "전체";
    state.sort = "정확도순";
    render("search");
  }
  if (action === "load-more-tmdb") {
    if (state.query.trim()) {
      searchTmdbCatalog(state.query);
    } else {
      loadTmdbCatalog();
    }
  }
  if (action === "save-api-keys") {
    apiSettings.tmdbKey = document.querySelector("#tmdbKeyInput")?.value.trim() || "";
    apiSettings.omdbKey = document.querySelector("#omdbKeyInput")?.value.trim() || "";
    localStorage.setItem("cs:tmdbKey", apiSettings.tmdbKey);
    localStorage.setItem("cs:omdbKey", apiSettings.omdbKey);
    realDataStatus.clear();
    toast("API 키를 저장하고 실제 영화 데이터를 다시 불러옵니다.");
    render("search");
  }
  if (action === "play-trailer") playTrailer(target.dataset.id);
  if (action === "close-modal") document.querySelector(".modal")?.remove();
  if (action === "share") {
    navigator.clipboard?.writeText(location.href);
    toast("현재 상세 페이지 주소를 복사했습니다.");
  }
  if (action === "rate") {
    state.ratings[target.dataset.id] = Number(target.dataset.rate);
    saveState();
    toast(`${target.dataset.rate}점을 저장했습니다.`);
    render("detail");
  }
  if (action === "library-tab") {
    state.libraryTab = target.dataset.tab;
    render("mypage");
  }
  if (action === "profile") toast("프로필 수정 기능은 데모로 준비되었습니다.");
  if (action === "logout") toast("로그아웃되었습니다. 데모 계정은 유지됩니다.");
});

document.querySelector("#topSearch").addEventListener("submit", event => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  location.hash = "search";
  render("search", state.query);
  searchTmdbCatalog(state.query, true);
});

window.addEventListener("hashchange", () => render(routeFromHash()));
render(routeFromHash());
loadTmdbCatalog(true);
