let s : string = "racecar";
let t : string = "carrace";

function isAnagram(s:string,t:string) {

    if(s.length!=t.length){
        return false;
    }

    let sSort : string[] = s.split("").sort()
    let tSort : string[] = t.split("").sort()

    for(let i:number=0; i<sSort.length; i++){
        if (sSort[i] !== tSort[i]){
            return false;
        }
    }

    return true;
}

console.log(isAnagram(s,t))

