
const typeChart = [
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.2, 1.0, 1.0],
    [1.0, 0.5, 0.5, 2.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 1.0],
    [1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0],
    [1.0, 0.5, 2.0, 0.5, 0.5, 0.5, 1.0, 2.0, 2.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0],
    [1.0, 1.0, 2.0, 0.5, 1.0, 2.0, 1.0, 1.0, 0.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0],
    [1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 2.0, 0.5, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [2.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 2.0, 2.0, 0.5, 0.5, 0.5, 2.0, 0.2, 1.0, 0.5],
    [1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 2.0, 1.0, 0.5, 2.0, 0.2, 1.0, 2.0, 1.0, 2.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0],
    [1.0, 0.5, 0.5, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0],
    [1.0, 0.5, 0.5, 2.0, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0],
    [1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.2, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0],
    [1.0, 0.5, 1.0, 2.0, 1.0, 0.5, 0.5, 1.0, 1.0, 0.5, 1.0, 0.5, 1.0, 2.0, 2.0, 0.5, 1.0, 0.5],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 0.5, 0.2, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 2.0, 1.0, 0.5],
    [0.2, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 2.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.2],
    [1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 2.0, 1.0],
    [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]

]
const stats = [
    [ 80, 1.2, 1.0, 4],
    [ 90, 1.0, 0.8, 5],
    [100, 0.8, 1.2, 2],
    [100, 1.0, 1.0, 3]
]
const types = ["Normal", "Fire", "Water", "Grass", "Electric", "Flying", "Fighting", "Rock", "Ground",
               "Steel", "Ice", "Poison", "Bug", "Psychic", "Dark", "Ghost", "Dragon", "Fairy"];
const dmgInitial = 20;

let player = {
    name: "Player",
    type: 18,
    build: 4,
    hp:  stats[3][0],
    atk: stats[3][1],
    def: stats[3][2],
    spd: stats[3][3]
}
let goliath = {
    type: 14,
    hp:  200,
    atk: 0.5,
    def: 1.2,
    spd: 1
}
let your_turn = false;
let whose_turn = "The enemy ";
let current_mon = goliath;
let opp_mon = player;
let winner = "";

function createPKMN(n, t, b) {
    player.name  = n;
    player.type  = t;
    player.build = b;
    player.hp  = stats[b][0];
    player.atk = stats[b][1];
    player.def = stats[b][2];
    player.spd = stats[b][3];

/*    enemy_mon.type  = Math.floor(Math.random() * 18);
    enemy_mon.build = Math.floor(Math.random() * 4);
    enemy_mon.hp  = stats[enemy_mon.build][0],
    enemy_mon.atk = stats[enemy_mon.build][1],
    enemy_mon.def = stats[enemy_mon.build][2],
    enemy_mon.spd = stats[enemy_mon.build][3] */
}
function calcDamage(t1, t2, a, d) {
    return Math.floor(dmgInitial * typeChart[t1][t2] * a / d);
}
function damage(d) {
    opp_mon.hp -= d;
    if (opp_mon.hp <= 0) {
        winner = whose_turn;
    }
    return (whose_turn + "dealt " + dmg + " damage!");
}
function use_howl() {
    if (current_mon.atk < 2) {
        current_mon.atk += 0.2;
        return whose_turn + "Pokémon raised its attack stat!";
    } return whose_turn + "Pokémon's attack stat is already too high!";
}
function use_harden() {
    if (current_mon.def < 2) {
        current_mon.def += 0.2;
        return whose_turn + "Pokémon raised its defense stat!";
    } return whose_turn + "Pokémon's defense stat is already too high!";
}

function calcOrder() {
    if (player.spd > goliath.spd) {your_turn = true;}
}
function nextTurn() {
    your_turn = !your_turn;
    if(whose_turn == "The enemy ") {
        whose_turn = "Your ";
        current_mon = player;
        opp_mon = goliath;
    } else {
        whose_turn = "The enemy ";
        current_mon = goliath;
        opp_mon = player;
    }
}
function displayTurn() {
    if (your_turn) {
        return "It's your turn! Select your move!";
    } else {
        return "It's the enemy's turn!";
    }
}

function battle() {
        
    let name = document.getElementById("name");
    let type     = document.getElementById("type");
    let build    = document.getElementById("build");
    let fight    = document.getElementById("fight");
    let narrator = document.getElementById("narrator");

    let user_type  = document.getElementById("user_type");
    let user_hp    = document.getElementById("user_hp");
    let enemy_type = document.getElementById("enemy_type");
    let enemy_hp   = document.getElementById("enemy_hp");

    let attack = document.getElementById("attack");
    let punch  = document.getElementById("punch");
    let howl   = document.getElementById("howl");
    let harden = document.getElementById("harden");
    let end    = document.getElementById("end");

    createPKMN(name.value, type.value, build.value);
    calcOrder();
    narrator.innerHTML = "Fight!";
/*
    attack.addEventListener("click", damage(calcDamage(player_mon.type, enemy_mon.type, player_mon.atk, enemy_mon.def), narrator.innerHTML));
    punch.addEventListener("click", damage(calcDamage(18, enemy_mon.type, player_mon.atk, enemy_mon.def), narrator.innerHTML));
    howl.addEventListener("click", howl(narrator.innerHTML));
    harden.addEventListener("click", harden(narrator.innerHTML));

    user_type.innerHTML  = types[player.type];
    user_hp.innerHTML    = player.hp;
    enemy_type.innerHTML = types[goliath.type];
    enemy_hp.innerHTML   = goliath.hp;

    while((player.hp >= 0) && (goliath.hp >= 0)) {
        while (your_turn) {
            displayTurn(your_turn, narrator.innerHTML);
            user_hp.innerHTML = player.hp;
            nextTurn();
        }

        setTimeout(displayTurn(your_turn, narrator.innerHTML), 4000);

        randMove = Math.floor(Math.random() * 10);
        if ((randMove >= 0) && (randMove <= 2)) {
            damage(calcDamage(goliath.type, player.type, goliath.atk, player.def), narrator.innerHTML);
        } else if ((randMove >= 3) && (randMove <= 5)) {
            damage(calcDamage(18, player.type, goliath.atk, player.def), narrator.innerHTML);
        } else if ((randMove == 6) || (randMove == 7)) {
            use_howl(narrator.innerHTML);
        } else {
            use_harden(narrator.innerHTML);
        }
        enemy_hp.innerHTML   = enemy_mon.hp;
        nextTurn();
    }
    end.innerHTML = winner + "Pokémon wins!"; */
}