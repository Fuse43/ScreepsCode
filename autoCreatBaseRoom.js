var roleUpgrader = {

    run: function(roomName) {

        function myPrintRawTerain(raw) {
            const visual = new RoomVisual();
            for(let y = 0; y < 50; y++) {
                for(let x = 0; x < 50; x++) {
                    const code = raw[y * 50 + x];
                    const color =
                        (code & TERRAIN_MASK_WALL ) ? "gray"  :
                        (code & TERRAIN_MASK_SWAMP) ? "green" : "white" ;
                    visual.circle(x, y, {fill: color, radius: 0.5});
                }
            }
        }

        function creatHarvestRoad1(){
            let path = swpan.pos.findPathTo(target, {maxOps: 200});
            if( !path.length || !target.equalsTo(path[path.length - 1]) ) {
                path = creep.pos.findPathTo(target,{maxOps: 1000, ignoreDestructibleStructures: true});
                }
            if( path.length ) {
                creep.move(path[0].direction);
            }

        }

        function creatSpwanRoundRoad(swpan){
            let path = swpan.pos.findPathTo(target, {maxOps: 200});
            if( !path.length || !target.equalsTo(path[path.length - 1]) ) {
                path = creep.pos.findPathTo(target,{maxOps: 1000, ignoreDestructibleStructures: true});
                }
            if( path.length ) {
                creep.move(path[0].direction);
            }

        }

        function creatHarvestRoad1(swpan){
            let path = swpan.pos.findPathTo(target, {maxOps: 200});
            if( !path.length || !target.equalsTo(path[path.length - 1]) ) {
                path = creep.pos.findPathTo(target,{maxOps: 1000, ignoreDestructibleStructures: true});
                }
            if( path.length ) {
                creep.move(path[0].direction);
            }

        }

        const raw = (new Room.Terrain(roomName)).getRawBuffer();
        myPrintRawTerain(raw);
    }
};

module.exports = roleUpgrader;