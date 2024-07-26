/* eslint-disable react-hooks/exhaustive-deps */
import { PauseCircleOutlined, PlayCircleOutlined, UndoOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { formatTime, PLAY_STATUS } from "./utils";

const { NOT_START, STARTED, PLAYING, PAUSE } = PLAY_STATUS;

const btnProps = {
    shape: "default",
    size: 'large',
}

const Control = forwardRef(({
    status = null,
    playTime = {},
    cAnswer = null,
    onPlay = null,
    onPause = null,
    onReplay = null,
    disabled = false,
}, ref) => {
    const [timer, setTimer] = useState(0)

    const intervalRef = useRef();
    const timerRef = useRef(0);
    const progressBarRef = useRef();

    const updateTimer = (num = 0) => {
        timerRef.current = num;
        setTimer(num);
    }

    useImperativeHandle(
        ref,
        () => ({ progressBar: progressBarRef?.current }),
        [progressBarRef?.current],
    )

    useEffect(() => {
        const intervalTime = 67

        switch (status) {
            case PLAYING:
                intervalRef.current = setInterval(() => {
                    const nextTimer = formatTime(Math.min(playTime?.duration, timerRef.current + (intervalTime / 1000)));
                    if (nextTimer <= playTime?.duration) {
                        updateTimer(nextTimer);
                    } else {
                        clearInterval(intervalRef.current)
                    }
                }, intervalTime);
                break;
            case PAUSE:
                intervalRef?.current && clearInterval(intervalRef.current)
                break;
            case NOT_START:
            default:
                updateTimer(0);
                intervalRef?.current && clearInterval(intervalRef.current)
                break;
        }
    }, [status]);

    return (
        <>
            {!!playTime?.duration && (
                <div
                    ref={progressBarRef}
                    className='timer'
                    style={{ width: `${timer * 100 / playTime?.duration}%` }}
                />
            )}
            <div className='control'>
                <div className='control-btn'>
                    {(status === NOT_START ? !cAnswer : [STARTED, PAUSE].includes(status)) && (
                        <Button
                            {...btnProps}
                            icon={<PlayCircleOutlined />}
                            onClick={onPlay}
                            disabled={disabled}
                        />
                    )}
                    {[PLAYING].includes(status) && (
                        <Button
                            {...btnProps}
                            icon={<PauseCircleOutlined />}
                            onClick={onPause}
                            disabled={disabled}
                        />
                    )}
                    {(status === NOT_START ? !!cAnswer : [STARTED, PLAYING, PAUSE].includes(status)) && (
                        <Button
                            {...btnProps}
                            icon={<UndoOutlined />}
                            onClick={onReplay}
                            disabled={disabled}
                        />
                    )}
                </div>
                {playTime?.duration > 0 && (
                    <div className='control-time'>
                        <p className='control-time-data'>{timer}</p>
                        <p className='control-time-duration'>{playTime.duration} giây</p>
                    </div>
                )}
            </div>
        </>
    )
})

export default Control;
