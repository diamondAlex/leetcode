//https://leetcode.com/problems/snapshot-array/submissions/

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    let x  = []
    for(i=0;i<length;i++){
        x[i] = 0
    }
    this.SnapshotArray = x
    this.inc = 0
    this.snaps = [[]]
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    let current_snap = this.snaps[this.inc] 
    let current_change = current_snap.findIndex((e) => e[0] == index)

    if(current_change != -1){
        current_snap[current_change] = [index,val]
    }
    else{
        current_snap.push([index,val])
    }
    this.SnapshotArray[index] = val     
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snaps.push([])
    return this.inc++
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let curr_id = snap_id
    console.log(this.snaps)
    while(curr_id >= 0){
        let in_snap = this.snaps[curr_id].findIndex((e) => e[0] == index)
        if(in_snap != -1){
            return this.snaps[curr_id][in_snap][1]
        }
        curr_id-- 
    }
    return 0
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

let index
let snapshot = new SnapshotArray(1)
//snapshot.set(0,5)
//index = snapshot.snap()
//snapshot.set(0,6)
//console.log(snapshot.get(0,0))

snapshot.set(0,15)
index = snapshot.snap()
index = snapshot.snap()
index = snapshot.snap()
console.log(snapshot.get(0,2))
index = snapshot.snap()
index = snapshot.snap()
console.log(snapshot.get(0,0))

//index = snapshot.snap()
//index = snapshot.snap()
//console.log(snapshot.get(3,1))
//snapshot.set(2,4)
//index = snapshot.snap()
//snapshot.set(1,4)

//snapshot.set(0,1)
//snapshot.set(2,17)
//snapshot.set(0,19)
//index = snapshot.snap()
//index = snapshot.snap()
//console.log(snapshot.get(0,0))
//index = snapshot.snap()
//console.log(snapshot.get(1,1))
//console.log(snapshot.get(2,0))
