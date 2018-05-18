const itemRoute = {
  path: '/system/item',
  name: 'system-item',
  component: resolve => require(['@/pages/system/item/item'], resolve),
  children: [{
      path: '/system/item/list',
      name: 'item-list',
      meta: {
        menu: 'item|item-list',
        name: '商品列表',
        index: 2
      },
      component: resolve => require(['@/pages/system/item/item-list'], resolve)
    },
    {
      path: '/system/item/edit',
      name: 'item-edit',
      meta: {
        menu: 'item|item-list',
        name: '商品编辑',
        index: 3
      },
      component: resolve => require(['@/pages/system/item/item-edit'], resolve)
    },
    {
      path: '/system/item/import/list',
      name: 'item-import',
      meta: {
        menu: 'item|item-import',
        name: '进货记录',
        index: 2
      },
      component: resolve => require(['@/pages/system/item/import/import-infolist'], resolve)
    },
    {
      path: '/system/item/import',
      name: 'item-importing',
      meta: {
        menu: 'item|item-import',
        name: '进货',
        index: 3
      },
      component: resolve => require(['@/pages/system/item/import/import'], resolve)
    },
    {
      path: '/system/item/itemtype',
      name: 'item-itemtype',
      meta: {
        menu: 'item|item-itemtype',
        name: '商品种类',
        index: 2
      },
      component: resolve => require(['@/pages/system/item/itemtype/itemtype-list'], resolve)
    },
    {
      path: '/system/item/itemtype-add',
      name: 'item-itemtype-add',
      meta: {
        menu: 'item|item-itemtype',
        name: '添加种类',
        index: 3
      },
      component: resolve => require(['@/pages/system/item/itemtype/itemtype-add'], resolve)
    }
  ]
}
export default itemRoute
