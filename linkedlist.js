class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null,
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    append(value){
      
        const node=new Node(value)
        if(this.isEmpty()){
           
          this.head=node
        }
        else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node

        }
        this.size++
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head,
            this.head=node
        }
        this.size++

    }
    print(){
        let curr=this.head
        let a=[]
        while(curr){
            a.push(curr.value)
            curr=curr.next
        }
        console.log(a.join(","))
    }
}

let list=new Linkedlist()
list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.append(1)
list.print()