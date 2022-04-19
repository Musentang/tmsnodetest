const arr = [
	{
		"id": "01", 
		"name": "公司"
	},
	{
		"id": "02", 
		"parentId": "01", 
		"name": "一级部门"
	}, 
	{
		"id": "30", 
		"parentId": "02", 
		"name": "二级部门"
	}, 
	{
		"id": "31", 
		"parentId": "02", 
		"name": "二级部门"
	}, 
	{
		"id": "40", 
		"parentId": "30", 
		"name": "三级部门"
	}, 
	{ 
		"id": "41", 
		"parentId": "30",
		"name": "三级部门" 
	},
];

const tree = arrTransToTree(arr);
// console.log(JSON.stringify(tree, '', 4));
const treeArr = treeTransToArr(tree);
// console.log(treeArr);


function treeTransToArr(data) {
	console.log(JSON.stringify(data, '', 4));
	const res = [];
	dfs(data);

	function dfs(data) {
		if (data.length === 0) return;

		for (let i in data) {
			const item = data[i];
			if (item.children) {
				const node = JSON.parse(JSON.stringify(data[i]));
				delete node.children;
				res.push(node);
				dfs(item.children);
			} else {
				res.push(item);
			}
		}
	}
	return res;
}


function arrTransToTree (data) {
	const rootArr = data.filter(item => !item.parentId);
	const childrenArr = data.filter(item => item.parentId);
	dfs(rootArr, childrenArr);

	function dfs(data, children) {
		for (let i in data) {
			const item = data[i];
			for (let j in children) {
				const jtem = children[j];
				if (jtem.parentId === item.id) {
					const childrenArr = JSON.parse(JSON.stringify(children));
					childrenArr.splice(j, 1);

					dfs([jtem], childrenArr);

					if (item.children) {
						item.children.push(jtem);
					} else {
						item.children = [jtem];
					}
				}
			}
		}
	}

	return rootArr;
}

