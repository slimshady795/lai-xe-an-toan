import React, { useMemo, useState } from 'react'

import { PREFIX_ANSWER, THEORY_QUESTIONS } from './utils';

import './style.scss';
import clsx from 'clsx';
import { CheckOutlined, CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Theory = () => {
  const [order, setOrder] = useState(1);
  const [result, setResult] = useState({});

  const question = THEORY_QUESTIONS?.[order - 1];
  const answers = question?.answers || [];
  const resultOrder = result?.[order];

  const disablePrev = order <= 1;
  const disableNext = order >= THEORY_QUESTIONS?.length;

  const onAnswer = (idx) => {
    setResult(prev => ({
      ...prev,
      [order]: {
        answer: idx,
        title: answers?.[idx],
        isCorrect: question?.correct === idx,
      }
    }));
  }

  const onPrevious = () => {
    order > 1 && setOrder(prev => prev - 1);
  }

  const onNext = () => {
    order < THEORY_QUESTIONS?.length && setOrder(prev => prev + 1);
  }


  const statistical = useMemo(() => {
    return Object.values(result).reduce((acc, curr) => {
      const key = curr?.isCorrect ? 'correct' : 'incorrect';
      return ({ ...acc, [key]: acc?.[key] + 1 })
    }, { correct: 0, incorrect: 0 })
  }, [result]);

  return (
    <div className='theory-page'>
      <div className='content-left'>
        <div className='question'>
          <p className='question-title'>
            Câu {order}: {question?.title}
          </p>
          <div className='question-answer'>
            {question?.answers.map((a, aIdx) => {
              const isAnswered = resultOrder?.answer === aIdx;
              return (
                <div
                  key={aIdx}
                  className={clsx(
                    'question-answer-item',
                    isAnswered && (resultOrder?.isCorrect ? 'correct' : 'incorrect')
                  )}
                  onClick={() => onAnswer(aIdx)}
                >
                  {isAnswered && (
                    resultOrder?.isCorrect ? <CheckOutlined /> : <CloseOutlined />
                  )}
                  <p>
                    {PREFIX_ANSWER?.[aIdx]} - {a}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        {resultOrder && (
          <p className='explanation'>
            <b>Giải thích:</b> {question?.explanation}
          </p>
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
            Câu {order - 1}
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
            Câu {order + 1}
          </Button>
        </div>
      </div>
      <div className='content-right'>
        <div className='statistical'>
          <p className='statistical-title'>Đã trả lời: {Object.keys(result)?.length} câu</p>
          <div className='statistical-answer'>
            <div className='correct'>
              <CheckOutlined />
              <span>{statistical?.correct}</span>
            </div>
            -
            <div className='incorrect'>
              <CloseOutlined />
              <span>{statistical?.incorrect}</span>
            </div>
          </div>
        </div>
        <div className='question-list'>
          {THEORY_QUESTIONS.map((_, qIdx) => {
            const qOrder = qIdx + 1;
            const rItem = result?.[qOrder];
            return (
              <div
                key={qIdx}
                className={clsx(
                  'question-list-item',
                  qOrder === order ? 'active' : (rItem ? (rItem?.isCorrect ? 'correct' : 'incorrect') : 'normal')
                )}
                onClick={() => setOrder(qOrder)}
              >
                {qOrder}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Theory
