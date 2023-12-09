<template>
  <div class="info-box box-mini">
    <div class="info-box__inner">
      <div class="info-box__left">
        <div class="info-box-icon">
          <i class="fa fa-file"></i>
        </div>
        <div class="info-box-content">
          <span class="info-box-number"> HBA-30 </span>
        </div>
      </div>
      <div class="info-box__right">
        <div class="info-box-content">
          <label class="isible-xs">Semestr</label>
          <ul class="pagination">
            <li class="plabel"><span class="">Semestr</span></li>
            <li class="active">
              <span> 1 </span>
            </li>
            <li>
              <span>2</span>
            </li>
            <li>
              <span>3</span>
            </li>
            <li>
              <span>4</span>
            </li>
            <li>
              <span>5</span>
            </li>
            <li>
              <span>6</span>
            </li>
            <li>
              <span> 7 </span>
            </li>
            <li class="">
              <span>8</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SemestrPagination",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.info-box {
  &__inner {
    display: flex;
    align-items: center;
    min-height: auto;
    background: #fff;
    width: 100%;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  &__left {
    display: flex;
    align-items: center;
    max-width: 50%;
    width: 100%;
    .info-box-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      background: linear-gradient(
        136deg,
        #57f5a4 0%,
        #3aca80 62.5%,
        #0fa859 100%
      );
      color: #fff;
      border-radius: 8px;
      margin-right: 15px;
    }
    .info-box-content {
      .info-box-icon {
        font-size: 18px;
      }
      .info-box-number {
        color: #919caa;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 50%;
    width: 100%;
    .info-box-content {
      padding: 5px 10px;
      .isible-xs {
        display: none;
        text-align: center;
        max-width: 100%;
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 700;
      }
      .pagination {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 4px;
        li {
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          background: #f1f2f7;
          color: #031b3c;
          border-radius: 4px;
          margin: 2px;
          &.active {
            background: linear-gradient(
              136deg,
              #57f5a4 0%,
              #3aca80 62.5%,
              #0fa859 100%
            );
            color: #fff;
          }
          &.plabel {
            text-transform: uppercase;
            width: auto;
            background-color: #fff;
            margin-right: 10px;
            font-size: 16px;
          }
          span {
            font-size: 14px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .info-box {
    &__inner {
      display: flex;
      flex-direction: column;
    }
    &__left {
      max-width: unset;
      width: unset;
      .info-box-icon {
        display: none;
        line-height: 30px;
        font-size: 18px;
      }
      .info-box-content {
        padding: 5px 10px;
        .info-box-number {
        }
      }
    }
    &__right {
      max-width: unset;
      width: unset;
      .info-box-content {
        .isible-xs {
          display: block;
        }
        padding: 5px 10px;
        .pagination {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          border-radius: 4px;
          li {
            &.active {
            }
            &.plabel {
              display: none;
            }

            span {
            }
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .info-box {
    &__right {
      .info-box-content {
        .pagination {
          li {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>
