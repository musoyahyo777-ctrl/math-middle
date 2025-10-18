class SoundManager {
    constructor() {
        this.sounds = {};
        this.audioContext = null;
        this.backgroundMusic = null;
        this.isMusicPlaying = false;
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initSounds();
            this.initBackgroundMusic();
        } catch (e) {
            console.log('Web Audio API не поддерживается');
        }
    }

    initSounds() {
        this.sounds = {
            correct: this.createCorrectSound(),
            wrong: this.createWrongSound(),
            click: this.createClickSound(),
            fireworks: this.createFireworksSound(),
            success: this.createSuccessSound(),
            victory: this.createVictorySound()
        };
    }

    initBackgroundMusic() {
        // Создаем простую мелодию для фона
        this.backgroundMusic = {
            play: () => {
                if (!this.audioContext || this.isMusicPlaying) return;
                
                this.isMusicPlaying = true;
                const now = this.audioContext.currentTime;
                
                // Создаем несколько осцилляторов для гармонии
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
                const durations = [0.3, 0.4, 0.5, 0.6];
                
                notes.forEach((freq, index) => {
                    setTimeout(() => {
                        if (!this.isMusicPlaying) return;
                        
                        const oscillator = this.audioContext.createOscillator();
                        const gainNode = this.audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(this.audioContext.destination);
                        
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(freq, now);
                        
                        gainNode.gain.setValueAtTime(0.1, now);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, now + durations[index]);
                        
                        oscillator.start(now);
                        oscillator.stop(now + durations[index]);
                        
                    }, index * 200);
                });
                
                // Повторяем мелодию через 2 секунды
                setTimeout(() => {
                    if (this.isMusicPlaying) {
                        this.backgroundMusic.play();
                    }
                }, 2000);
            },
            stop: () => {
                this.isMusicPlaying = false;
            }
        };
    }

    createCorrectSound() {
        return { play: () => {
            if (!this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, now);
            oscillator.frequency.setValueAtTime(659.25, now + 0.1);
            oscillator.frequency.setValueAtTime(783.99, now + 0.2);
            
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            
            oscillator.start(now);
            oscillator.stop(now + 0.5);
        }};
    }

    createWrongSound() {
        return { play: () => {
            if (!this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(220, now);
            oscillator.frequency.setValueAtTime(196, now + 0.2);
            
            gainNode.gain.setValueAtTime(0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            
            oscillator.start(now);
            oscillator.stop(now + 0.4);
        }};
    }

    createClickSound() {
        return { play: () => {
            if (!this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, now);
            
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            
            oscillator.start(now);
            oscillator.stop(now + 0.1);
        }};
    }

    createFireworksSound() {
        return { play: () => {
            if (!this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            
            // Создаем несколько взрывов для эффекта фейерверка
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    this.createFireworkExplosion(now + i * 0.2);
                }, i * 200);
            }
        }};
    }

    createFireworkExplosion(startTime) {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Начальная высокая частота, затем резкое падение
        oscillator.frequency.setValueAtTime(1200, startTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, startTime + 0.5);
        
        filter.frequency.setValueAtTime(1000, startTime);
        filter.frequency.exponentialRampToValueAtTime(200, startTime + 0.3);
        
        gainNode.gain.setValueAtTime(0.4, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.8);
    }

    createSuccessSound() {
        return { play: () => {
            if (!this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.type = 'triangle';
            // Победная мелодия
            oscillator.frequency.setValueAtTime(523.25, now); // C5
            oscillator.frequency.setValueAtTime(659.25, now + 0.15); // E5
            oscillator.frequency.setValueAtTime(783.99, now + 0.3); // G5
            oscillator.frequency.setValueAtTime(1046.50, now + 0.45); // C6
            oscillator.frequency.setValueAtTime(1318.51, now + 0.6); // E6
            
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1);
            
            oscillator.start(now);
            oscillator.stop(now + 1);
        }};
    }

    createVictorySound() {
        return { play: () => {
            if (!this.audioContext) return;
            
            const now = this.audioContext.currentTime;
            // Победный аккорд
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            
            notes.forEach(freq => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(freq, now);
                
                gainNode.gain.setValueAtTime(0.2, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
                
                oscillator.start(now);
                oscillator.stop(now + 1.5);
            });
        }};
    }

    play(soundName) {
        if (this.sounds[soundName] && this.audioContext) {
            // Возобновляем контекст если он приостановлен
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
            this.sounds[soundName].play();
        }
    }

    // Методы для фоновой музыки
    playBackgroundMusic() {
        if (this.backgroundMusic && !this.isMusicPlaying) {
            this.backgroundMusic.play();
        }
    }

    stopBackgroundMusic() {
        if (this.backgroundMusic) {
            this.backgroundMusic.stop();
        }
    }

    // Метод для победной музыки при длинной серии
    playVictoryMusic() {
        this.playBackgroundMusic();
        this.play('victory');
    }
}

const soundManager = new SoundManager();