function generateRandomAmount(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            roundsSinceSpecial: 3,
            fullHealth: true,
            gameOver: false,
            winner: null,
            logs: [],
        };
    },
    watch: {
        playerHealth(health) {
            this.fullHealth = (health === 100);
            if(health <= 0 && this.monsterHealth <= 0){
                this.gameOver = true;
                this.winner = 'draw';
            } else if (health <= 0 ) {
                this.gameOver = true;
                this.winner = 'monster';
            }
        },
        monsterHealth(health) {
            if(health <= 0 && this.playerHealth <= 0){
                this.gameOver = true;
                this.winner = 'draw';
            } else if (health <= 0 ) {
                this.gameOver = true;
                this.winner = 'player';
            }
        }
    },
    computed: {
        monsterHealthStyle() {
            return {width: this.monsterHealth + '%'};
        },
        playerHealthStyle() {
            return {width: this.playerHealth + '%'};
        },
        canSpecialAttack() {
            return !(this.roundsSinceSpecial < 3);
        },
    },
    methods: {
        attackMonster() {
            this.roundsSinceSpecial++;
            const attackValue = generateRandomAmount(5, 10);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = generateRandomAmount(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.roundsSinceSpecial = 0;
            const attackValue = generateRandomAmount(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'specialAttack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.roundsSinceSpecial++;
            const healValue = generateRandomAmount(8, 20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.gameOver = true;
            this.winner = 'monster';
            this.addLogMessage('player', 'surrender', null);
        },
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameOver = false;
            this.roundsSinceSpecial = 3;
            this.logs = [];
        },
        addLogMessage(who, what, value) {
            switch (who) {
                case 'player':
                    switch (what) {
                        case 'attack':
                            this.logs.unshift("You attacked the monster, dealing "+value+" damage.");
                            break;
                        case 'specialAttack':
                            this.logs.unshift("You special attacked the monster, dealing "+value+" damage.");
                            break;
                        case 'heal':
                            this.logs.unshift("You healed, gaining "+value+" health.");
                            break;
                        case 'surrender':
                            this.logs.unshift("You surrendered.");
                            break;
                    }
                    break;
                case 'monster':
                    this.logs.unshift("The monster attacked you, dealing "+value+" damage.");
                    break;
            }
        }
    }
});

app.mount('#game');