
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Rollbar from "rollbar";
import { userState } from "store/header";

const useRollbarConfig = () => {
    const [, setRollbar] = useState<Rollbar>();
    const { email } = useRecoilValue(userState);

    useEffect(() => {
        const rollbar = new Rollbar({
            enabled: true,
            accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
            addErrorContext: true,
            captureUncaught: true,
            captureUnhandledRejections: true,
            payload: {
                person: { id: email, email },
                environment: process.env.NODE_ENV,
            }
        });
        setRollbar(rollbar);
    }, [email])
}

export default useRollbarConfig;