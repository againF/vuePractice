import textDemo from './pages/textDemo.vue';
import filter from './pages/filter.vue';
import scrollDemo from './pages/scrollDemo.vue';
import dataDemo from './pages/dataDemo.vue';
import firstUpperCase from './pages/firstUpperCase.vue';
import vIfRepeat from './pages/vIfRepeat.vue';
import tagSelect from './pages/tagSelect.vue';
import ajax from './pages/ajax.vue';
import lazyload from './pages/lazyload.vue';

const routes = [
    {
        path: '/textDemo',
        component: textDemo
    },
    {
        path: '/filter',
        component: filter
    }
    ,
    {
        path: '/scrollDemo',
        component: scrollDemo
    },
    {
        path: '/dataDemo',
        component: dataDemo
    }
    ,
    {
        path: '/firstUpperCase',
        component: firstUpperCase
    },
    {
        path: '/vIfRepeat',
        component: vIfRepeat
    },
    {
        path: '/tagSelect',
        component: tagSelect
    },
    {
        path: '/ajax',
        component: ajax
    },
    {
        path: '/lazyload',
        component: lazyload
    }
    
]

export default routes;