<template>
  <button class="s-button" type="button" :class="[type, plain ? 'plain' : 'not-plain']" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SButton',
  props: {
    type: {
      type: String,
      default() { return 'primary' },
      validator: (value: string) => ['primary', 'success', 'danger', 'warning'].includes(value),
    },
    plain: {
      type: Boolean,
      default(): boolean { return true },
    },
  },
  computed: {
    // hoverColor() { return transColor(this.buttonColor) },
  },
})
</script>

<style lang="scss" scoped>
.s-button {
  height: 40px;
  width: 100px;
  border: none;
  color: inherit;
  //font-weight: 500;
  transition: all .2s;

  &:hover {
    cursor: pointer;
  }
}

.s-button.plain {
  border: 2px #EEEEEE solid;
  background-color: #fff;
}

.s-button.primary.not-plain {
  background-color: #002fa7;
  color: #fff;

  &:hover {
    background-color: #103fb7;
  }
}

.s-button.primary.plain {
  //background-color: #eee;
  //border: 2px #103fb7 solid;

  &:hover {
    //color: #fff;
    //background-color: #002fa7;
    border-color: #002fa7;
  }
}

.s-button.success.not-plain {
  background-color: #01847F;
  color: #fff;

  &:hover {
    background-color: #11948f;
  }
}

.s-button.success.plain {
  //background-color: #fefefe;
  //border: 2px #01847F solid;

  &:hover {
    //color: #fff;
    //background-color: #01847F;
    border-color: #01847F;
  }
}

.s-button.danger.not-plain {
  background-color: #F56C6C;
  color: #fff;

  &:hover {
    background-color: #F78A89;
  }
}

.s-button.danger.plain {
  //background-color: #fefefe;
  //border: 2px #470024 solid;

  &:hover {
    //color: #fff;
    //background-color: #470024;
    border-color: #F56C6C;
  }
}

.s-button.warning.not-plain {
  background-color: #FBD26A;
  color: #fff;

  &:hover {
    background-color: #f8d093;
  }
}

.s-button.warning.plain {
  //background-color: #fefefe;
  //border: 2px #FBD26A solid;

  &:hover {
    //color: #fff;
    //background-color: #FBD26A;
    border-color: #FBD26A;
  }
}
</style>
