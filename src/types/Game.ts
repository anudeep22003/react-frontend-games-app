type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Game = {
  id: number;
  name: string;
  background_image: string;
  added: number;

  parent_platform: { platform: Platform }[];
  // this complex thing is because parent_platform is an object
  // that has a property called platform
  // that contains an object that is a platform
  // this is how it looks
  // [
  //   {
  //     "platform": {
  //       "id": 1,
  //       "name": "PC",
  //       "slug": "pc"
  //     }
  //   },
  //   {
  //     "platform": {
  //       "id": 2,
  //       "name": "PlayStation",
  //       "slug": "playstation"
  //     }
  //   },
  //   {
  //     "platform": {
  //       "id": 3,
  //       "name": "Xbox",
  //       "slug": "xbox"
  //     }
  //   },
  //   {
  //     "platform": {
  //       "id": 7,
  //       "name": "Nintendo",
  //       "slug": "nintendo"
  //     }
  //   }
  // ]
};

export default Game;
