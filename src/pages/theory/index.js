import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { CHAPTERS, THEORY_QUESTIONS } from './utils';

import './style.scss';
import { isArray } from 'lodash';

const QuestionItem = ({ order, cOrder, answered, onClick }) => {
  const rItem = answered?.[order];
  return (
    <div
      key={order}
      className={clsx(
        'question-list-item',
        order === cOrder ? 'active' : (rItem ? (rItem?.isCorrect ? 'correct' : 'incorrect') : 'normal')
      )}
      onClick={onClick}
    >
      {order}
    </div>
  );
}

const Theory = () => {
  const [chapter, setChapter] = useState(0);
  const [order, setOrder] = useState(1);
  const [answered, setAnswered] = useState({});

  const cChapter = CHAPTERS?.[chapter];
  const cChapterQuestions = cChapter?.questions;
  const isParalysis = isArray(cChapterQuestions)
  const paralysisIndex = isParalysis ? cChapterQuestions?.findIndex(item => item === order) : -1;

  const cQuestion = THEORY_QUESTIONS?.[order - 1];
  const cResult = answered?.[order];

  const disablePrev = isParalysis ? paralysisIndex <= 0 : order <= 1;
  const disableNext = isParalysis ? paralysisIndex >= cChapterQuestions?.length : order >= THEORY_QUESTIONS?.length;

  const onAnswer = (idx) => {
    setAnswered(prev => ({
      ...prev,
      [order]: {
        answered: idx,
        isCorrect: cQuestion?.correctIdx === idx
      }
    }))
  }

  const onPrevious = () => {
    if (order > 1) {
      setOrder(prev => isParalysis ? cChapterQuestions?.[paralysisIndex - 1] : prev - 1);
    }
  }

  const onNext = () => {
    if (order < THEORY_QUESTIONS?.length) {
      setOrder(prev => isParalysis ? cChapterQuestions?.[paralysisIndex + 1] : prev + 1);
    }
  }

  useEffect(() => {
    setOrder(isParalysis ? cChapterQuestions?.[0] : cChapter?.start);
    setAnswered({});
  }, [chapter])

  return (
    <div className='theory-page'>
      <div className='chapter'>
        {CHAPTERS.map((_, cIdx) => (
          <Button
            key={cIdx}
            type={chapter === cIdx ? "primary" : 'default'}
            size='large'
            onClick={() => setChapter(cIdx)}
          >
            Chương {cIdx + 1}
          </Button>
        ))}
      </div>
      <div className='content-left'>
        <div
          className='title'
          dangerouslySetInnerHTML={{ __html: `${isParalysis ? cChapterQuestions?.length : cChapterQuestions + 1} câu về ${cChapter?.title}` }}
        />
        <div className='question-list'>
          {isParalysis
            ? cChapterQuestions.map((q) => {
              const qOrder = q;
              return (
                <QuestionItem
                  order={q}
                  cOrder={order}
                  answered={answered}
                  onClick={() => setOrder(qOrder)}
                />
              );
            })
            : THEORY_QUESTIONS.slice(cChapter?.start - 1, cChapter?.start + cChapterQuestions).map((_, idx) => {
              const qOrder = idx + cChapter?.start;
              return (
                <QuestionItem
                  order={qOrder}
                  cOrder={order}
                  answered={answered}
                  onClick={() => setOrder(qOrder)}
                />
              );
            })}
        </div>
      </div>
      <div className='content-right'>
        <div className='question'>
          <p className='question-title'>
            Câu {order}: {cQuestion?.title}
          </p>
          {cQuestion?.img && (
            <img className='question-image' src={cQuestion?.img} alt="" />
          )}
          <div className='question-answer'>
            {cQuestion?.answers.map((a, aIdx) => {
              const isAnswered = cResult?.answered === aIdx;
              return (
                <div
                  key={aIdx}
                  className={clsx(
                    'question-answer-item',
                    isAnswered && (cResult?.isCorrect ? 'correct' : 'incorrect')
                  )}
                  onClick={() => onAnswer(aIdx)}
                >
                  <p>
                    {aIdx + 1}. {a}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        {!!cResult && cQuestion?.explanation && (
          <p className='explanation'>
            <b>Giải thích:</b> {cQuestion?.explanation}
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
            Câu {isParalysis ? cChapterQuestions?.[paralysisIndex - 1] : order - 1}
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
            Câu {isParalysis ? cChapterQuestions?.[paralysisIndex + 1] : order + 1}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Theory
