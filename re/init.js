﻿//init.js - 在JS引擎初始化后执行

//导入命名空间
var Game = importNamespace("Game");
var Engine = importNamespace("Engine");
var GameEnitySystem = importNamespace("GameEnitySystem");

//JsInterface的接口
var findSubsystem = Game.JsInterface.findSubsystem;//根据名字寻找特定Subsystem，名字不带Subsystem
var Project = Game.JsInterface.getProject();

//以下是会被调用的接口，均可覆写
function keyDown(key) {}//键盘按键按下时执行，传入的参数是字符串
function keyUp(key) {}//键盘按键弹起时执行，传入的参数是字符串

var frameHandlers = new Array();//窗口每次刷新都会执行
/*frameHandlers.push(()=>{//无参数，无返回值
    let a = findSubsystem("Players");
    if (a != null) {
        Engine.Log.Information(a.PlayersData.Count);//在日志输出当前玩家数量
    }
});*/
var OnMinerDigHandlers = new Array();//当Miner挖掘方块时执行，任一返回true后不执行原挖掘操作
/*OnMinerDigHandlers.push((miner, raycastResult, DigProgress) => {//ComponentMiner miner, TerrainRaycastResult raycastResult, ref float DigProgress
    return false;
});*/
var OnMinerPlaceHandlers = new Array();//当Miner放置方块时执行，任一返回true后不执行原放置操作
/*OnMinerPlaceHandlers.push((miner, raycastResult, x, y, z, value) => {//ComponentMiner miner, TerrainRaycastResult raycastResult, int x, int y, int z, int value
    return false;
});*/
var OnPlayerSpawnedHandlers = new Array();//玩家出生时执行
/*OnPlayerSpawnedHandlers.push((spawnMode, componentPlayer, position) => {//PlayerData.SpawnMode spawnMode, ComponentPlayer componentPlayer, Vector3 position，无返回值
});*/
var OnPlayerDeadHandlers = new Array();//玩家死亡时执行
/*OnPlayerDeadHandlers.push((playerData) => {//PlayerData playerData，无返回值
});*/
var AttackBodyHandlers = new Array();//当Miner执行攻击方法时执行，任一返回true后不执行原攻击操作
/*AttackBodyHandlers.push((target, attacker, hitPoint, hitDirection, attackPower1, isMeleeAttack) => {//ComponentBody target, ComponentCreature attacker, Vector3 hitPoint, Vector3 hitDirection, ref float attackPower, bool isMeleeAttack
    return false;
});*/
var OnCreatureInjureHandlers = new Array();//当生物受伤时执行，任一返回true后不执行原受伤操作
/*OnCreatureInjureHandlers.push((componentHealth, amount, attacker, ignoreInvulnerability, cause) => {//ComponentHealth componentHealth, float amount, ComponentCreature attacker, bool ignoreInvulnerability, string cause
    return false;
});*/
var OnProjectLoadedHandlers = new Array();//当Project被加载时执行
/*OnProjectLoadedHandlers.push((project) => {//Project project，无返回值
})*/
var OnProjectDisposedHandlers = new Array();//当Project被卸载时执行
/*OnProjectDisposedHandlers.push(() => {//无参数，无返回值
});*/