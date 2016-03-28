<script>
import Menu from "../static/data/menu.json";

//  路由组件require出错时的替代组件
const NullComponentPath = "./null.vue";
const subMenuComponentPath = "./home/subMenu.vue";

//  路由map对象
var routerMap = {};

/**
 * 根据路由树数据生成路由Map对象
 * @param  {Object} menuTree            包含所有路由对象信息的对象
 * @param  {Object} routerMap           路由Map对象
 * @param  {String} componentPathPrefix 组件地址前缀
 * @return {Object}                     路由Map对象
 */
function generateRouterMap(menuTree, routerMap, componentPathPrefix) {
	var subMenu = [],
		componentPath = "",
		routerPath = "";

	if (generateRouterMap.menuLevel == null) {
		generateRouterMap.menuLevel = 0;
	} else {
		generateRouterMap.menuLevel++;
	}

	if (menuTree instanceof Array) {
		for (let i = 0, len = menuTree.length; i < len; i++) {
			generateRouterMap(menuTree[i], routerMap, componentPathPrefix);
		}
	} else if (menuTree != null && menuTree.toString() === "[object Object]") {
		//  如果路由树是个对象，则在路由Map对象中添加

		//  路由树对象name 属性不为字符串或为空字符串，直接结束执行函数
		if (typeof menuTree.name !== "string" || menuTree.name === "") {
			generateRouterMap.menuLevel--;
			return routerMap;
		}

		routerPath =  `/${ menuTree.name }`;
		componentPath = `${ componentPathPrefix }${ menuTree.name }.vue`;

		routerMap[routerPath] = {
			component: (() => {
				//  菜单路由加载菜单模块
				if (generateRouterMap.menuLevel === 3) {
					return require(subMenuComponentPath);
				}
				try {
					return require(componentPath);
				} catch(err) {
					console.log(err);
					return require(NullComponentPath);
				}
			})(),
			subRoutes: {}
		}

		//  递归遍历子路由树
		generateRouterMap(menuTree.subMenu, routerMap[routerPath].subRoutes, `${ componentPathPrefix }${menuTree.name}/`);
	}

	generateRouterMap.menuLevel--;

	return routerMap;
}

generateRouterMap(Menu, routerMap, "./");

export default routerMap;
</script>