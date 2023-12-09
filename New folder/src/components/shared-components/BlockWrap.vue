<script>
export default {
  name: "BlockWrap",
  functional: true,
  props: {
    offsetX: {
      type: [Number, String],
      default: 16,
    },
    offsetY: {
      type: [Number, String],
    },
    count: {
      type: [Number, String],
      default: 5,
    },
    overflow: {
      type: Boolean,
    },
    widthAuto: {
      type: Boolean,
    },
    modStyle: {
      type: String,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  render(h, { data, props, slots }) {
    const style = {
      "--offset-x": props.offsetX + "px",
      "--offset-y": (props.offsetY || props.offsetX) + "px",
      "--count": props.count,
    };
    const className = [
      {
        "bw--overflow": props.overflow,
        "bw--width-auto": props.widthAuto,
        ...data.class,
      },
      props.modStyle,
      data.staticClass,
      "bw",
    ];
    return h(props.tag, { ...data, class: className, style }, [
      h("div", { class: "bw__cn" }, slots().default),
    ]);
  },
};
</script>
<style lang="scss">
.bw {
  --offset: 10px;
  --count: 2;
  $self: &;

  & > &__cn {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--offset-y) / -2) calc(var(--offset-x) / -2);

    > * {
      max-width: calc(100% - var(--offset-x));
      margin: calc(var(--offset-y) / 2) calc(var(--offset-x) / 2);
    }
  }

  &:not(#{$self}--width-auto) {
    & > #{$self}__cn > * {
      width: calc(100% / var(--count) - var(--offset-x));
      max-width: 100%;
    }
  }

  &--overflow {
    overflow: hidden;
  }

  &.grow {
    & > #{$self}__cn > * {
      flex-grow: 1;
    }
  }

  @each $name, $prop,
    $val in (".justify-between", justify-content, space-between),
    (".justify-center", justify-content, center),
    (".flex-nowrap", flex-wrap, nowrap), (".align-center", align-items, center),
    (".align-start", align-items, flex-start),
    (".align-end", align-items, flex-end)
  {
    &#{$name} {
      & > #{$self}__cn {
        #{$prop}: #{$val};
      }
    }
  }
}
</style>
