import Vue from 'vue';
import template from './pricing.html';

export default Vue.extend({
  data: ()=>{
    return {
      grade: {
        math_mock100_progressive: 'p6',
        math_mock100_at: 'p6',
        math_anyone: 'p6'
      }
    };
  },
  template,
  methods: {
    onGradeChange: ($evt, codex)=>{
      this.grade[codex] = $evt.target.value;
    },
    gotoBookToc: ($evt, codex)=>{
      console.log(codex, $evt);
    }
  }
});
