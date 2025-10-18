let currentState = {
    selectedTopicId: null,
    selectedLevel: null,
    currentQuestionIndex: null,
    correctAnswers: 0,
    totalAnswers: 0
};

const topicScreen = document.getElementById('topic-selection-screen');
const levelScreen = document.getElementById('level-selection-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Обработчики для кнопки "Закрыть" (крестик)
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', goToMainMenu);
    });

    // Обработчики клика для всех кнопок
    document.querySelectorAll('button').forEach(btn => {
        if (!btn.classList.contains('close-btn')) {
            btn.addEventListener('click', () => {
                soundManager.play('click');
            });
        }
    });

    // Показываем счет при начале игры
    document.getElementById('score').style.display = 'block';
}

function goToMainMenu() {
    soundManager.play('click');
    soundManager.stopBackgroundMusic(); 
    showScreen('topic-selection-screen');
}
document.querySelectorAll('.topic-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        currentState.selectedTopicId = parseInt(e.target.dataset.topicId);
        const topic = appData.topics.find(t => t.id === currentState.selectedTopicId);
        document.getElementById('selected-topic-name').textContent = topic.name;
        showScreen('level-selection-screen');
    });
});

document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        currentState.selectedLevel = parseInt(e.target.dataset.level);
        // Сброс счетчика при начале новой сессии
        currentState.correctAnswers = 0;
        currentState.totalAnswers = 0;
        updateScore();
        loadQuestion();
        showScreen('question-screen');
    });
});

function loadQuestion() {
    const topic = appData.topics.find(t => t.id === currentState.selectedTopicId);
    const questions = topic.levels[currentState.selectedLevel];

    if (!questions || questions.length === 0) {
        alert('В этой категории пока нет вопросов!');
        return;
    }

    currentState.currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[currentState.currentQuestionIndex];

    document.getElementById('current-topic-name').textContent = topic.name;
    document.getElementById('current-level').textContent = currentState.selectedLevel;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('answer-input').value = '';
    
    // Фокус на поле ввода
    document.getElementById('answer-input').focus();
    
    const input = document.getElementById('answer-input');
    input.style.animation = 'none';
    setTimeout(() => {
        input.style.animation = 'pulse 2s infinite';
    }, 10);

    // Убираем старые обработчики и добавляем новые
    const submitBtn = document.getElementById('submit-answer-btn');
    submitBtn.replaceWith(submitBtn.cloneNode(true));
    document.getElementById('submit-answer-btn').onclick = () => {
        const userAnswer = document.getElementById('answer-input').value.trim();
        if (userAnswer === '') {
            alert('Введите ответ!');
            return;
        }
        checkAnswer(userAnswer, question.answer);
    };
}

function checkAnswer(userAnswer, correctAnswer) {
    const isCorrect = userAnswer.toString().toLowerCase() === correctAnswer.toString().toLowerCase();
    
    currentState.totalAnswers++;
    if (isCorrect) {
        currentState.correctAnswers++;
        soundManager.play('correct');
        
        // Запускаем фейерверки и музыку в зависимости от серии
        if (currentState.correctAnswers >= 10) {
            createMegaFireworks();
            soundManager.playVictoryMusic(); // Победная музыка для серии 10+
        } else if (currentState.correctAnswers >= 5) {
            createFireworks();
            setTimeout(() => createFireworks(), 500);
            soundManager.playBackgroundMusic(); // Фоновая музыка для серии 5+
        } else if (currentState.correctAnswers >= 3) {
            createFireworks();
            soundManager.playBackgroundMusic(); // Фоновая музыка для серии 3+
        } else if (currentState.correctAnswers >= 2) {
            createMiniFireworks();
        } else {
            createMiniFireworks();
        }
        
        // Специальный звук для серии
        if (currentState.correctAnswers >= 3) {
            setTimeout(() => soundManager.play('success'), 300);
        }
    } else {
        soundManager.play('wrong');
        soundManager.stopBackgroundMusic(); // Останавливаем музыку при ошибке
        currentState.correctAnswers = 0; // Сбрасываем серию
    }
    
    updateScore();
    showScreen('result-screen');
    
    const resultMessage = document.getElementById('result-message');
    const correctAnswerElem = document.getElementById('correct-answer');
    
    if (isCorrect) {
        resultMessage.textContent = "Правильно! 🎉";
        resultMessage.className = 'success';
        resultMessage.style.animation = 'celebrate 0.8s ease-out';
        
        setTimeout(() => {
            resultMessage.style.animation = 'pulse 1s infinite';
        }, 800);
    } else {
        resultMessage.textContent = "Неправильно! ❌";
        resultMessage.className = 'error';
        resultMessage.style.animation = 'shake 0.5s ease-out';
    }
    
    correctAnswerElem.textContent = correctAnswer;
    correctAnswerElem.classList.add('floating');

    // Исправляем кнопку "Следующий пример"
    const nextBtn = document.getElementById('next-question-btn');
    nextBtn.replaceWith(nextBtn.cloneNode(true));
    document.getElementById('next-question-btn').onclick = () => {
        loadQuestion();
        showScreen('question-screen');
    };
}
function updateScore() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = `✅ ${currentState.correctAnswers} / ${currentState.totalAnswers}`;
        if (currentState.correctAnswers >= 3) {
            scoreElement.classList.add('streak-animation');
            setTimeout(() => {
                scoreElement.classList.remove('streak-animation');
            }, 1000);
        }
    }
}

