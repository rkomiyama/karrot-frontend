import Vue from 'vue'
import Vuex from 'vuex'

// alphabetical
import agreements from '@/agreements/datastore'
import alerts from '@/alerts/datastore'
import applications from '@/applications/datastore'
import authuser from '@/authuser/datastore'
import base from '@/base/datastore'
import communityFeed from '@/communityFeed/datastore'
import feedback from '@/feedback/datastore'
import group from '@/group/datastore'
import groupInfo from '@/groupInfo/datastore'
import history from '@/history/datastore'
import invitations from '@/invitations/datastore'
import messages from '@/messages/datastore'
import notifications from '@/notifications/datastore'
import pickups from '@/pickups/datastore'
import sidenav from '@/sidenav/datastore'
import stores from '@/stores/datastore'
import subscriptions from '@/subscriptions/datastore'
import topbar from '@/topbar/datastore'
import users from '@/users/datastore'
import utils from '@/utils/datastore'

// alphabetical
const appModules = [
  agreements,
  alerts,
  applications,
  authuser,
  base,
  communityFeed,
  feedback,
  group,
  groupInfo,
  history,
  invitations,
  messages,
  notifications,
  pickups,
  sidenav,
  stores,
  subscriptions,
  topbar,
  users,
  utils,
]

Vue.use(Vuex)

const collectedModules = {}
const collectedPlugins = []

appModules.forEach(({ modules = {}, plugins = [] }) => {
  Object.assign(collectedModules, modules)
  collectedPlugins.push(...plugins)
})

const debug = __ENV.DEV

export default new Vuex.Store({
  modules: collectedModules,
  plugins: collectedPlugins,
  strict: debug,
})
