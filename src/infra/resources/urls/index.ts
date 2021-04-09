const URL = {
  USER: {
    USERS:(value: string) => `https://api.github.com/search/users?q=${value}`,
    USER:(userName: string) => `https://api.github.com/users/${userName}`,
    REPOS:(userName: string) => `https://api.github.com/users/${userName}/repos?per_page=10&sort=created`,
  },
};

export default URL;
