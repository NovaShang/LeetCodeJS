/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlen = null;
    let temp=0;
    const charsLastPosMap=new Map();
    for (let i = 0; i < s.length; i++) {
        let x = s.charAt(i);
        if(!charsLastPosMap.has(x)){
            charsLastPosMap.set(x,i);
            continue;
        }
        let len = i-charsLastPosMap.get(x);
        charsLastPosMap.set(x,i);
        if(len>temp||maxlen===null) {temp=len;}
        if()
    }
    return maxlen;
};

console.log(lengthOfLongestSubstring("abcabcabc"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcdef"));
console.log(lengthOfLongestSubstring("abcdazxvmn"));