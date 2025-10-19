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
        // ПРОБУЕМ ЗАГРУЗИТЬ ФАЙЛ
        this.correctAnswerMusic = new Audio('correct-sound.mp3');
        this.correctAnswerMusic.volume = 0.6;
        
        this.correctAnswerMusic.addEventListener('error', (e) => {
            console.log('❌ Файл correct-sound.mp3 не найден, используем generated sound');
            this.createFallbackMusic();
        });
        
        this.correctAnswerMusic.addEventListener('canplaythrough', () => {
            console.log('✅ Файл correct-sound.mp3 готов к воспроизведению');
        });
        
        // Проверяем через секунду, загрузился ли файл
        setTimeout(() => {
            if (this.correctAnswerMusic.readyState === 0) {
                console.log('⚠️ Файл не загружается, переключаемся на generated sound');
                this.createFallbackMusic();
            }
        }, 1000);
    }

    createFallbackMusic() {
        // СОЗДАЕМ РЕЗЕРВНУЮ МУЗЫКУ ЧЕРЕЗ WEB AUDIO
        this.correctAnswerMusic = {
            play: () => {
                if (!this.audioContext || this.isCorrectMusicPlaying) return;
                
                console.log('🎵 Играем generated музыку победы!');
                this.isCorrectMusicPlaying = true;
                const now = this.audioContext.currentTime;
                
                // Красивая победная мелодия
                const melody = [
                    {freq: 523.25, time: 0},    // C5
                    {freq: 659.25, time: 0.3},  // E5
                    {freq: 783.99, time: 0.6},  // G5
                    {freq: 1046.50, time: 0.9}, // C6
                    {freq: 783.99, time: 1.2},  // G5
                    {freq: 1046.50, time: 1.5}, // C6
                    {freq: 1174.66, time: 1.8}, // D6
                    {freq: 1318.51, time: 2.1}  // E6
                ];
                
                melody.forEach(note => {
                    setTimeout(() => {
                        if (!this.isCorrectMusicPlaying) return;
                        
                        const oscillator = this.audioContext.createOscillator();
                        const gainNode = this.audioContext.createGain();
                        
                        oscillator.connect(gainNode);
                        gainNode.connect(this.audioContext.destination);
                        
                        oscillator.type = 'sine';
                        oscillator.frequency.setValueAtTime(note.freq, now);
                        
                        // Плавное появление и затухание
                        gainNode.gain.setValueAtTime(0, now);
                        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
                        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
                        
                        oscillator.start(now + note.time);
                        oscillator.stop(now + note.time + 0.5);
                        
                    }, note.time * 1000);
                });
                
                setTimeout(() => {
                    this.isCorrectMusicPlaying = false;
                }, 3000);
            },
            pause: () => {
                this.isCorrectMusicPlaying = false;
            }
        };
    }

    playCorrectAnswerMusic() {
        console.log('🔊 Воспроизводим музыку победы...');
        
        if (typeof this.correctAnswerMusic.play === 'function') {
            // Если это generated music
            this.correctAnswerMusic.play();
        } else {
            // Если это Audio object
            try {
                this.correctAnswerMusic.currentTime = 0;
                this.correctAnswerMusic.play().then(() => {
                    console.log('✅ Файловая музыка начала играть!');
                    this.isCorrectMusicPlaying = true;
                    
                    setTimeout(() => {
                        this.stopCorrectAnswerMusic();
                    }, 5000);
                    
                }).catch(e => {
                    console.log('❌ Ошибка воспроизведения файла:', e);
                    // Пробуем generated music как запасной вариант
                    this.createFallbackMusic();
                    this.correctAnswerMusic.play();
                });
            } catch (e) {
                console.log('❌ Ошибка в playCorrectAnswerMusic:', e);
            }
        }
    }

    stopCorrectAnswerMusic() {
        if (this.correctAnswerMusic) {
            if (typeof this.correctAnswerMusic.pause === 'function') {
                this.correctAnswerMusic.pause();
                if (this.correctAnswerMusic.currentTime !== undefined) {
                    this.correctAnswerMusic.currentTime = 0;
                }
            }
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
