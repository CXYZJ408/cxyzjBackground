<template>
    <v-navigation-drawer
            stateless
            value="true"
            class="sidebar-theme"
            width="200"
            id="sidebar"
    >
        <v-list class="sidebar-theme" dense>
            <span v-for="(item,index) in sidebarData" :key="index">
                  <v-list-group
                          value="true"
                          no-action
                          v-if="item.hasChild"
                  >
                <v-list-tile slot="activator">
                    <v-list-tile-action>
                        <v-icon color="#BFCBD9">{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>{{item.name}}</v-list-tile-title>
                </v-list-tile>

                <v-list-tile v-for="(item2,index2) in item.children" :key="index2" :to="item.link+item2.link" nuxt>
                    <v-list-tile-title
                    >{{item2.name}}</v-list-tile-title>
                </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :to="item.link" nuxt>
                <v-list-tile-action>
                    <v-icon color="#BFCBD9">{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>{{item.name}}</v-list-tile-title>
            </v-list-tile>
            </span>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'sidebar',
    props: {
      sidebarData: {
        type: Array
      }
    },
    methods: {
      test (href) {
        this.$router.push(href)
      }
    },
    data: () => {
      return {
        admins: [
          ['Management', 'people_outline'],
          ['Settings', 'settings']
        ],
        cruds: [
          ['Create', 'add'],
          ['Read', 'insert_drive_file'],
          ['Update', 'update'],
          ['Delete', 'delete']
        ]
      }
    }
  }
</script>

<style scoped>
    .sidebar-theme {
        background-color: #304156;
        color: #BFCBD9;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    }


</style>
<style>
    #sidebar .theme--light.v-icon {
        color: #BFCBD9 !important;
    }

    #sidebar .primary--text {
        color: #409EFF !important;

    }
</style>
