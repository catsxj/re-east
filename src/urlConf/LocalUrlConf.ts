let LocalUrlConf = {
  xboot: {
    login: "xboot/login.json",
    user: {
      info: "xboot/user/info.json"
    },
    permission: {
      getMenuList: "xboot/permission/getMenuList.json",
      getMenuList2: "xboot/permission/getMenuList/682265633886208/90.json",
    }
  },
  governance: {
    statistics: {
      findProandZkList: "/governance/statistics/findProandZkList.json",
      findRequestCount: "/governance/statistics/findRequestCount.json",
    },
    apolloApplication: {
      linkApollo: "/governance/apolloApplication/linkApollo.json",
      deleteApolloLink: "/governance/apolloApplication/deleteApolloLink.json",
      confirmApolloLink: "/governance/apolloApplication/confirmApolloLink.json",
    },
    scApplication: {
      findScApplication: "/governance/scApplication/findScApplication.json",
      setApplication: "/governance/scApplication/setApplication.json",
      createApplication: "/governance/scApplication/createApplication.json",
      findScExample: "/governance/scApplication/findScExample.json",
      findHystrixExample: "/governance/scApplication/findHystrixExample.json",
      findHystrixDashboard: "/governance/scApplication/findHystrixDashboard.json",
      findHystrixThreadPool: "/governance/scApplication/findHystrixThreadPool.json",
      findAddServiceData: "/governance/scApplication/findAddServiceData.json",
      findEditServiceData: "/governance/scApplication/findEditServiceData.json",
      deleteScApplication: "/governance/scApplication/deleteScApplication.json",
      editScApplication: "/governance/scApplication/editScApplication.json",
      findScService: "/governance/scApplication/findScService.json",
      findScLoadBalancer: "/governance/scApplication/findScLoadBalancer.json",
      createScLoadBalancer: "/governance/scApplication/createScLoadBalancer.json",
      deleteScLoadBalancer: "/governance/scApplication/deleteScLoadBalancer.json",
      deleteScWhiteList: "/governance/scApplication/deleteScWhiteList.json",
      createScWhiteList: "/governance/scApplication/createScWhiteList.json",
      findScWhiteList: "/governance/scApplication/findScWhiteList.json",
      findScServiceData: "/governance/scApplication/findScServiceData.json",
      saveScHystrix: "/governance/scApplication/saveScHystrix.json",
      deleteScHystrix: "/governance/scApplication/deleteScHystrix.json",
      findScHystrix: "/governance/scApplication/findScHystrix.json",
      openRetryPolicy: "/governance/scApplication/openRetryPolicy.json",
      findScRetryPolicy: "/governance/scApplication/findScRetryPolicy.json",
      saveRetryPolicy: "/governance/scApplication/saveRetryPolicy.json",
      deleteRetryPolicy: "/governance/scApplication/deleteRetryPolicy.json",
      retryPolicyStatus: "/governance/scApplication/retryPolicyStatus.json",
      saveScLoadBalancer: "/governance/scApplication/saveScLoadBalancer.json",
    },
    zkdata: {
      findMethodsByUrl: "governance/zkdata/findMethodsByUrl.json",
      findConsumers: "governance/zkdata/findConsumers.json",
      projectStatus: "governance/zkdata/projectStatus.json",
      findProviderIpList: "governance/zkdata/findProviderIpList.json",
      findConsumerIpList: "governance/zkdata/findConsumerIpList.json",
      route2BlackWhite: "governance/zkdata/route2BlackWhite.json",
      findRouteBlackWhite: "governance/zkdata/findRouteBlackWhite.json",
      overriderHandle: "governance/zkdata/overriderHandle.json",
      getConsumerDetail: "governance/zkdata/getConsumerDetail.json",
      findDubboApplication: "governance/zkdata/findDubboApplication.json",
    },
    exampleGovernment: {
      findGroupByServiceExampleGovernment: "/governance/exampleGovernment/findGroupByServiceExampleGovernment.json",
      findGroupByServiceExampleGovernmentInfo: "/governance/exampleGovernment/findGroupByServiceExampleGovernmentInfo.json",
      configWeight: "/governance/exampleGovernment/configWeight.json",
    },
    servicemap: {
      countBySerAndSer: "governance/servicemap/countBySerAndSer.json",
      getBtRespList: "governance/servicemap/getBtRespList.json",
      getBtRespDetail: "governance/servicemap/getBtRespDetail.json"
    },
    dubboExample: {
      findDubboExample: "/governance/dubboExample/findDubboExample.json",
      findZkInterfaceByAppId: "/governance/dubboExample/findZkInterfaceByAppId.json",
    }
  },
  api: {
    datasurvey: {
      queryTreeNode: "api/datasurvey/queryTreeNode.json"
    },
    alertHistory: {
      search: "/api/alertHistory/search.json",
      getAllByPage: "/api/alertHistory/getAllByPage.json",
    },
    group: {
      findUserGroups: "api/group/findUserGroups/682265633886208.json"
    },
    syscode: {
      get: "/api/syscode/get.json"
    },
    confDetail: {
      getApps: "/api/confDetail/getApps.json",
      getClusters: "/api/confDetail/getClusters.json",
      getNamespaces: "/api/confDetail/getNamespaces.json",
      getItems: "/api/confDetail/getItems.json",
      getEnvAndCluster: "/api/confDetail/getEnvAndCluster.json"
    },
    documentP: {
      showProjectData: "api/documentP/showProjectData.json"
    },
    registryCenter: {
      getRegistryCenter: "/api/registryCenter/getRegistryCenter.json",
      getEnvironment: "/api/registryCenter/getEnvironment.json"
    },
    env: {
      query: "/api/env/query.json"
    },
    confCenter: {
      show: "/api/confCenter/show.json",
      add: "/api/confCenter/add.json",
      update: "/api/confCenter/update.json",
      delete: "/api/confCenter/delete.json",
      findApolloList: "/api/confCenter/findApolloList.json"
    },
    alert: {
      addAlert: "api/alert/addAlert.json",
      editAlert: "api/alert/editAlert.json",
      getProjectData: "api/alert/getProjectData.json",
      getRuleDescription: "api/alert/getRuleDescription.json",
      getRuleDescriptionCondition: "api/alert/getRuleDescriptionCondition.json",
      getAlertUserObject: "api/alert/getAlertUserObject.json",
      getSameCompareGra: "api/alert/getSameCompareGra.json",
    },
    alarmSetting: {
      list: "/api/alarmSetting/list.json",
      add: "/api/alarmSetting/add.json",
      update: "/api/alarmSetting/update.json",
    },
    app: {
      dropdown: {
        nameList: "/api/app/dropdown/nameList.json"
      }
    },
    project: {
      dropdown: {
        nameList: "/api/project/dropdown/nameList.json"
      }
    },
    service: {
      dropdown: {
        nameList: "/api/service/dropdown/nameList.json"
      }
    },
    proto: {
      share: "/api/proto/share.json",
      find: "/api/proto/find.json",
      query: "/api/proto/query.json",
    },
    share: {
      find: "/api/share/find.json"
    }
  },
  statsReport: {
    list: "/api/report/statsReport/list.json",
  },
  reportPromotion: {
    query: "/api/report/promotion/query.json",
    excel: "/api/report/promotion/excel.json"
  },
  reportLogin: {
    query: "/api/report/login/query.json",
    excel: "/api/report/login/excel.json"
  },
  reportStatistics: {
    query: "/api/report/statistics/query.json",
    excel: "/api/report/statistics/excel.json",
  },
  reportCall: {
    query: "/api/report/call/query.json",
    excel: "/api/report/call/excel.json",
  },
  reportCalled: {
    query: "/api/report/called/query.json",
    excel: "/api/report/called/excel.json",
  },
  reportOperation: {
    excel: "/api/report/operationReport/word.json",
  },
  reportZkInterface: {
    query: "/api/report/zkInterface/query.json",
    excel: "/api/report/zkInterface/excel.json",
  },
  getNameList: {
    app: "/api/app/dropdown/nameList.json",
    project: "/api/project/dropdown/nameList.json"
  },
  errorInfo: {
    query: "/api/errorinfo/query.json"
  },
  alertRuler: {
    showAlert: "api/alert/showAlert.json",
    getSameCompareInfo: "/api/alert/getSameCompareInfo.json",
    getMoreThanInfo: "/api/alert/getMoreThanInfo.json",
  },
  help: {
    show: "api/help/show.json",
    guide: {
      list: "api/help/guide/list.json",
      get: "api/help/guide/get.json"
    },
    faq: {
      list: "api/help/faq/list.json",
      get: "api/help/faq/get.json"
    }
  },
  documentSC: {
    applicationList: "/api/documentSC/applicationList.json",
    findAppAndServiceList: "/api/documentSC/findAppAndServiceList.json",
    findExampleSC: "/api/documentSC/findExampleSC.json"
  }
};


export default LocalUrlConf
