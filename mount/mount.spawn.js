// 将拓展签入 Spawn 原型
module.exports = function () {
    _.assign(Spawn.prototype, spawnExtension)
}

// 自定义的 Spawn 的拓展
const spawnExtension = {
    // 自动生成Creep
    autoCreatCreep() { 
        var harvesterNum = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')
        var builderNum = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
        var upgraderNum = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')


        if( harvesterNum < 2 && creep.store[RESOURCE_ENERGY]> 300) {
            var newName = 'Harvester' + (harvesterNum + 1);
            //console.log('Spawning new harvester: ' + newName);
            self.spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'harvester'}});
        }

        
        if( builderNum < 2 && creep.store[RESOURCE_ENERGY]> 300) {
            var newName = 'Builder' + (builderNum + 1);
            //console.log('Spawning new builder: ' + newName);
            self.spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'builder'}});
        }

        if( upgraderNum < 2 && creep.store[RESOURCE_ENERGY]> 300) {
            var newName = 'Upgrader' + (upgraderNum + 1);
            //console.log('Spawning new upgrader: ' + newName);
            self.spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'upgrader'}});
        }
    },
   
    creatHarvestRoad1(){
        var powerbanks = self.room.find(FIND_SOURCES)

        for (pb in powerbanks){
            let path = self.pos.findPathTo(pb, {maxOps: 200});
            if( !path.length || !pb.equalsTo(path[path.length - 1]) ) {
                //path = creep.pos.findPathTo(target,{maxOps: 1000, ignoreDestructibleStructures: true});
            }
            if(path.length) {
               for (const waypos in path) {
                   self.room.createConstructionSite(waypos.x,waypos.y,STRUCTURE_ROAD)
               }
            }
        }
    },

    creatSpawnRoundRoad(){
       //var mroom = new Room.Terrain(self.name);
       var spwanPos = self.pos
       for(i = -1 ;i < 2; i++){
        for(j = -1 ;j < 2;j++){
            self.room.createConstructionSite(spwanPos.x + i,spwanPos.y + j,STRUCTURE_ROAD)
        }
       }
    },

    creatSourceRoundRoad(){
        //var mroom = new Room.Terrain(self.name);

        var spwanPos = self.pos
        for(i = -1 ;i < 2; i++){
         for(j = -1 ;j < 2;j++){
             self.room.createConstructionSite(spwanPos.x + i,spwanPos.y + j,STRUCTURE_ROAD)
         }
        }
     }
}