/**
 *  Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    let l3 = head,
        x = false,
        sum = 0;
    while (l1 || l2 || x) {
        sum=0;
        if (x){
            sum+=1;
            x=false;
        }
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum > 9) {
            sum -= 10;
            x = true;
        }
        l3.next = new ListNode(sum);
        l3 = l3.next;
    }
    return head.next;
};



function print(l) {
    const s = [];
    while (l != null) {
        s.push(l.val);
        l = l.next;
    }
    console.log(s)
}

var l1 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 2,
            next: null
        }
    }
}


var l2 = {
    val: 6,
    next: {
        val: 9,
        next: {
            val: 3,
            next: {
                val: 1,
                next: null
            }
        }
    }
}

print(l1);
print(l2);

print(addTwoNumbers(l1, l2));