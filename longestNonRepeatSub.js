var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let left=0
    let maxlen=0
    for(let right=0;right<=s.length-1;right++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxlen=Math.max(maxlen,right-left+1)
    }
    return maxlen    
};