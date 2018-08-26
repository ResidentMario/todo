const changeItemDoneness = (item) => {
    return {type: 'CHANGE_ITEM_DONENESS', item: item}
};

const changeTabState = (tab_name) => {
    return {'type': 'CHANGE_TAB_STATE', tab_name: tab_name}
};

module.exports = {
    changeItemDoneness: changeItemDoneness,
    changeTabState: changeTabState
};