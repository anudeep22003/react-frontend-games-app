export type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Game = {
  id: number;
  name: string;
  background_image: string;
  added: number;
  metacritic: number;

  parent_platforms: { platform: Platform }[];
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
  // ]
};

export default Game;
