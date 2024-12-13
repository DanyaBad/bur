"use client"; 

import styles from '@/styles/create.module.css'; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const GiftSurvey = () => {
  const router = useRouter(); 

  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [recipientType, setRecipientType] = useState('');
  const [hobby, setHobby] = useState('');
  const [giftType, setGiftType] = useState('');
  const [spendingTime, setSpendingTime] = useState('');
  const [moneyotday, setMoneyOtday] = useState('');

  
  const handleRecipientChange = (e) => setRecipientType(e.target.value);
  const handleHobbyChange = (e) => setHobby(e.target.value);
  const handleGiftTypeChange = (e) => setGiftType(e.target.value);
  const handleSpendingTimeChange = (e) => setSpendingTime(e.target.value);
  const handleMoneyOtdayChange = (e) => setMoneyOtday(e.target.value);

  
  const goToServices = () => {
    router.push(`/services?recipient=${recipientType}&money=${moneyotday}`);
  };

 
  const goToHome = () => router.push('/');

  
  const questions = [
    {
      question: "Какому человекe вы хотите подобрать подарок?",
      options: [
        { value: 'семья/родственник', label: 'семья/родственник', handler: handleRecipientChange },
        { value: 'друг/коллега', label: 'Друг', handler: handleRecipientChange },
      ],
    },
    {
      question: "Какое хобби у человека?",
      options: [
        { value: 'Спорт', label: 'Спорт', handler: handleHobbyChange },
        { value: 'Ремесло', label: 'Ремесло', handler: handleHobbyChange },
        { value: 'Путешествия', label: 'Путешествия', handler: handleHobbyChange }
      ],
    },
    {
      question: "Какой тип подарка больше нравится?",
      options: [
        { value: 'Эмоциональный', label: 'Эмоциональный (впечатления)', handler: handleGiftTypeChange },
        { value: 'Практичный', label: 'Практичный (материальные вещи)', handler: handleGiftTypeChange },
        { value: 'Подарочные сертификаты', label: 'Подарочные сертификаты', handler: handleGiftTypeChange }
      ],
    },
    {
      question: "Какой способ времяпрепровождения предпочитает?",
      options: [
        { value: 'На свежем воздухе', label: 'На свежем воздухе', handler: handleSpendingTimeChange },
        { value: 'У телевизора/компьютера', label: 'У телевизора/компьютера', handler: handleSpendingTimeChange },
        { value: 'В кругу друзей/семьи', label: 'В кругу друзей/семьи', handler: handleSpendingTimeChange }
      ],
    },
    {
      question: "Сколько будет стоить подарок?",
      options: [
        { value: 'Недорого', label: 'Недорого', handler: handleMoneyOtdayChange },
        { value: 'Среднебюджетный', label: 'Среднебюджетный', handler: handleMoneyOtdayChange },
        { value: 'Дорогой', label: 'Дорогой', handler: handleMoneyOtdayChange }
      ],
    },
  ];

  return (
    <div className={styles.surveyContainer}>
      {/* "Return to Home" Button */}
      <button className={styles.returnHomeButton} onClick={goToHome}>Вернуться на главную</button>

      <h1 className={styles.heading}>Опросник для подбора подарка</h1>

      {currentQuestion < questions.length ? (
        <div className={styles.questionContainer}>
          <h2 className={styles.heading}>{questions[currentQuestion].question}</h2>
          <form>
            <div className={styles.optionContainer}>
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option.value}
                  className={`${styles.option} ${(
                    currentQuestion === 0 && recipientType === option.value ||
                    currentQuestion === 1 && hobby === option.value ||
                    currentQuestion === 2 && giftType === option.value ||
                    currentQuestion === 3 && spendingTime === option.value ||
                    currentQuestion === 4 && moneyotday === option.value
                  ) ? styles.optionSelected : ''}`}
                  onClick={() => {
                    option.handler({ target: { value: option.value } });
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
            <button
              type="button"
              className={styles.button}
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Далее
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2 className={styles.heading}>Мы подобрали для вас кое что {recipientType}:</h2>
          <button className={styles.createButton} onClick={goToServices}>Перейти к подаркам</button>
          <button className={styles.createButton} onClick={() => setCurrentQuestion(0)}>Сделать новый выбор</button>
        </div>
      )}
    </div>
  );
};

export default GiftSurvey;
