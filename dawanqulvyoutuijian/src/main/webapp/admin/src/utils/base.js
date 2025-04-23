const base = {
    get() {
        return {
            url : "http://localhost:8080/dawanqulvyoutuijian/",
            name: "dawanqulvyoutuijian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dawanqulvyoutuijian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大湾区旅游推荐系统"
        } 
    }
}
export default base
