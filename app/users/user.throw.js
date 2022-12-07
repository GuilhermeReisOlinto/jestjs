module.exports = ((dividend, divider) => {
    if(divider == 0){
        throw new Error ('invalid dividend', divider)
    }
    return dividend / divider
})