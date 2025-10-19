class SoundManager {
    constructor() {
        this.sounds = {};
        this.audioContext = null;
        this.backgroundMusic = null;
        this.correctAnswerMusic = null;
        this.isMusicPlaying = false;
        this.isCorrectMusicPlaying = false;
        this.init();
    }

    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initSounds();
            this.initBackgroundMusic();
            this.initCorrectAnswerMusic();
        } catch (e) {
            console.log('Web Audio API не поддерживается');
        }
    }

    initCorrectAnswerMusic() {
        this.correctAnswerMusic = new Audio('./correct-sound.mp3');
        this.correctAnswerMusic.volume = 0.4;
        this.correctAnswerMusic.preload = 'auto';
        
        this.correctAnswerMusic.addEventListener('error', (e) => {
            console.log('Ошибка загрузки музыки для правильных ответов:', e);
        });
        
        this.correctAnswerMusic.addEventListener('canplaythrough', () => {
            console.log('Музыка для правильных ответов готова к воспроизведению');
        });
    }

    playCorrectAnswerMusic() {
        if (this.correctAnswerMusic) {
            try {
                this.correctAnswerMusic.currentTime = 0;
                this.correctAnswerMusic.play().catch(e => {
                    console.log('Не удалось воспроизвести музыку:', e);
                });
                this.isCorrectMusicPlaying = true;
                
                setTimeout(() => {
                    this.stopCorrectAnswerMusic();
                }, 5000);
            } catch (e) {
                console.log('Ошибка воспроизведения музыки:', e);
            }
        }
    }

    stopCorrectAnswerMusic() {
        if (this.correctAnswerMusic) {
            this.correctAnswerMusic.pause();
            this.correctAnswerMusic.currentTime = 0;
            this.isCorrectMusicPlaying = false;
        }
    }

    stopAllMusic() {
        this.stopBackgroundMusic();
        this.stopCorrectAnswerMusic();
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
        this.backgroundMusic = {
            play: () => {
                if (!this.audioContext || this.isMusicPlaying) return;
                
                this.isMusicPlaying = true;
                const now = this.audioContext.currentTime;
                
                const notes = [523.25, 659.25, 783.99, 1046.50];
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
            oscillator.frequency.setValueAtTime(523.25, now);
            oscillator.frequency.setValueAtTime(659.25, now + 0.15);
            oscillator.frequency.setValueAtTime(783.99, now + 0.3);
            oscillator.frequency.setValueAtTime(1046.50, now + 0.45);
            oscillator.frequency.setValueAtTime(1318.51, now + 0.6);
            
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
            const notes = [523.25, 659.25, 783.99, 1046.50];
            
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
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }
            this.sounds[soundName].play();
        }
    }

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

    playVictoryMusic() {
        this.playBackgroundMusic();
        this.play('victory');
    }
}

const soundManager = new SoundManager();


