
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
const dmgInitial = 20;

let player_mon = {
    name: Player,
    type: 18,
    build: 4,
    hp:  stats[4][0],
    atk: stats[4][1],
    def: stats[4][2],
    spd: stats[4][3]
}
let enemy_mon = {
    type: 18,
    build: 4,
    hp:  stats[4][0],
    atk: stats[4][1],
    def: stats[4][2],
    spd: stats[4][3]
}
let your_turn = false;
function createMons(n, t, b) {
    player_mon.name  = n;
    player_mon.type  = t;
    player_mon.build = b;
    player_mon.hp  = stats[b][0];
    player_mon.atk = stats[b][1];
    player_mon.def = stats[b][2];
    player_mon.spd = stats[b][3];

    enemy_mon.type  = Math.floor(Math.random() * 18);
    enemy_mon.build = Math.floor(Math.random() * 4);
    enemy_mon.hp  = stats[enemy_mon.build][0],
    enemy_mon.atk = stats[enemy_mon.build][1],
    enemy_mon.def = stats[enemy_mon.build][2],
    enemy_mon.spd = stats[enemy_mon.build][3]
}
function calcDamage(t1, t2, a, d) {
    return dmgInitial * typeChart[t1][t2] * a * d;
}
function damage(d) {
    enemy_mon.hp -= d;
}
function howl() {
    if (player_mon.atk < 2) {
        player_mon.atk += 0.2;
    } else {
        return("Your Pokémon's attack stat is already too high!");
    } return("Your Pokémon raised its attack stat!");
}
function harden() {
    if (player_mon.def < 2) {
        player_mon.def += 0.2;
    } else {
        return("Your Pokémon's defense stat is already too high!");
    } return("Your Pokémon raised its defense stat!");
}

function calcOrder() {
    if (player_mon.spd > enemy_mon.spd) {your_turn = true;}
}
function nextTurn() {
    your_turn = !your_turn;
}
function displayTurn(t, l) {
    if (t) {
        l = "It's your turn! Select your move!";
    } else {
        l = "It's the enemy's turn!";
    }
}

function battle() {
    let name     = document.getElementById("name");
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

    temp_type  = type.options[type.selectedIndex].dataset.order;
    temp_build = build.options[build.selectedIndex].dataset.order;

    createMons(name.value, temp_type, temp_build);
    calcOrder();
    narrator.innerHTML = "Fight!";

    while((player_mon.hp >= 0) && (enemy_mon.hp >= 0)) {
        setTimeout(displayTurn(your_turn, narrator.innerHTML), 4000);
        if (your_turn) {
            
        }
    }
}