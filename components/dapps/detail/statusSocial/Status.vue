<template>
  <div class="wrapper">
    <span @click="$mixpanel.track('DApp - Status')" class="message" :class="'-' + item.status">Status: <strong>{{ item.status | formatDappStatus | capitalize }}</strong></span>
  </div>
</template>

<script>
  export default {
    computed: {
      item () {
        return this.$store.getters['dapps/detail/item']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/settings';

  .message {
    padding-left: 20px;
    position: relative;
    font-size: 1.05rem;
    &:before {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: $color--mine-shaft;
      left: 0;
      top: 1px;
      border-radius: 50%;
    }
    &.-live {
      &:before {
        background-color: $color--dapp-live;
      }
    }
    &.-prototype {
      &:before {
        background-color: $color--dapp-prototype;
      }
    }
    &.-beta {
      &:before {
        background-color: $color--dapp-beta;
      }
    }
    &.-concept {
      &:before {
        background-color: $color--dapp-concept;
      }
    }
    &.-wip {
      &:before {
        background-color: $color--dapp-wip;
      }
    }
    &.-stealth {
      &:before {
        background-color: $color--dapp-stealth;
      }
    }    
    &.-abandoned, &.-unknown {
      &:before {
        background-color: $color--dapp-abandoned;
      }
    }
  }

  .wrapper {
    margin: 5px 0 10px 0;
    @include tweakpoint('min-width', 600px) {
      margin: 0;
      flex-grow: 1;
    }
  }
</style>
