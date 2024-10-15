class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Method to add a new element
    add(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            // If the list is empty, set the new node as both head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the list is not empty, link the new node to the tail
            this.tail!.next = newNode; // Non-null assertion to avoid TypeScript error
            this.tail = newNode;
        }
        this.size++;
    }

    // Method to remove an element by value
    remove(value: T): boolean {
        if (!this.head) return false; // Empty list

        if (this.head.value === value) {
            // If the value is at the head, move the head to the next node
            this.head = this.head.next;
            this.size--;
            if (this.size === 0) {
                this.tail = null; // If the list is now empty, set tail to null
            }
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next; // Remove the node by skipping it
                this.size--;
                if (current.next === null) {
                    this.tail = current; // Update the tail if the last element is removed
                }
                return true;
            }
            current = current.next;
        }
        return false; // Value not found
    }

    // Method to find an element by value
    find(value: T): boolean {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true; // Value found
            }
            current = current.next;
        }
        return false; // Value not found
    }

    // Method to print the list
    print(): void {
        let current = this.head;
        const elements: T[] = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}

// Example usage
const list = new LinkedList<number>();
list.add(10);
list.add(20);
list.add(30);
list.print(); // Output: 10 -> 20 -> 30
list.remove(20);
list.print(); // Output: 10 -> 30
console.log(list.find(10)); // Output: true
console.log(list.find(40)); // Output: false
