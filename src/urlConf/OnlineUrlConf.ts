let OnlineUrlConf = {
  xboot: {
    login: "xboot/login",
    user: {
      info: "xboot/user/info"
    },
    permission: {
      getMenuList: "xboot/permission/getMenuList"
    }
  },
  governance: {
    statistics: {
      findProandZkList: "/governance/statistics/findProandZkList",
      findRequestCount: "/governance/statistics/findRequestCount",
    },
    apolloApplication: {
      linkApollo: "/governance/apolloApplication/linkApollo",
      deleteApolloLink: "/governance/apolloApplication/deleteApolloLink",
      confirmApolloLink: "/governance/apolloApplication/confirmApolloLink",
    },
    scApplication: {
      findScApplication: "/governance/scApplication/findScApplication",
      setApplication: "/governance/scApplication/setApplication",
      createApplication: "/governance/scApplication/createApplication",
      findScExample: "/governance/scApplication/findScExample",
      findHystrixExample: "/governance/scApplication/findHystrixExample",
      findHystrixDashboard: "/governance/scApplication/findHystrixDashboard",
      findHystrixThreadPool: "/governance/scApplication/findHystrixThreadPool",
      findAddServiceData: "/governance/scApplication/findAddServiceData",
      findEditServiceData: "/governance/scApplication/findEditServiceData",
      deleteScApplication: "/governance/scApplication/deleteScApplication",
      editScApplication: "/governance/scApplication/editScApplication",
      findScService: "/governance/scApplication/findScService",
      findScLoadBalancer: "/governance/scApplication/findScLoadBalancer",
      createScLoadBalancer: "/governance/scApplication/createScLoadBalancer",
      deleteScLoadBalancer: "/governance/scApplication/deleteScLoadBalancer",
      deleteScWhiteList: "/governance/scApplication/deleteScWhiteList",
      createScWhiteList: "/governance/scApplication/createScWhiteList",
      findScWhiteList: "/governance/scApplication/findScWhiteList",
      findScServiceData: "/governance/scApplication/findScServiceData",
      saveScHystrix: "/governance/scApplication/saveScHystrix",
      deleteScHystrix: "/governance/scApplication/deleteScHystrix",
      findScHystrix: "/governance/scApplication/findScHystrix",
      openRetryPolicy: "/governance/scApplication/openRetryPolicy",
      findScRetryPolicy: "/governance/scApplication/findScRetryPolicy",
      saveRetryPolicy: "/governance/scApplication/saveRetryPolicy",
      deleteRetryPolicy: "/governance/scApplication/deleteRetryPolicy",
      retryPolicyStatus: "/governance/scApplication/retryPolicyStatus",
      saveScLoadBalancer: "/governance/scApplication/saveScLoadBalancer",
    },
    zkdata: {
      findMethodsByUrl: "governance/zkdata/findMethodsByUrl",
      findConsumers: "governance/zkdata/findConsumers",
      projectStatus: "governance/zkdata/projectStatus",
      findProviderIpList: "governance/zkdata/findProviderIpList",
      findConsumerIpList: "governance/zkdata/findConsumerIpList",
      route2BlackWhite: "governance/zkdata/route2BlackWhite",
      findRouteBlackWhite: "governance/zkdata/findRouteBlackWhite",
      overriderHandle: "governance/zkdata/overriderHandle",
      getConsumerDetail: "governance/zkdata/getConsumerDetail",
      findDubboApplication: "governance/zkdata/findDubboApplication",
    },
    exampleGovernment: {
      findGroupByServiceExampleGovernment: "/governance/exampleGovernment/findGroupByServiceExampleGovernment",
      findGroupByServiceExampleGovernmentInfo: "/governance/exampleGovernment/findGroupByServiceExampleGovernmentInfo",
      configWeight: "/governance/exampleGovernment/configWeight",
    },
    servicemap: {
      countBySerAndSer: "governance/servicemap/countBySerAndSer",
      getBtRespList: "governance/servicemap/getBtRespList",
      getBtRespDetail: "governance/servicemap/getBtRespDetail"
    },
    dubboExample: {
      findDubboExample: "/governance/dubboExample/findDubboExample",
      findZkInterfaceByAppId: "/governance/dubboExample/findZkInterfaceByAppId",
    }
  },
  api: {
    datasurvey: {
      queryTreeNode: "api/datasurvey/queryTreeNode"
    },
    alertHistory: {
      search: "/api/alertHistory/search",
      getAllByPage: "/api/alertHistory/getAllByPage",
    },
    group: {
      findUserGroups: "api/group/findUserGroups"
    },
    syscode: {
      get: "/api/syscode/get"
    },
    confDetail: {
      getApps: "/api/confDetail/getApps",
      getClusters: "/api/confDetail/getClusters",
      getNamespaces: "/api/confDetail/getNamespaces",
      getItems: "/api/confDetail/getItems",
      getEnvAndCluster: "/api/confDetail/getEnvAndCluster"
    },
    documentP: {
      showProjectData: "api/documentP/showProjectData"
    },
    registryCenter: {
      getRegistryCenter: "/api/registryCenter/getRegistryCenter",
      getEnvironment: "/api/registryCenter/getEnvironment",
    },
    env: {
      query: "/api/env/query"
    },
    confCenter: {
      show: "/api/confCenter/show",
      add: "/api/confCenter/add",
      update: "/api/confCenter/update",
      delete: "/api/confCenter/delete",
      findApolloList: "/api/confCenter/findApolloList"
    },
    alert: {
      addAlert: "api/alert/addAlert",
      editAlert: "api/alert/editAlert",
      getProjectData: "api/alert/getProjectData",
      getRuleDescription: "api/alert/getRuleDescription",
      getRuleDescriptionCondition: "api/alert/getRuleDescriptionCondition",
      getAlertUserObject: "api/alert/getAlertUserObject",
      getSameCompareGra: "api/alert/getSameCompareGra",
    },
    alarmSetting: {
      list: "/api/alarmSetting/list",
      add: "/api/alarmSetting/add",
      update: "/api/alarmSetting/update",
    },
    app: {
      dropdown: {
        nameList: "/api/app/dropdown/nameList"
      }
    },
    project: {
      dropdown: {
        nameList: "/api/project/dropdown/nameList"
      }
    },
    service: {
      dropdown: {
        nameList: "/api/service/dropdown/nameList"
      }
    },
    proto: {
      share: "/api/proto/share",
      find: "/api/proto/find",
      query: "/api/proto/query",
    },
    share: {
      find: "/api/share/find"
    }
  },
  statsReport: {
    list: "/api/report/statsReport/list",
  },
  reportPromotion: {
    query: "/api/report/promotion/query",
    excel: "/api/report/promotion/excel"
  },
  reportLogin: {
    query: "/api/report/login/query",
    excel: "/api/report/login/excel"
  },
  reportStatistics: {
    query: "/api/report/statistics/query",
    excel: "/api/report/statistics/excel",
  },
  reportCall: {
    query: "/api/report/call/query",
    excel: "/api/report/call/excel",
  },
  reportCalled: {
    query: "/api/report/called/query",
    excel: "/api/report/called/excel",
  },
  reportOperation: {
    excel: "/api/report/operationReport/word",
  },
  reportZkInterface: {
    query: "/api/report/zkInterface/query",
    excel: "/api/report/zkInterface/excel",
  },
  getNameList: {
    app: "/api/app/dropdown/nameList",
    project: "/api/project/dropdown/nameList"
  },
  errorInfo: {
    query: "/api/errorinfo/query"
  },
  alertRuler: {
    showAlert: "api/alert/showAlert",
    getSameCompareInfo: "/api/alert/getSameCompareInfo",
    getMoreThanInfo: "/api/alert/getMoreThanInfo",
    addAlert: "/api/alert/addAlert",
    editAlert: "/api/alert/editAlert"
  },
  help: {
    show: "api/help/show",
    guide: {
      list: "api/help/guide/list",
      get: "api/help/guide/get"
    },
    faq: {
      list: "api/help/faq/list",
      get: "api/help/faq/get"
    }
  },
  documentSC: {
    applicationList: "/api/documentSC/applicationList",
    findAppAndServiceList: "/api/documentSC/findAppAndServiceList",
    findExampleSC: "/api/documentSC/findExampleSC"
  }
};


export default OnlineUrlConf;
