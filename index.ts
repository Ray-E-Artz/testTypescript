/**
 * Created by Ray on 2/11/17.
 */



export namespace Tree {

  export interface Branch {
    name: string,
    value: number,
    branches: any[]
  }

  export interface Node {
    names: string[];
    value: number
  }

  export function parse(
    tree: Branch[],
    namesInput: string[],
    nodes: Node[],
    valueInput = 1): void {

    for (let i = 0; i < tree.length; i++) {
      let names = namesInput.slice(0); //clone array

      let value = valueInput * tree[i].value;
      names.push(tree[i].name);

      let node = {
        names: names,
        value: value
      } as Node;

      console.log('node: ' + JSON.stringify(node)) ;
      nodes.push(node);
      this.parse(tree[i].branches, names, nodes, value );
    }
  }


}



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
console.log(typeof(aTree));

//var treeUtils = new TreeUtils();

let nodes: Tree.Node[] = [] as Tree.Node[];

 Tree.parse(aTree, [], nodes, 1);

console.log(JSON.stringify(nodes));

/*
 export function testParse(tree: Branch[]): Node[] {
 let nodes = [] as Node[];
 let node = {
 names: [tree[0].name],
 value: tree[0].value
 } as Node;
 nodes.push(node);
 return nodes;
 }
 */