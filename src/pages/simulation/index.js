/* eslint-disable react-hooks/exhaustive-deps */
import { InfoCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx';
import { isNumber } from 'lodash';

import { CHAPTERS, formatTime, getResultRange as getResult, getStep as getStepTime, getTimeStamp, getVideo, PLAY_STATUS, QUESTIONS, RANGE } from './utils';
import Control from './control';

import IMG_FLAG from '../../assets/images/flag1.png';
import './style.scss';

const { NOT_START, STARTED, PLAYING, PAUSE } = PLAY_STATUS;

const Simulation = () => {
  const [cQuestion, setCQuestion] = useState(1);
  const [result, setResult] = useState([]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(NOT_START);
  const [playTime, setPlayTime] = useState({ duration: 0, start: 0 });
  const [answer, setAnswer] = useState({});

  const videoRef = useRef(null);
  const controlRef = useRef(null);

  const cQuestionInfo = QUESTIONS?.[cQuestion - 1];
  const cAnswer = answer?.[cQuestion];

  const isLoaded = playTime?.duration > 0;

  const disableSpace = !isLoaded || [NOT_START, STARTED].includes(status) || isNumber(cAnswer?.time);
  const disablePrev = !isLoaded || cQuestion <= 1;
  const disableNext = !isLoaded || cQuestion >= QUESTIONS?.length;

  const totalScore = Object.values(answer).reduce((acc, curr) => acc + (curr?.point || 0), 0)

  const onPlay = () => {
    setStatus(PLAYING);
    status === NOT_START && (
      setPlayTime(prev => ({ ...prev, start: getTimeStamp() }))
    )
    cAnswer && (
      setAnswer(prev => ({ ...prev, [cQuestion]: null }))
    )
    videoRef?.current?.play();
  }

  const onPause = () => {
    setStatus(PAUSE);
    videoRef?.current?.pause()
  }

  const onReplay = () => {
    if (status === NOT_START && !!cAnswer) {
      onPlay();
    } else {
      setStatus(STARTED);
      setPlayTime(prev => ({ ...prev, start: 0 }))
      setAnswer(prev => ({ ...prev, [cQuestion]: null }))
      videoRef?.current?.pause()
      videoRef?.current?.currentTime && (videoRef.current.currentTime = 0);
    }
  }

  const onPrevious = () => {
    cQuestion > 1 && setCQuestion(prev => prev - 1);
  }

  const onNext = () => {
    cQuestion < QUESTIONS?.length && setCQuestion(prev => prev + 1);
  }

  const onSpace = () => {
    setAnswer(prev => {
      const percent = +(controlRef?.current?.progressBar?.style?.width || '')?.replace('%', '')
      const answerTime = formatTime((percent * playTime?.duration) / 100);
      const rIdx = result.findIndex(item => answerTime >= item?.start && answerTime <= item?.end);
      return ({
        ...prev,
        [cQuestion]: {
          time: answerTime,
          point: rIdx >= 0 ? rIdx + 1 : 0
        }
      });
    });
  }

  const onSuggest = () => {
    // TODO
  }

  const onSelectQuestion = (idx) => {
    setCQuestion(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    setStatus(NOT_START);
    setPlayTime({ duration: 0, start: 0 });
    setResult(getResult(cQuestionInfo))
  }, [cQuestion])

  return (
    <div className='simulation-page'>
      <div key={cQuestionInfo?.title} className='content-left'>
        <div className='title'>
          Câu {cQuestion}: {QUESTIONS?.[cQuestion - 1]?.title}
        </div>
        <Spin tip="Loading..." spinning={loading}>
          <video
            ref={videoRef}
            // poster="https://taplai.com/img/banner-hoc-120-tinh-huong-mo-phong.png"
            onLoadStart={() => setLoading(true)}
            onLoadedData={e => {
              setPlayTime(prev => ({ ...prev, duration: formatTime(e?.target?.duration) }));
              setLoading(false);
            }}
          >
            <source src={getVideo(cQuestion)} type="video/mp4" />
          </video>
        </Spin>
        {!loading && isLoaded && (
          <>
            {cAnswer && (
              <div className='result-range'>
                <div
                  className='result-range-content'
                  style={{
                    width: `${formatTime((getStepTime(cQuestionInfo) * 100) / playTime?.duration) * RANGE}%`,
                    left: `${cQuestionInfo?.time_1 * 100 / playTime?.duration}%`
                  }}
                >
                  {[...Array(RANGE)].map((_, idx) => <div key={idx} />)}
                </div>
                <img
                  className='result-range-flag'
                  src={IMG_FLAG}
                  alt=''
                  style={{ left: `${cAnswer?.time * 100 / playTime?.duration}%` }}
                />
              </div>
            )}
            <Control
              ref={controlRef}
              status={status}
              playTime={playTime}
              cAnswer={cAnswer}
              onPlay={onPlay}
              onPause={onPause}
              onReplay={onReplay}
              disabled={!isLoaded}
            />
            {cAnswer && (
              <div className='result-score'>
                <div className='result-score-time'>
                  Thời gian: {cAnswer?.time}s
                </div>
                <div className='result-score-point'>
                  Điểm: <span>{cAnswer?.point}</span>
                </div>
                <Button
                  shape="primary"
                  size='medium'
                  icon={<InfoCircleOutlined />}
                  iconPosition='start'
                  onClick={onSuggest}
                  disabled
                >
                  Gợi ý
                </Button>
              </div>
            )}
            <div className='action'>
              <Button
                className='btn-prev'
                shape="default"
                size='large'
                icon={<LeftOutlined />}
                iconPosition='start'
                onClick={onPrevious}
                disabled={disablePrev}
              >
                Câu {cQuestion - 1}
              </Button>
              <Button
                className='btn-space'
                shape="primary"
                size='large'
                onClick={onSpace}
                disabled={disableSpace}
              >
                SPACE
              </Button>
              <Button
                className='btn-next'
                shape="default"
                size='large'
                icon={<RightOutlined />}
                iconPosition='end'
                onClick={onNext}
                disabled={disableNext}
              >
                Câu {cQuestion + 1}
              </Button>
            </div>
            <p>đáp án đúng từ giây {formatTime(+cQuestionInfo.time_1)} đến giây {formatTime(+cQuestionInfo.time_2)}</p>
          </>
        )}
      </div>
      <div className='content-right'>
        <p className='total-score'>
          Tổng điểm: <span>{totalScore}</span>
        </p>
        <div className='question'>
          {QUESTIONS.map((_, idx) => {
            const qIdx = idx + 1;
            const qResult = answer?.[qIdx];
            const chapIdx = CHAPTERS?.findIndex(c => qIdx === c?.start)
            const chap = CHAPTERS?.[chapIdx]
            return (
              <>
                {chap && (
                  <div key={chap?.title} className='chapter-item'>
                    Chương {chapIdx + 1}: {chap?.title}
                  </div>
                )}
                <div
                  key={idx}
                  className={clsx(
                    'question-item',
                    qResult ? 'answered' : qIdx === cQuestion ? 'active' : 'not-start'
                  )}
                  onClick={() => onSelectQuestion(qIdx)}
                >
                  Câu {qIdx}
                  {qResult && <span>{qResult?.point}</span>}
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Simulation
