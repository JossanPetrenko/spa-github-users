const URL = {
  APP:{
    ABOUT: '/about',
    HOME: '/home',
    USER:(userName: string) => `/user/${userName}/repositories`,
  },
  USER: {
    USERS:(value: string) => `https://api.github.com/search/users?q=${value}`,
    USER:(userName: string) => `https://api.github.com/users/${userName}`,
    REPOS:(userName: string) => `https://api.github.com/users/${userName}/repos`,
    STARRED:(userName: string) => `https://api.github.com/users/${userName}/starred{/owner}{/repo}`,
  },
};

export default URL;