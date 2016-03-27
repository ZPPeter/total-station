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
		routerPath = "",
		menuLevel = 0;

	if (generateRouterMap.menuLevel == null) {
		generateRouterMap.menuLevel = 0;
	} else {
		generateRouterMap.menuLevel++;
	}

	//  如果路由树是个对象，则在路由Map对象中添加
	if (Object.prototype.toString(menuTree) === "[object Object]") {
		if (menuTree.name) {
			routerPath = `/${ menuTree.name }`;
			componentPath = `${ componentPathPrefix }${ menuTree.name }.vue`;
			routerMap[routerPath] = {
				component: (() => {
					if (generateRouterMap.menuLevel === 1) {
						return require(subMenuComponentPath);
					}
					
					try{
						return require(componentPath);
					} catch (e) {
						console.log(e);
						return require(NullComponentPath);
					}
				})()
			}
		}
	}

	//  判断路由对象是否有子树
	subMenu = menuTree.subMenu;
	if (subMenu != null && Object.prototype.toString(menuTree.subMenu) === "[object Object]") {
		let subMenu = menuTree.subMenu;

		//  有子树、递归添加子树中的路由数据
		routerMap[routerPath].subRoutes = {};
		for (let i = 0, len = subMenu.length; i < len; i++) {
			generateRouterMap(subMenu[i], routerMap[routerPath].subRoutes, `${ componentPathPrefix }${ menuTree.name }/`);
		}
	}

	generateRouterMap.menuLevel--;
	return routerMap;
}

generateRouterMap(Menu, routerMap, "./");

export default routerMap;
</script>