import classNames from "classnames";
import { memo, useEffect, useState } from "react";
import SubscribeEmail from "../Utilities Components/SubscribeEmail";

const ComingSoon = () => {
    const [currentTime, setCurrentTime] = useState({
        day: new Date().getDate(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
    });

    const comingSoon = classNames(
        'flex flex-col justify-center items-center gap-10 custom-container'
    );

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime({
                day: now.getDate(),
                hour: now.getHours(),
                minute: now.getMinutes(),
                second: now.getSeconds(),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={comingSoon}>
            <h1 className="text-3xl font-bold">Coming Soon</h1>
            <div className="flex flex-col md:flex-row gap-10 text-3xl font-semibold">
                <p className="flex flex-col text-custom-orange justify-center items-center">Day <span className="text-custom-dark">{currentTime.day}</span></p>
                <p className="flex flex-col text-custom-orange justify-center items-center">Hour <span className="text-custom-dark">{currentTime.hour}</span></p>
                <p className="flex flex-col text-custom-orange justify-center items-center">Minutes <span className="text-custom-dark">{currentTime.minute}</span></p>
                <p className="flex flex-col text-custom-orange justify-center items-center">Seconds <span className="text-custom-dark">{currentTime.second}</span></p>
            </div>
            <p>Get Notified When site goes live: </p>
            <SubscribeEmail />
        </section>
    );
};

export default memo(ComingSoon);
