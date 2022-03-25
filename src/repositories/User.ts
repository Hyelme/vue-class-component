import { setInterceptors } from "@/api/axios";

const instance = setInterceptors();
const header = {
  accept: "application/vnd.github.v3+json",
  Authorization: "token " + process.env.VUE_APP_GITHUB_AUTH_TOKEN,
};

function getUserList(keyword: string, perPage: number, nextPage: number) {
  return instance.get(`/search/users`, {
    headers: header,
    params: {
      q: keyword,
      per_page: perPage,
      page: nextPage,
    },
  });
}

export { getUserList };
