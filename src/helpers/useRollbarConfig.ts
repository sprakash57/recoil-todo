
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
                client: {
                    javascript: {
                        source_map_enabled: true,
                        code_version: "3",
                        guess_uncaught_frames: true
                    }
                }
            }
        });
        setRollbar(rollbar);
    }, [email])
}

export default useRollbarConfig;