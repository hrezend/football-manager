//Images Enemies
let imagemMenu;
let imagemInstructions;
let imagemItems;
let imagemLoki;
let imagemEvilFanatic;
let imagemNidhoggers;
let imagemFacewoormQueen;
let imagemLordOfDeath;
let imagemPyuriel;
let imagemDaehyon;
let imagemFallenBishop;
let imagemHatii;
let imagemKades;
let imagemGloomUnderNight;
let imagemMemoryOfThanatos;
let imagemStormyKnight;
let imagemValkyrieRandgris;
let imagemNaghtSieger;
let imagemAqua3;
let imagemAgni3;
let imagemEddga;
let imagemMaya;
let imagemKtullanux;

//Images Scenes
let imagemSetupOne;
let imagemSetupTwoTree;
let imagemSetupTwoBack;
let imagemSetupTwoVegetation;
let imagemSetupTwoAir;
let imagemSetupFour;
let imagemSetupThreeFront;
let imagemSetupThreeBack;
//Instancias
let cenario;
let scene_two_tree;
let scene_two_vegetation;
let scene_two_back;
let scene_two_air;
let scene_three_back;
let scene_three_front;
let loki;
let pontuacao;            
//Efeitos Sonoros
let soundProntera;
let soundIce;
let soundFlorest;
let soundMorocc;
let soundMenu;
let soundInstructions;
let soundJump;
let soundAttack;
let soundDamage;
let soundGameOver;
let soundCollect;
//Fonts
let fontGame;
//Helper Functions
let imagemLife;
let life;
let bonus;
let delay_music;
let buttonMenuToFaseOne;
let buttonFaseOneToFaseTwo;
let buttonFaseTwoToFaseThree;
let buttonFaseThreeToFaseFour;
let cenas;
let cenaAtual = 'menu';
let randomEnemy;
let enemy_time;
const enemies = [];


//Items
const matriz_items = [
    //[157, 0],
    [370, 0],
    //[260, 0],
    //[475, 0],
    //[580, 0]
];

//Hero do Jogo
const matriz_loki = [
    [700, 0],
    [600, 0],
    [500, 0],
    [400, 0],
    [300, 0],
    [200, 0],
    [100, 0],
    [0, 0],
];

//Boss do jogo
const matriz_naght_sieger = [
    [0, 0],
    [235, 0],
    [465, 0],
    [705, 0],
];

//Mob's
const matriz_ktullanux = [
    [0, 0],
    [170, 0],
    [340, 0],
    [515, 0],
    [690, 0],
    [855, 0],
    [1030, 0],
];

const matriz_eddga = [
    [0, 0],
    [102, 0],
    [200, 0],
    [300, 0],
    [400, 0],
    [498, 0],
];

const matriz_maya = [
    [0, 0],
    [173, 0],
    [346, 0],
    [514, 0],
    [680, 0],
    [842, 0],
];

const matriz_agni3 = [
    [0, 0],
    [92, 0],
    [188, 0],
    [282, 0],
    [378, 0],
    [467, 0],
];

const matriz_aqua3 = [
    [0, 0],
    [92, 0],
    [181, 0],
    [282, 0],
    [373, 0],
    [470, 0],
    [566, 0],
    [660, 0],
];

const matriz_evil_fanatic = [
    [0, 0],
    [248, 0],
    [494, 0],
    [740, 0],
    [988, 0],
    [1244, 0],
];

const matriz_faceworm_queen = [
    [0, 0],
    [205, 0],
    [405, 0],
    [600, 0],
    [800, 0],
    [1010, 0],
    [1205, 0],
    [1415, 0],
];

const matriz_lord_of_death = [
    [0, 0],
    [205, 0],
    [405, 0],
    [605, 0],
    [805, 0],
    [1005, 0],
    [1205, 0],
    [1405, 0],
];

const matriz_pyuriel = [
    [0,0],
    [155, 0],
    [315, 0],
    [460, 0],
    [605, 0],
    [755, 0],
];

const matriz_daehyon = [
    [0,0],
    [120, 0],
    [240, 0],
    [360, 0],
    [480, 0],
    [600, 0],
];

const matriz_nidhoggers = [
    [0, 0],
    [188, 0],
    [365, 0],
    [565, 0],
    [755, 0],
    [945, 0],
    [1135, 0],
];

const matriz_fallen_bishop = [
    [0, 0],
    [105, 0],
    [210, 0],
    [325, 0],
    [445, 0],
    [565, 0],
    [670, 0],   
];

const matriz_gloom_under_night = [
    [0,0],
    [125, 0],
    [250, 0],
    [365, 0],
    [485, 0],
    [605, 0],
    [725, 0],
    [850, 0],
];

const matriz_hatii = [
    [0, 0],
    [140, 0],
    [290, 0],
    [440, 0],
    [585, 0],
    [735, 0],
];

const matriz_kades = [
    [0, 0],
    [165, 0],
    [325, 0],
    [485, 0],
    [645, 0],
    [805, 0],
];

const matriz_memory_of_thanatos = [
    [0, 0],
    [75, 0],
    [155, 0],
    [235, 0],
    [310, 0],
    [385, 0],
    [470, 0],
    [550, 0],
];

const matriz_stormy_knight = [
    [0, 0],
    [180, 0],
    [350, 0],
    [540, 0],
    [725, 0],
    [900, 0]
];

const matriz_valkyrie_randgris = [
    [0, 0],
    [170, 0],
    [360, 0],
    [515, 0],
    [690, 0],
    [860, 0],
];