const addItem = (item) => {

    return {
        type:"ADD_ITEM",
        payload: item //jo bhi me likhunga voh add  ho jayga isme item me
    }
}

const removeItem = (id) => {
    return {
        type : "REMOVE_ITEM",
        payload: id
    }
}

export  {addItem,removeItem}