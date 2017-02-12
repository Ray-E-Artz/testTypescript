/**
 * Created by Ray on 2/11/17.
 */

export namespace Tree {

  export interface Branch {
    name: string,
    value: number,
    branches: any[]
  }

  export function parseForValues(tree: Branch[]): number[] {

    let values: number[] = [];
    fillValues(tree, 1, values);
    return values;
  }

  export function parseForNameLists(tree: Branch[]): string[][] {

    let nameLists: string[][] = [];
    fillNameLists(tree, [], nameLists);
    return nameLists;
  }

  function fillValues(
    tree: Branch[],
    initialValue: number,
    values: number[]): void {

    for (let i = 0; i < tree.length; i++) {
      let value = initialValue * tree[i].value;
      values.push(value);
      //console.log('value: ' + value);
      fillValues(tree[i].branches, value, values );
    }
  }

  function fillNameLists(
    tree: Branch[],
    initialNameList: string[],
    nameLists: string[][]
  ): void {

    for (let i = 0; i < tree.length; i++) {
      let nameList = initialNameList.slice(0); //clone array
      nameList.push(tree[i].name);
      nameLists.push(nameList);
      //console.log('nameList: ' + JSON.stringify(nameList)) ;
      fillNameLists(tree[i].branches, nameList, nameLists );
    }
  }
}

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
         branches: []
       },
       {
         name: 'unproductive',
         value: .25,
         branches: []
       }
     ]
   }
 ] as Tree.Branch[];


console.log(JSON.stringify(aTree));
console.log('');


let values = Tree.parseForValues(aTree);
console.log(JSON.stringify(values));
console.log('');

let nameLists = Tree.parseForNameLists(aTree);
console.log(JSON.stringify(nameLists));