/**
 * Created by Ray on 2/11/17.
 */

import { Kbo } from './utilities/kbo-utils'
import { NameList } from './utilities/namelist-utils'

/* remaining code for testing */

let aTree =
 [
   {
     'name': 'absent',
     'value': 0.5,
     'branches': []
   },
   { name: 'present',
     value: 0.5,
     branches: [
       {
         name: 'productive',
         value: .75,
         branches: [
           {
             name: 'normal sputum',
             value: .75,
             branches: []
           },
           {
             name: 'abnormal sputum',
             value: .25,
             branches: []
           }
         ]
       },
       {
         name: 'unproductive',
         value: .25,
         branches: []
       }
     ]
   }
 ] as Kbo.Branch[];

/*
console.log(JSON.stringify(aTree, null, 2));
console.log('');




let values = Kbo.parseTreeForValues(aTree);

let nameLists = Kbo.parseTreeForNameLists(aTree);
for  (let i=0; i < nameLists.length; i++){
  console.log(nameLists[i]);
}
console.log('');
for  (let i=0; i < values.length; i++){
  console.log(values[i]);
}

console.log('');
for (let i = 0; i< nameLists.length; i++) {
  console.log(NameList.label(nameLists[i]));
}
console.log('');
for (let i = 0; i< nameLists.length; i++) {
  console.log(NameList.displayName('cough', nameLists[i]));
}

let aBranch : Kbo.Branch =
 {name:'', value: 1, branches: [], tbd:''} as Kbo.Branch;
console.log(aBranch);
*/


let	fs = require("fs");

/*
 Note: in the PUI, the ddoUniverseObject and the symptomObject will be based on data collected via API calls:
 the ddoUniverseObject is an array of DDO's (Javascript objects, not JSON strings) based on the Reason for Encounter.
 The symptom object is an SDC object corresponding to a symptom input by the Provider using the PUI GUI.  The PUI
 software will also have to determine the "description" field in the symptomDescription object below; this is again
 based on Provider collected via the PUI GUI. Note that the "modifers" field is an empty array for now.
 */

let ddoUniverse = JSON.parse(fs.readFileSync("./data/ddoUniverse.json", 'utf8'));

let sdcoUniverse = JSON.parse(fs.readFileSync("./data/sdcoUniverse.json", 'utf8'));

let sdcoTree = Kbo.getTreeFromSdco(sdcoUniverse[0]);
console.log('sdcoTree:')
console.log(JSON.stringify(sdcoTree, null, 2));

let ddoTree = Kbo.getTreeFromDdo(ddoUniverse[0], "cough-uuid-v1-string");
console.log('ddooTree:')
console.log(JSON.stringify(ddoTree, null, 2));

let sdcoValues = Kbo.parseTreeForValues(sdcoTree);

let sdcoNameLists = Kbo.parseTreeForNameLists(sdcoTree);

let ddoValues = Kbo.parseTreeForValues(ddoTree);

let ddoNameLists = Kbo.parseTreeForNameLists(ddoTree);


for  (let i=0; i < sdcoNameLists.length; i++){
  console.log(sdcoNameLists[i]);
}
console.log('');

for  (let i=0; i < ddoNameLists.length; i++){
  console.log(ddoNameLists[i]);
}
console.log('');


for  (let i=0; i < sdcoValues.length; i++){
  console.log(sdcoValues[i]);
}
console.log('');

for  (let i=0; i < ddoValues.length; i++){
  console.log(ddoValues[i]);
}
console.log('');
