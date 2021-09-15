import { selector } from "recoil";

export const userState = selector({
    key: "UserState",
    get: async () => {
        const response = await fetch("https://randomuser.me/api/?inc=picture");
        const data = await response.json();
        return data.results[0].picture;
    }
})