// ФЕЙЕРВЕРКИ НА ВЕСЬ ЭКРАН
function createFireworks() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8c00', '#8a2be2', '#ff1493', '#00ff7f'];
    const container = document.body;
    
    // Создаем 6 фейерверков в случайных местах экрана
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            createFireworkAtPosition(x, y, 80, 15);
        }, i * 300);
    }
    
    soundManager.play('fireworks');
    setTimeout(() => soundManager.play('fireworks'), 300);
}

function createMiniFireworks() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const container = document.body;
    
    // Создаем 3 мини-фейерверка
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const x = 20 + Math.random() * 60;
            const y = 20 + Math.random() * 60;
            createFireworkAtPosition(x, y, 40, 8);
        }, i * 400);
    }
    
    soundManager.play('fireworks');
}

function createMegaFireworks() {
    const container = document.body;
    
    // Создаем мега-фейерверки во всех углах и центре
    const positions = [
        { x: 10, y: 10 },    // Левый верх
        { x: 90, y: 10 },    // Правый верх
        { x: 10, y: 90 },    // Левый низ
        { x: 90, y: 90 },    // Правый низ
        { x: 50, y: 50 },    // Центр
        { x: 25, y: 75 },    // Левый низ ближе к центру
        { x: 75, y: 25 }     // Правый верх ближе к центру
    ];
    
    positions.forEach((pos, index) => {
        setTimeout(() => {
            createFireworkAtPosition(pos.x, pos.y, 120, 25);
            
            // Добавляем большую вспышку для мега-фейерверков
            const flash = document.createElement('div');
            flash.style.cssText = `
                position: fixed;
                left: ${pos.x}%;
                top: ${pos.y}%;
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, 
                    #ff0000 0%, 
                    #ffff00 15%, 
                    #00ff00 30%, 
                    #00ffff 45%, 
                    #0000ff 60%, 
                    #ff00ff 75%, 
                    transparent 90%
                );
                border-radius: 50%;
                pointer-events: none;
                z-index: 10002;
                transform: translate(-50%, -50%);
                animation: megaFlash 2s ease-out forwards;
                opacity: 0;
            `;
            container.appendChild(flash);
            
            setTimeout(() => {
                if (flash.parentNode) flash.parentNode.removeChild(flash);
            }, 2000);
            
        }, index * 500);
    });
    
    // Мощные звуки
    soundManager.play('fireworks');
    setTimeout(() => soundManager.play('success'), 200);
    setTimeout(() => soundManager.play('fireworks'), 400);
    setTimeout(() => soundManager.play('success'), 600);
}

// Универсальная функция создания фейерверка в указанной позиции
function createFireworkAtPosition(x, y, particleCount = 60, maxSize = 20) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8c00', '#8a2be2'];
    const container = document.body;
    
    // Создаем частицы
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            
            const angle = (i / particleCount) * Math.PI * 2;
            const distance = 50 + Math.random() * 200;
            const size = 5 + Math.random() * maxSize;
            
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.3 ? '50%' : '2px'};
                pointer-events: none;
                z-index: 10000;
                left: ${x}%;
                top: ${y}%;
                transform: translate(-50%, -50%);
                animation: fireworkExplosion 1.5s ease-out forwards;
                opacity: 0;
                --tx: ${tx}px;
                --ty: ${ty}px;
                --rotation: ${Math.random() * 360}deg;
                --scale: ${0.5 + Math.random() * 0.5};
            `;
            
            container.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1500);
        }, i * 15);
    }
    
    // Центральная вспышка
    setTimeout(() => {
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            width: 80px;
            height: 80px;
            background: radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]} 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10001;
            left: ${x}%;
            top: ${y}%;
            transform: translate(-50%, -50%);
            animation: flashEffect 0.8s ease-out forwards;
            opacity: 0;
        `;
        
        container.appendChild(flash);
        
        setTimeout(() => {
            if (flash.parentNode) {
                flash.parentNode.removeChild(flash);
            }
        }, 800);
    }, 100);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const activeScreen = document.getElementById(screenId);
    activeScreen.classList.add('active');
    
    // Убираем все фейерверки при смене экрана
    document.querySelectorAll('.firework-particle, .firework-flash, .mega-firework, .wave').forEach(fw => fw.remove());
    
    // Останавливаем музыку если уходим с экрана вопроса
    if (screenId !== 'question-screen' && screenId !== 'result-screen') {
        soundManager.stopBackgroundMusic();
    }
    
    if (screenId === 'topic-selection-screen') {
        document.querySelectorAll('.topic-btn').forEach((btn, index) => {
            btn.style.animation = `bounceIn 0.6s ease-out ${index * 0.1}s both`;
        });
    }
}