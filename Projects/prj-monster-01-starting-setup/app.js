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
            this.monsterHealth -= generateRandomAmount(5, 10);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= generateRandomAmount(8, 12);
            console.log(this.playerHealth + ' ' + this.monsterHealth);
        },
        specialAttackMonster() {
            this.roundsSinceSpecial = 0;
            this.monsterHealth -= generateRandomAmount(10, 25);
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
            this.attackPlayer();
        },
        surrender() {
            this.gameOver = true;
            this.winner = 'monster';
        },
        restartGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameOver = false;
            this.roundsSinceSpecial = 3;
        }
    }
});

app.mount('#game');