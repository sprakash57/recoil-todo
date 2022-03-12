import { selector } from "recoil";

interface User {
    email: string;
    picture: {
        thumbnail: string;
        large: string;
        medium: string;
    }
}

export const userState = selector<User>({
    key: "UserState",
    get: async () => {
        const response = await fetch("https://randomuser.me/api/?inc=picture,email");
        const data = await response.json();
        const { picture, email } = data.results[0];
        return { picture, email }
    }
})