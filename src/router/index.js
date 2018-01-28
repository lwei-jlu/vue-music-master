import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Index from '../page/index/Index'
import Recommend from '../page/index/Recommend'
import Radio from '../page/index/Radio'
import Top from '../page/index/Top'
import SongList from '../page/index/SongList'
import Search from '../page/search/Search'
import SearchAlbum from '../page/search/SearchALbum'
import SearchArtist from '../page/search/SearchArtist'
import SearchSong from '../page/search/SearchSong'
import SearchSongList from '../page/search/SearchSongLIst'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/root/index'
    },
    {
      path: '/root',
      name: 'Root',
      component: Root,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index,
          redirect: 'index/recommend',
          children: [
            {
              path: 'recommend',
              name: 'recommend',
              component: Recommend
            },
            {
              path: 'radio',
              component: Radio
            },
            {
              path: 'top',
              component: Top
            },
            {
              path: 'songlist',
              component: SongList
            }
          ]
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      children: [
        {
          path: 'searchalbum',
          component: SearchAlbum
        },
        {
          path: 'searchArtist',
          component: SearchArtist
        },
        {
          path: 'searchSong',
          component: SearchSong
        },
        {
          path: 'searchSongList',
          component: SearchSongList
        }
      ]
    }
  ],
  mode: 'history'
})
