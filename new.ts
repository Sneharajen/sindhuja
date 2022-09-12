
interface objectversion{
    versions:any[],
    name:string[],
    date:any[],
    Type:string[],
    features:any[],
    authors:string[],
    Bugs:any[]
}
let versions=[{name:"apple-version1",
           date:"2014",
           Type:"major",
           features:"Battery preservation",
           Bugs:['ABC84',"Audio"],
           Author:"Steve_jobs"
           },

        {name:"Kiwi-version3",
        date:"2021",
        Type:"patch",
        features:"scalable text",
        Bugs:['ABC85',"Video"],
        Author:"Brian Acton"
        },

        {name:"Grapes-version5.F",
        date:"2017",
        Type:"enhancement",
        features:"Security-By-Design Approach",
        Bugs:['ABC86',"crash button after tap"],
        Author:"Bran Acton"
        },
    
        {name:"orange-version2.0",
        date:"2015",
        Type:"patch",
        features:"Auto Rotation Animation",
        Bugs:['ABC87',"Poor UX Writing practices"],
         Author:"Sergey Brin"
         },
    
        {name:"Mango-version7.A",
        date:"1999",
        Type:"enhancement",
        features:"scalable text",
        Bugs:['ABC88',"Visualization problems"],
         Author:"Sergey Brin"
         }
// console.log(versions)
console.log("*******************************************************");
//Identifing Type in versions:-
let patch=(versions.filter(n=>n.Type.includes("patch")))
let major=(versions.filter(n=>n.Type.includes("major")))
let Enhancement=(versions.filter(n=>n.Type.includes("enhancement")))
console.log("TYPE OF PATCH IN VERSIONS",patch)
console.log("*******************************************************");
console.log("TYPE OF MAJOR IN VERSIONS:-",major)
console.log("*******************************************************");
console.log("TYPE OF ENHANCEMENT IN VERSIONS:-",Enhancement)
console.log("*******************************************************");
//Identifying date in versions:-
let year=versions.filter(a=>a.date.includes("1999"))
console.log("PARTICULAR YEAR IN VERSIONS:-",year)
console.log("*******************************************************");
//Identifying author in versions:-
let array:any=[]
versions.forEach(version => {
    array.push(version.Author)});
let a=[] 
a = [...new Set(array)]
let releaseArr =[]
for(let i of a){ 
    let release =0 
    for( let j of array){ 
        if(i==j){ 
           release++
        }
    }
    releaseArr.push(release)
}
let max=Math.max(...releaseArr)
for(let k in releaseArr){
    if(max==releaseArr[k]){
        console.log("MAXIMUM NUMBER OF VERSIONS IN AUTHOR:-",a[k]);
    } 
}
console.log("*******************************************************");
// Identifying Bugs :-
let giveid="ABC88"
let b=[]
for(let i in versions){
    if(giveid==versions[i].Bugs[0]){
         b.push(versions[i])
    }
}
console.log("BUGID:-",b)
console.log("*******************************************************");
//Specific feature name:-
let feat=versions.filter(n=>n.features.includes("Animation"))
console.log("FEATURE SHORTLISTING IN VERSIONS:-",feat)
