class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        //increase the size of the node
        this.size++
    }


    //inserd last node
    insertLast(data) {
        let node = new Node(data)
        let current;

        //if empty, then make it the head
        if(!this.head) {
            this.head = node
        } else {
            current = this.head

            while(current.next) {
                current = current.next
            }

            //add the noded to the end
            current.next = node
        }

        //increase the size of the node
        this.size++


    }

    //insert at index

    //get at index

    //remove at index

    //clear List

    //prin list data
    prinListData(){
        let current = this.head;

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)

ll.prinListData()