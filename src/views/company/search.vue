<template>
  <div>
    <label v-for="item in search_init" :key="item.key" :for="item.key">
      <div>{{ item.label }}</div>
      <Search :opt="item" />
    </label>
  </div>
</template>

<script>
import Search from '@/components/Search/Companysearch.vue'
const inviteStatus = []
const intentLevel = []
const boolOption = []

const search_init = [
  { label: '姓名', key: 'name', type: 'input' },
  { label: '所在机构', key: 'institution', type: 'input' },
  { label: '手机号', key: 'phone', type: 'input' },
  { label: '职务', key: 'position', type: 'multiple' },
  { label: '课程次数', key: 'courseNumber', type: 'number' },
  { label: '是否Alpha用户', key: 'isAlphaUser', type: 'radio' },
  { label: '是否iCourt学员', key: 'isIcourtStudent', type: 'radio' },
  { label: '所在省份', key: 'province', type: 'multiple', list: {}},
  { label: '所在城市', key: 'city', type: 'multiple', list: {}},
  { label: '所在区县', key: 'area', type: 'multiple', list: {}},
  { label: '标签', key: 'tags', type: 'multiple' },
  { label: '邀请状态', key: 'inviteStatus', type: 'radio', list: inviteStatus },
  { label: '邀请人', key: 'inviter', type: 'input' },
  { label: '跟进记录', key: 'content', type: 'input' },
  { label: '最后联系时间', key: 'lastContactTime', type: 'date' },
  { label: '决策点', key: 'decisionPoint', type: 'input' },
  { label: '意向程度', key: 'intentLevel', type: 'radio', list: intentLevel },
  { label: '橙子手机', key: 'orangePhone', type: 'input' },
  { label: '参加人数', key: 'joinActivityPersonNum', type: 'input' },
  { label: '所在群', key: 'chatGroup', type: 'input' },
  { label: '备注', key: 'remark', type: 'input' },
  { label: '执业年限', key: 'workTime' },
  { label: '出生日期', key: 'birthDay', type: 'birthDay' },
  { label: '新增邀请日期', key: 'upDataTime', type: 'upData' },
  {
    label: '是否未来律所',
    key: 'futureLawFlag',
    type: 'radio',
    list: boolOption
  },
  { label: '是否签到', key: 'sign', type: 'radio', list: boolOption },
  { label: '未来律所活动', key: 'futureLaw', type: 'input' },
  { label: '是否已购买该产品', key: 'isOrNot', type: 'radio', list: boolOption }
]
export default {
  components: {
    Search
  },
  data() {
    return {
      search_init
    }
  }
}

// render 实现组件的区分渲染
// 文本   下拉选项(多选)    时间    双文本

// http://localhost:8080/sales/api/v1/selections/configs
</script>

<style lang="scss" scoped>
</style>
